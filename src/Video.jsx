import { Composition } from 'remotion';
import { Title } from './components/title/Title';

export const RemotionVideo = () => {
	return (
		<>
			<Composition
				id="Title"
				component={Title}
				width={1920}
				height={1080}
				durationInFrames={2910}
				fps={30}
			/>
		</>
	);
};
