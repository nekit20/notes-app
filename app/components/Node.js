

export default function Node({ text, date, id, setNodesList, nodesList }) {

	function deleteNode() {
		const nodes = nodesList.filter(item => item.id != id);
		setNodesList(nodes);
	}

	return (
		<div className='node'>
			<p className='main-text'>{text}</p>
			<p className='date'>{date}</p>
			<button onClick={deleteNode}>Удалить</button>
		</div>
	);
}