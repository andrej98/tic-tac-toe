import { Delete, Star, StarBorder } from '@mui/icons-material';
import {
	Box,
	Card,
	CardActions,
	CardContent,
	IconButton,
	Typography
} from '@mui/material';
import { FC } from 'react';

import useLoggedInUser from '../hooks/useLoggedInUser';
import { useTranslation } from '../hooks/useTranslation';
import { Review } from '../utils/firebase';

const ReviewPreview: FC<Review> = ({ by, stars, description }) => {
	const t = useTranslation();
	const user = useLoggedInUser();
	return (
		<Card
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				width: '100%',
				textAlign: 'left'
			}}
		>
			<CardContent>
				<Typography variant="h5" color="textSecondary">
					{by}
				</Typography>
				<Box mb={2}>
					{[...Array(5).keys()].map(i =>
						i < stars ? (
							<Star key={i} color="primary" />
						) : (
							<StarBorder key={i} color="primary" />
						)
					)}
				</Box>
				{description && <Typography>{description}</Typography>}
			</CardContent>
			{user?.email === by && (
				<CardActions>
					<IconButton color="error" title={t('delete')}>
						<Delete />
					</IconButton>
				</CardActions>
			)}
		</Card>
	);
};

export default ReviewPreview;
