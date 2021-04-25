import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState, useRef} from "react";


function App() {
    const [value, setValue] = useState('initial')
    const renderCount = useRef(1)
    const prevValue = useRef('')

    /* привязка к DOM элементу */
    const inputRef = useRef(null)

    useEffect(() => {
        prevValue.current = value
    }, [value])

    useEffect(() => {
        renderCount.current++
        //console.log(inputRef.current.value)
    })
    const focus = () => inputRef.current.focus()

    return (
        <div className="App">
            <h1>Количество рендеров: {renderCount.current} </h1>
            <h2>Прошлое состояние: {prevValue.current} </h2>
            <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} value={value}/>
            <button onClick={focus}>Фокус</button>
        </div>
    );
}

export default App;
