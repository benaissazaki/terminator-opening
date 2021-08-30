import { interpolate, useCurrentFrame } from "remotion";

export const Names = ({ name, position, startFadeIn, fadeDuration = 1, startFadeOut, }) => {
	const frame = useCurrentFrame();
	const opacityFin = interpolate(frame, [startFadeIn * 30, startFadeIn * 30 + fadeDuration * 30], [0, 1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp'
	})
	const opacityFout = interpolate(frame, [startFadeOut * 30, startFadeOut * 30 + fadeDuration * 30], [0, 1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp'
	})

	return (
		<h2
			style={{
				left: position[0],
				top: position[1],
				color: "rgb(238, 225, 225)",
				fontFamily: "Computerfont",
				zIndex: 999,
				position: "absolute",
				fontSize: "120px",
				lineHeight: "100px",
				opacity: 0 + opacityFin - opacityFout
			}}

		>
			<div
				style={{
					display: "inline-block",
					width: "70px",
					height: "70px",
					backgroundColor: "whitesmoke",
					marginLeft: "-100px",
					marginRight: "30px"
				}}
			/>
			{name.map((n) => (
				<>
					{n}
					<br />
				</>
			))}
		</h2>
	)
}
