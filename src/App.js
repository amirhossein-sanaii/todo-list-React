import { useState } from 'react';

import Addtodo from './Component/Add-todo/Addtodo';
import Header from './Component/Header/Header';
import Showtodo from './Component/Show-todo/Showtodo';

import dataTodo from './Data'

import './App.css';


// dataTodo.push('45')
// dataTodo.remove(0)
// console.log(dataTodo.text);


function App() {

  const [todo , settodo] = useState(dataTodo.text)
  // console.log(todo);


  const remove = (i)=>{
  dataTodo.remove(i)
  settodo(dataTodo.text)
  }

  const addDatatodo = (event)=>{
    event.preventDefault()
    // console.log(event.target.textarea.value);
    dataTodo.push(event.target.textarea.value);
    settodo(dataTodo.text);
    event.target.textarea.value =''
  }

  // addDatatodo('lolo')
  


  return (
    <div className="App">
      <Header/>
      <hr/>
      <Addtodo addDatatodo={addDatatodo}/>
      <hr/>
      {todo.map((item , index)=>{
        // console.log(index);
        // console.log(item);
        return(
          <Showtodo key={index} text={item} remove={()=>remove(index)} index={index}/>
        )
      })}
    </div>
  );
}

export default App;
