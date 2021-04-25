import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";

const calc = () => {
    console.log('calc')
    return Math.trunc(Math.random() * 20)
}

function App() {
    //const [counter, setCounter] = useState(0)
    // const [counter, setCounter] =

    /* для производительности */
    const [counter, setCounter] = useState(() => {
        return calc()
    })
    /*const increment = () => {
        setCounter (counter + 1)
    }*/


    const increment = () => {
        setCounter((prevCounter) => {
            return prevCounter + 1
        })

        setCounter(prev => prev + 1)
    }

    const decrement = () => {
        setCounter(counter - 1)
    }



    /* state в виде объекта */
    const [state, setState] = useState({
        title: 'Счетчик',
        date: Date.now()
    })

    const updateTitle = () => {
        setState( prev => {
            return {
                ...prev, title:'новое название'
            }
        })
    }

    return (
        <div className="App">
            <h1>Счетчик: {counter}</h1>
            <button onClick={increment}>Добавить</button>
            <button onClick={decrement}>Убрать</button>
            <button onClick={()=>{ updateTitle()}}> Изменить title</button>

            <pre>
            {JSON.stringify(state, null, 2)}
        </pre>
        </div>
    );
}

export default App;
