import { useState } from 'react';


export default function Search({ input, setInput }) {

	function handleChange(e) {
		setInput(e.target.value.toLowerCase());
	}


	return (
		<div id='search'>
			<input value={input} onChange={handleChange}></input>
		</div>
	);
}