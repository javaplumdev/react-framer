import './App.css';

import { motion } from 'framer-motion';
import { useRef } from 'react';

function App() {
	const constraintsRef = useRef(null);

	return (
		<div className="example-container">
			<motion.div className="drag-area" ref={constraintsRef} />
			<motion.div
				drag
				dragConstraints={constraintsRef}
				animate={{
					rotate: [0, 200, 200, 0],
				}}
				transition={{ repeat: Infinity, type: 'tween', duration: 5 }}
			/>
			<motion.div
				drag
				dragConstraints={constraintsRef}
				animate={{
					rotate: [0, 200, 200, 0],
				}}
				transition={{ repeat: Infinity, type: 'tween', duration: 5 }}
			/>
		</div>
	);
}

export default App;
