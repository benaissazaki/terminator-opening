import { interpolate, useCurrentFrame } from "remotion"

export const Nator = () => {
	const frame = useCurrentFrame();
	const marginRight = interpolate(frame, [0,2670], [0, 6950], {
		extrapolateRight: 'clamp',
	  })

	return (
		<h1 style={{
			position: "absolute",
			top: '-100px',
			left: `${0-6072+marginRight}px`,
			fontSize: "1080px",
			margin: 0,
			padding: 0,
			fontFamily: "terminator real nfi"
		}}
		>
			Nator
		</h1>
	)
}
