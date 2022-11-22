import { FC } from 'react';
import Cross from '@mui/icons-material/Clear';
import Circle from '@mui/icons-material/PanoramaFishEye';

const PlayerIcon: FC = ({ children }) => {
	switch (children) {
		case 'X':
			return <Cross sx={{ color: 'playerX', fontSize: 'inherit' }} />;
		case 'O':
			return <Circle sx={{ color: 'playerO', fontSize: 'inherit' }} />;
		default:
			return <div>{children}</div>;
	}
};

export default PlayerIcon;
