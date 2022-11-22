import { Link, Typography } from '@mui/material';

import usePageTitle from '../hooks/usePageTitle';
import { useTranslation } from '../hooks/useTranslation';

const About = () => {
	const t = useTranslation();
	usePageTitle(t('about'));
	return (
		<>
			<Typography variant="h2">Tic Tac Toe</Typography>
			<Link variant="caption" href="https://en.wikipedia.org/wiki/Tic-tac-toe">
				Source Wikipedia
			</Link>
			<Typography>
				Tic-tac-toe (American English), noughts and crosses (Commonwealth
				English), or Xs and Os (Irish English) is a paper-and-pencil game for
				two players who take turns marking the spaces in a three-by-three grid
				with X or O. The player who succeeds in placing three of their marks in
				a horizontal, vertical, or diagonal row is the winner. It is a solved
				game, with a forced draw assuming best play from both players.
			</Typography>
			<Typography variant="h3">Gameplay</Typography>
			<Typography>
				Tic-tac-toe is played on a three-by-three grid by two players, who
				alternately place the marks X and O in one of the nine spaces in the
				grid.
			</Typography>
			<Typography>
				There is no universally-agreed rule as to who plays first, but in this
				article the convention that X plays first is used.
			</Typography>
			<Typography>
				Players soon discover that the best play from both parties leads to a
				draw. Hence, tic-tac-toe is often played by young children who may not
				have discovered the optimal strategy.
			</Typography>
			<Typography>
				Because of the simplicity of tic-tac-toe, it is often used as a
				pedagogical tool for teaching the concepts of good sportsmanship and the
				branch of artificial intelligence that deals with the searching of game
				trees. It is straightforward to write a computer program to play
				tic-tac-toe perfectly or to enumerate the 765 essentially different
				positions (the state space complexity) or the 26,830 possible games up
				to rotations and reflections (the game tree complexity) on this space.
				If played optimally by both players, the game always ends in a draw,
				making tic-tac-toe a futile game.
			</Typography>
			<Typography>
				The game can be generalized to an m,n,k-game, in which two players
				alternate placing stones of their own color on an m-by-n board with the
				goal of getting k of their own color in a row. Tic-tac-toe is the
				3,3,3-game. Harary&apos;s generalized tic-tac-toe is an even broader
				generalization of tic-tac-toe. It can also be generalized as an nd game,
				specifically one in which n equals 3 and d equals 2. It can be
				generalised even further by playing on an arbitrary incidence structure,
				where rows are lines and cells are points. Tic-tac-toe&apos;s incidence
				structure consists of nine points, three horizontal lines, three
				vertical lines, and two diagonal lines, with each line consisting of at
				least three points.
			</Typography>
		</>
	);
};

export default About;
