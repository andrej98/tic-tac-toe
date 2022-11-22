import { addDoc, Timestamp } from 'firebase/firestore';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { matchesCollection } from '../utils/firebase';

import useLoggedInUser from './useLoggedInUser';

export type Player = 'O' | 'X';
export type Winner = Player | 'Tie' | undefined;

export const IndexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8] as const;
type Indexes = typeof IndexArray[number];
type BoardState = Partial<Record<Indexes, Player>>;

const getWinner = (board: BoardState): Winner => {
	// It's a tie if board is full
	if (Object.entries(board).length === 9) return 'Tie';

	// For board of size 3x3 there are only 8 winning combinations
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	] as const;

	// Check all combinations until winner is found
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (board[a] && board[a] === board[b] && board[a] === board[c]) {
			return board[a];
		}
	}

	// Winner is no one
	return undefined;
};

const useGame = (initialBoard: BoardState = {}) => {
	const user = useLoggedInUser();

	const [board, setBoard] = useState(initialBoard);

	const player = useMemo<Player>(
		() => (Object.entries(board).length % 2 ? 'O' : 'X'),
		[board]
	);

	const winner = useMemo(() => getWinner(board), [board]);

	// Handlers
	const onSquareClicked = (index: Indexes) => {
		// Disallow clicking on already set square
		if (winner || board[index]) {
			return;
		}

		// Mark square with current player's symbol
		setBoard(b => ({ ...b, [index]: player }));
	};

	const onRestart = useCallback(() => {
		setBoard({});
	}, []);

	// Register 'keydown' listener that restarts the game
	useEffect(() => {
		const listener = (e: KeyboardEvent) => {
			e.key === 'r' && onRestart();
		};
		document.addEventListener('keydown', listener);
		return () => {
			document.removeEventListener('keydown', listener);
		};
	}, []);

	// Send match result after the game ends
	useEffect(() => {
		if (!winner || !user?.email) return;
		addDoc(matchesCollection, {
			by: user.email,
			date: Timestamp.now(),
			winner
		});
	}, [winner]);

	return {
		board,
		player,
		winner,
		onSquareClicked,
		onRestart
	};
};

export default useGame;
