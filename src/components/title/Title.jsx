import { Img } from "remotion"
import { Nator } from "./Nator"
import { Term } from "./Term"
import The from "./the.png"

export const Title = () => {
	return (
		<>
			<Img 
				src={The}
				style={{
					position: "absolute",
					width: "750px",
					left: "585px",
					top: "-100px"
				}}
			/>
			<Term />
			<Nator />
		</>
	)
}
