// import React, {useState} from 'react'
// import './App.css';

// function App() {

// const [todo, setTodo ] = useState('')



//   const handleInput = (event) =>{

// var   list = event.target.value;
// setTodo(list)
// console.log( list )
//   }


  // return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h1>Hi SelvaKumar  </h1>
    //       Learn React
    //     </a>
    //   </header>
    // </div>
   
//   );
// }

// export default App;
import React, { useState } from 'react';
  

function App() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]); // New state for the list of todos

  const handleInput = (event) => {
    const list = event.target.value;
    setTodo(list);
  };

  const handleAddTodo = () => {
    if (todo !== '') {
      // Add the current todo to the list
      setTodoList([...todoList, { value: todo }]);
      // Clear the input field
      setTodo('');
    }
  };

  return (
    <>
      <p>To do</p>
      <input
        style={{ textAlign: 'center', color: 'blue', height: '55px', fontSize: 23 }}
        type='text'
        value={todo}
        onChange={handleInput}
        placeholder='enter name'
      />
      <button onClick={handleAddTodo}>Add</button> {/* Call handleAddTodo on button click */}
      
      <div>
        {todoList.map((item, index) => (
          <p key={index}>{item.value}</p>
        ))}
      </div>
    </>
  );
}

export default App;
