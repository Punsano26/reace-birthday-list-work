import {useState} from 'react'
import data from "./data"
import List from './List';

function App() {
    const [people, setPeople] = useState(data);
    return (
        <div>
            <h1>Workshop 1 : birthday List Project</h1>
            <main>
              <section className='container'>
                <h3>birthday today</h3>
                <List/>
                <button>claer All</button>
              </section>
            </main>
        </div>
    )
}

export default App
