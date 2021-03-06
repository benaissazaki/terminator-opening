import { Img, interpolate, useCurrentFrame } from "remotion"
import Termi from "./Termi.png";

export const Term = () => {
	const frame = useCurrentFrame();
	const moveLeft = interpolate(frame, [0, 2670], [0, 7820], {
		extrapolateRight: 'clamp',
	})
	const opacity = interpolate(frame, [2700, 2860], [0.6, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp'
	})

	return (
		<Img
			src={Termi}
			style={{
				position: "absolute",
				left: `${1920 - moveLeft}px`,
				height: "1080px",
				margin: 0,
				padding: 0,
				opacity,
				bottom: "-15px"
			}}
		/>
	)
}
