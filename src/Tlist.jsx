
import React, { useState } from 'react';
import ToDolist from './Todolist';
const App =()=>{
  const [inputList,setInputList] = useState("");
  const [items,setItems] = useState([]);

  const itemEvent=(event)=>{
    setInputList(event.target.value)

  }
  const listOfitems=()=>{
    setItems((oldItems)=>{
            return[...oldItems,inputList];

    });
    setInputList('')

  }
  const deleteItem =(id)=>{
    console.log("deleted");
    setItems((olditem)=>{
      return olditem.filter((arrElem,index)=>{
        return index !==id;
      })
    })

  }
  return(
    <>
   <div className='maindiv'>
    <div className='centerdiv'>
      <br/>
      <h1>ToDo List</h1>
      <br/>
      <input type='text' value={inputList} placeholder='Add A Items' onChange={itemEvent} />
      <button onClick={listOfitems}> + </button>
      <ol>
      {/* <li>{inputList}</li> */}

      {items.map((itemval,index)=>{
        return<ToDolist text = {itemval}
                        key ={index}
                        id = {index}
                        onSelect = {deleteItem}
        />
      })}
      </ol>
    </div>
   </div>

    </>
  );
}

export default App;