import './App.css';

import { motion } from 'framer-motion';
import { useState } from 'react';

function App() {
	return (
		<div className="App">
			<motion.div
				className="motion-container"
				animate={{
					rotate: [0, 200, 200, 0],
					x: [0, 200, 200, 0],
					y: [0, 200, 200, 0],
				}}
				transition={{ type: 'tween', duration: 3, repeat: Infinity }}
			></motion.div>
			<motion.div
				className="motion-container"
				animate={{
					rotate: [0, 200, 200, 0],
					x: [0, -200, 200, 0],
					y: [0, 200, -200, 0],
				}}
				transition={{ type: 'tween', duration: 5, repeat: Infinity }}
			></motion.div>
			<motion.div
				className="motion-container"
				animate={{
					rotate: [0, 200, 200, 0],
					y: [0, 200, -200, 0],
				}}
				transition={{ type: 'tween', duration: 1, repeat: Infinity }}
			></motion.div>
		</div>
	);
}

export default App;
