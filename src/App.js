import './App.css';
import { useState } from 'react';

function Button(props) {
	const handleClick = () => props.onClickFunction(props.increment);

	return (
		<button onClick={handleClick}>
			+{props.increment}
		</button>
	);
}

function Display(props) {
	return (
		<div className="display">{props.count}</div>
	);
}

function App() {
	const [counter, setCounter] = useState(0);
	const incrementCounter = (incrementValue) => setCounter(counter+incrementValue);

	return (
		<div className="App">
			<h1>Increment Counter</h1>
			<Button onClickFunction={incrementCounter} increment={1} />
			<Button onClickFunction={incrementCounter} increment={5} />
			<Button onClickFunction={incrementCounter} increment={10} />
			<Button onClickFunction={incrementCounter} increment={100} />
			<Display count={counter}/>
			<button className="reset" onClick={ () => setCounter(0) }>Reset</button>
		</div>
	);
}

export default App;
