import React from "react";
import { useRive } from '@rive-app/react-canvas';

function App() {

	const { rive, RiveComponent } = useRive({
		src: 'https://cdn.rive.app/animations/vehicles.riv',
		stateMachines: "bumpy",
		autoplay: false,
	});

	return (
		<div className="RiveContainer">
			<RiveComponent
				onMouseEnter={() => rive && rive.play()}
				onMouseLeave={() => rive && rive.pause()}
			/>
		</div>
	);
}

export default App;
