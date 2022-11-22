import { FC } from 'react';
import { Grid, Button } from '@mui/material';

import PlayerIcon from './PlayerIcon';

type Props = {
	onClick: () => void;
};

const Square: FC<Props> = ({ onClick, children }) => (
	<Grid item xs={4}>
		<Button
			variant="outlined"
			onClick={onClick}
			sx={{
				aspectRatio: '1',
				width: '100%',
				fontSize: 32
			}}
		>
			<PlayerIcon>{children}</PlayerIcon>
		</Button>
	</Grid>
);

export default Square;
