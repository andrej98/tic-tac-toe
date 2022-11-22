import { Star, StarBorder } from '@mui/icons-material';
import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	IconButton,
	TextField,
	Typography
} from '@mui/material';
import { ReactNode, useState } from 'react';
import { setDoc } from 'firebase/firestore';

import useField from '../hooks/useField';
import { reviewsDocument } from '../utils/firebase';
import useLoggedInUser from '../hooks/useLoggedInUser';
import { useTranslation } from '../hooks/useTranslation';

type Props = {
	children: (open: () => void) => ReactNode;
};

const AddReview = ({ children }: Props) => {
	const t = useTranslation();
	const user = useLoggedInUser();

	// Open state
	const [open, setOpen] = useState(false);

	// Fields
	const [stars, setStars] = useState(1);
	const [description, descriptionProps] = useField('description');

	const [submitError, setSubmitError] = useState<string>();

	// Close and reset handler
	const closeDialog = () => {
		setOpen(false);
		setStars(0);
		descriptionProps.onChange({ target: { value: '' } } as never);
		setSubmitError(undefined);
	};

	// Submit handler
	const handleSubmit = async () => {
		if (!user?.email) {
			setSubmitError(t('not_signed_in'));
			return;
		}

		try {
			await setDoc(reviewsDocument(user.email), {
				by: user.email,
				stars,
				description
			});
			closeDialog();
		} catch (err) {
			setSubmitError(
				(err as { message?: string })?.message ?? t('unknown_error')
			);
		}
	};

	return (
		<>
			{children(() => setOpen(true))}
			<Dialog open={open} onClose={closeDialog}>
				<DialogTitle>{t('add_review')}</DialogTitle>
				<DialogContent
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: 2,
						minWidth: 500
					}}
				>
					{/* Stars select */}
					<Box>
						{[...Array(5).keys()].map(i => (
							<IconButton
								key={i}
								color="primary"
								component="span"
								onClick={() => setStars(i + 1)}
							>
								{i < stars ? <Star /> : <StarBorder />}
							</IconButton>
						))}
					</Box>
					<TextField label={t('description')} fullWidth {...descriptionProps} />
				</DialogContent>
				<DialogActions>
					{submitError && (
						<Typography
							variant="subtitle2"
							align="left"
							color="error"
							paragraph
						>
							{submitError}
						</Typography>
					)}
					<Button onClick={closeDialog}>{t('cancel')}</Button>
					<Button onClick={handleSubmit} variant="contained">
						{t('submit')}
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default AddReview;
