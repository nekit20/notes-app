import { useState } from 'react';

export default function AddNode({ setNodesList, nodesList }) {
	const [inputValue, setInputValue] = useState('');
	const [countInput, setCountInput] = useState(0);

	function handleChange(e) {
		setInputValue(e.target.value);
		setCountInput(prevState => prevState + 1)
	}

	function resetInput() {
		setInputValue('');
		setCountInput(0);
	}

	function addNode() {
		if (inputValue) {
			const date = new Date();
			setNodesList([...nodesList, {
				id: nodesList.length,
				text: inputValue,
				date: date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear()
			}]);
			setInputValue('');
			setCountInput(0);
		}
	}

	return (
		<div className='node' id="add_nodes">

			<textarea value={inputValue} onChange={handleChange} placeholder='Введите сюда своё значение...'></textarea>
			<p>Кол-во знаков: {countInput}</p>
			<button onClick={resetInput} style={{ marginRight: 'auto', marginLeft: '0px' }}>Сброс</button>
			<button onClick={addNode}>Сохранить</button>

		</div>
	);
}