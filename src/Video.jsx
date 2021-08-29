import { Composition } from 'remotion';
import { Term } from './components/title/Term';

export const RemotionVideo = () => {
	return (
		<>
			<Composition
				id="Term"
				component={Term}
				width={1920}
				height={1080}
				durationInFrames={2910}
				fps={30}
			/>
		</>
	);
};
