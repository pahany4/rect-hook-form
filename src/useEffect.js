import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react";


function App() {
    const [type, setType] = useState('users')
    const [data, setData] = useState([])
    const [pos, setPos] = useState({
        x: 0,
        y: 0
    })

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => setData(json))
        return ()=>{
            console.log('здесь можно выполнять отписки, удалять слушателей и т.д.')
        }
    }, [type])

    /* Имитирование ComponentDidMount */
    /*useEffect(() => {
        console.log('ComponentDidMount')
    }, [])*/

    const mouseMoveHandler = (event) => {
        setPos ({
            x: event.clientX,
            y: event.clientY
        })
    }

    useEffect(() => {
        window.addEventListener('mousemove', mouseMoveHandler)

        /* удаляем слушателя */
        return () => {
            window.removeEventListener('mousemove', mouseMoveHandler)
        }
    }, [])



    return (
        <div className="App">
            <h1>Ресурс: {type}</h1>

            <button onClick={() => {
                setType('users')
            }}>Пользователи
            </button>
            <button onClick={() => {
                setType('todos')
            }}>Todos
            </button>
            <button onClick={() => {
                setType('posts')
            }}>Посты
            </button>
            {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
            <pre>{JSON.stringify(pos, null, 2)}</pre>
        </div>
    );
}

export default App;
