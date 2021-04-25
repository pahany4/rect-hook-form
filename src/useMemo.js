import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState, useRef, useMemo} from "react";

const complexCompute = (num) => {
    let i = 0
    while (i < 1000000000) i++
    return num * 2
}

function App() {
    const [number, setNumber] = useState(42)
    const [colored, setColored] = useState(false)
    const computed = useMemo(() => {
        return complexCompute(number)
    }, [number])


    const styles = useMemo(()=> {
        return {
            color: colored ? 'darkred' : 'black'
        }
    }, [colored])



      useEffect(() => {
          console.log('Style changed')
      }, [styles])


    return (
        <div className="App">
            <h1 style={styles}>Вычисляемое свойство: {computed} </h1>
            <button onClick={() => setNumber(prev => prev + 1)}>Добавить</button>
            <button onClick={() => setNumber(prev => prev - 1)}>Убрать</button>
            <button onClick={() => setColored(prev => !prev)}>Изменить цвет</button>
        </div>
    );
}

export default App;
