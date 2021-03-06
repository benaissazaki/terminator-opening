import React from "react";
import { Img, interpolate, useCurrentFrame } from "remotion"
import NatorImg from "./nator.png"

export const Nator = () => {
	const frame = useCurrentFrame();
	const moveRight = interpolate(frame, [0, 2670], [0, 8870], {
		extrapolateRight: 'clamp',
	})
	const opacity = interpolate(frame, [2700, 2860], [0.6, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp'
	})

	return (
		<Img
			src={NatorImg}
			style={{
				position: "absolute",
				left: `${-7810 + moveRight}px`,
				height: "1080px",
				margin: 0,
				padding: 0,
				opacity,
				bottom: "0",
			}}
		/>
	)
}
