import { Img, useCurrentFrame, interpolate } from "remotion"
import { Nator } from "./Nator"
import { Term } from "./Term"
import The from "./the.png"

export const Title = () => {
	const frame = useCurrentFrame()
	const scale = interpolate(frame, [2700, 2880], [0, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp"
	})
	console.log(scale);
	return (
		<div
			style={{
				transform: `scale(${1-scale})`,
				transformOrigin: "center",
				width: "100%",
				height: "100%",
			}}
		>
			<Img
				src={The}
				style={{
					position: "absolute",
					width: "750px",
					left: "585px",
					top: "-200px"
				}}
			/>
			<Term />
			<Nator />
		</div>
	)
}
