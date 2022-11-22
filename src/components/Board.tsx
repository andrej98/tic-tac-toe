import { FC } from 'react';
import { Grid } from '@mui/material';

import useGame, { IndexArray } from '../hooks/useGame';

import Square from './Square';
import Status from './Status';

const Board: FC = () => {
	const { board, player, winner, onSquareClicked, onRestart } = useGame();

	return (
		<Grid container spacing={1}>
			{IndexArray.map(i => (
				<Square key={i} onClick={() => onSquareClicked(i)}>
					{board[i] ?? i}
				</Square>
			))}
			<Status player={player} winner={winner} onRestart={onRestart} />
		</Grid>
	);
};

export default Board;
