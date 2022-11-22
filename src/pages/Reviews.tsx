import { FC, useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { onSnapshot } from 'firebase/firestore';

import ReviewPreview from '../components/ReviewPreview';
import { reviewsCollection, Review } from '../utils/firebase';
import AddReview from '../components/AddReview';
import useLoggedInUser from '../hooks/useLoggedInUser';
import { useTranslation } from '../hooks/useTranslation';
import usePageTitle from '../hooks/usePageTitle';

const Reviews: FC = () => {
	const t = useTranslation();
	usePageTitle(t('reviews'));

	const [reviews, setReviews] = useState<Review[]>([]);
	const user = useLoggedInUser();

	useEffect(() => {
		// Call onSnapshot() to listen to changes
		const unsubscribe = onSnapshot(reviewsCollection, snapshot => {
			// Access .docs property of snapshot
			setReviews(snapshot.docs.map(doc => doc.data()));
		});
		// Don't forget to unsubscribe from listening to changes
		return () => {
			unsubscribe();
		};
	}, []);

	return (
		<>
			<Box
				sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}
			>
				<Typography variant="h4">{t('user_reviews')}</Typography>
				{/* Limit to one review per user */}
				{!reviews.find(r => r.by === user?.email) && (
					<AddReview>
						{open => (
							<Button onClick={open} variant="contained">
								{t('add_review')}
							</Button>
						)}
					</AddReview>
				)}
			</Box>
			{reviews.map((r, i) => (
				<ReviewPreview key={i} {...r} />
			))}
		</>
	);
};

export default Reviews;
