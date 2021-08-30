import { Img, interpolate, useCurrentFrame } from "remotion"
import Termi from "./Termi.png";

export const Term = () => {
	const frame = useCurrentFrame();
	const marginRight = interpolate(frame, [0, 2670], [0, 6490], {
		extrapolateRight: 'clamp',
	})

	return (
		<Img
			src={Termi}
			style={{
				position: "absolute",
				left: `${1750 - marginRight}px`,
				height: "900px",
				margin: 0,
				padding: 0,
				opacity: 0.8,
				bottom: 0
			}}
		/>
	)
}
