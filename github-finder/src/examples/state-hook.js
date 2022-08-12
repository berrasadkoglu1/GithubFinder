import React, { Component, useState } from 'react'
import  ReactDOM from 'react-dom';

const App =(props) => {
    const [count,setCount]=useState(props.count);
    return (
        <div>
<p> butona {count} kere tıkladınız. </p>
<button onClick={() => setCount(count+1)}>+1</button>
        </div>
    )
}

App.defaultProps=() =>{
count: 6
}
ReactDOM.render(<App count={8}/>, document.getElementById('root'));