import React from "react";
import { Img, interpolate, useCurrentFrame } from "remotion"
import NatorImg from "./nator.png"

export const Nator = () => {
	const frame = useCurrentFrame();
	const marginRight = interpolate(frame, [0, 2670], [0, 7250], {
		extrapolateRight: 'clamp',
	})

	return (
		<Img
			src={NatorImg}
			style={{
				position: "absolute",
				left: `${-6320 + marginRight}px`,
				height: "900px",
				margin: 0,
				padding: 0,
				opacity: 0.8,
				bottom: 0
			}}
		/>
	)
}
