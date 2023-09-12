'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Nodes from './components/Nodes'
import { useEffect, useState } from 'react'
import Search from './components/Search'

export default function Home() {
  const [nodesList, setNodesList] = useState([{
    id: 0,
    text: 'Первая запись',
    date: '27.06.2023'
  }
  ]);
  const [input, setInput] = useState('');
  const [searchingNode, setSearchNode] = useState(nodesList);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div id={darkMode ? 'darkTheme' : ''}>
      <main className={styles.main}>
        <div id='header'>
          <h1>Записи</h1>
          <button id='work' onClick={() => setDarkMode(!darkMode)}>Переключить режим</button>
        </div>
        <Search input={input} setInput={setInput}></Search>
        <Nodes nodesList={nodesList.filter(node => node.text.toLowerCase().includes(input))} setNodesList={setNodesList}>
        </Nodes>
      </main>
    </div>
  )
}
