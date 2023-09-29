import {useState} from 'react'
import data from "./data"
import List from './List';

function App() {
    const [people, setPeople] = useState(data);
    const clearAll = () =>{
      setPeople([]);
    }
    return (
        <div>
            <h1>Workshop 1 : birthday List Project</h1>
            <h2>Punsan Somkla 654259026</h2>
            <main>
              <section className='container'>
                <h3>{people.length} birthday today</h3>
                <List people = {people}/>
                <button onClick={clearAll}>claer All
                </button>
              </section>
            </main>
        </div>
    )
}

export default App
