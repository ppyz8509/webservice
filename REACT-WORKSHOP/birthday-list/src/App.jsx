import { useState } from 'react'
import './App.css'
import List from './List'
import data from './data'

function App() {
 const [people, setPeople] = useState (data)
const clearAll = () =>{
  setPeople([])
}
 return (
    <div>
    <h1>WORKSHOP 1: Birthday list</h1>
    <main>
      <section className='container'>
        <h3>{people.length} Birthday today
          <List people = {people} />
     <button onClick={clearAll}>Clear All</button>
        </h3>
      </section>
    </main>
    </div>
  )
}

export default App
