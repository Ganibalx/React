import React from 'react';
import './App.css';
import { Message } from "./components/Message";

const text = 'Это текст из переменной'

function App(){
    return (
        <>
            <h1>Hello world</h1>
            <Message text={ text } />
        </>
    );
}

export default App;
