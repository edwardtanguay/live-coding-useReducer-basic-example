import { useReducer } from 'react';
import './App.scss';

const initialState = {
    number: 0,
	lastAction: '',
	whenLastClicked: ''
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'down':
			return {
				number: state.number - 1,
				lastAction: 'decrement',
				whenLastClicked: String(new Date())
			};
		case 'up':
			return {
				number: state.number + 1,
				lastAction: 'increment',
				whenLastClicked: String(new Date())
			};
	}
};

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="App">
            <h1>useReducer</h1>
            <div>Number: {state.number}</div>
			<div>Last action: {state.lastAction}</div>
			<div className="when">When last clicked: {state.whenLastClicked}</div>
            <div className="buttonArea">
                <button onClick={() => dispatch({type: 'down'})}>-</button>
                <button onClick={() => dispatch({type: 'up'})}>+</button>
            </div>
        </div>
    );
}

export default App;
