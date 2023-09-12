'use client'
import Node from './Node';
import AddNode from './AddNode'

export default function Nodes({ nodesList, setNodesList }) {
	return (
		<div id="nodes">
			{
				nodesList.map(node => <Node nodesList={nodesList} setNodesList={setNodesList} id={node.id} text={node.text} date={node.date} key={node.id}></Node>)
			}
			<AddNode nodesList={nodesList} setNodesList={setNodesList}></AddNode>
		</div>
	);
}