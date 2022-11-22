import Board from '../components/Board';
import usePageTitle from '../hooks/usePageTitle';
import { useTranslation } from '../hooks/useTranslation';

const Play = () => {
	const t = useTranslation();
	usePageTitle(t('play'));
	return <Board />;
};

export default Play;
