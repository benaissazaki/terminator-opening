import { Img, useCurrentFrame, interpolate, AbsoluteFill, Audio } from "remotion"
import { Names } from "./Names"
import { Nator } from "./Nator"
import { Term } from "./Term"
import The from "./the.png"
import audio from "./audio.mp3"

export const Title = () => {
	const frame = useCurrentFrame()
	const scale = interpolate(frame, [2700, 2880], [0, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp"
	})

	return (
		<>
			<AbsoluteFill
				style={{
					backgroundColor: "black",
				}}
			/>
			<Audio
				src={audio}
				startFrom={0}
				endAt={2910}
			/>
			<div
				style={{
					transform: `scale(${1 - scale})`,
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
				<Names
					name={["ARNOLD", "SCHWARZENEGGER"]}
					position={["150px", "350px"]}
					startFadeIn={7}
					startFadeOut={11}
				/>
				<Names
					name={["MICHAEL", "BIEHN"]}
					position={["150px", "350px"]}
					startFadeIn={13}
					startFadeOut={17}
				/>
				<Names
					name={["LINDA", "HAMILTON"]}
					position={["150px", "350px"]}
					startFadeIn={19}
					startFadeOut={23}
				/>
				<Names
					name={["LANCE", "HENRIKSEN"]}
					position={["150px", "350px"]}
					startFadeIn={25}
					startFadeOut={29}
				/>
				<Names
					name={["and", "PAUL WINFIELD", "as Lt. Traxler"]}
					position={["150px", "350px"]}
					startFadeIn={31}
					startFadeOut={35}
				/>
				<Names
					name={["RICK ROSSOVICH", "BESS MOTTA", "EARL BOEN"]}
					position={["150px", "350px"]}
					startFadeIn={37}
					startFadeOut={41}
				/>
				<Names
					name={["Edited by", "MARK GOLDBLATT"]}
					position={["150px", "230px"]}
					startFadeIn={43}
					startFadeOut={47}
				/>
				<Names
					name={["Director of Photography", "ADAM GREENBERG"]}
					position={["150px", "370px"]}
					startFadeIn={49}
					startFadeOut={53}
				/>
				<Names
					name={["Music by", "BRAD FIEDEL"]}
					position={["150px", "230px"]}
					startFadeIn={55}
					startFadeOut={59}
				/>
				<Names
					name={["Casting by", "STANZI STOKES"]}
					position={["150px", "370px"]}
					startFadeIn={61}
					startFadeOut={65}
				/>
				<Names
					name={["Special Terminator Effects", "Created by", "STAN WINSTON"]}
					position={["150px", "370px"]}
					startFadeIn={67}
					startFadeOut={70}
				/>
				<Names
					name={["Written by", "JAMES CAMERON with", "GALE ANNE HURD"]}
					position={["150px", "370px"]}
					startFadeIn={72}
					startFadeOut={74}
				/>
				<Names
					name={["Produced by", "GALE ANNE HURD"]}
					position={["150px", "370px"]}
					startFadeIn={76}
					startFadeOut={80}
				/>
				<Names
					name={["Directed by", "JAMES CAMERON"]}
					position={["150px", "230px"]}
					startFadeIn={82}
					startFadeOut={86}
				/>
			</div>
		</>
	)
}
