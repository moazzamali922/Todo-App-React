  ///////todo chatgpt///

  import React, { useState } from 'react';
  import './Todo.css';
  
  const Todo = () => {
    const [inputData, setInputData] = useState("");
    const [items, setItems] = useState([]);
    const [editableIndex, setEditableIndex] = useState(-1);
  
    const addItem = () => {
      if (!inputData) {
        // Handle empty input case
        return;
      } else {
        setItems([...items, inputData]);
        setInputData('');
      }
    } 
    const deleteItem = (index) => {
      const updatedItems = items.filter((_, i) => i !== index);
      setItems(updatedItems);
      setEditableIndex(-1);
    };
  
    const editItem = (index) => {
      setEditableIndex(index);
    };
  
    const saveItem = (index, value) => {
      const updatedItems = [...items];
      updatedItems[index] = value;
      setItems(updatedItems);
      setEditableIndex(-1);
    };
  
    const deleteAll = () => {
      setItems([]);
      setEditableIndex(-1);
    }
  
    return (
      <div className="todo-container">
        <div className="todo-header">
          <h1>Todo-list</h1>
        </div>
        <div className="todo-input">
          <input type="text" placeholder="Add item" value={inputData} onChange={(e) => setInputData(e.target.value)} />
          <button className="add-btn" onClick={addItem}>Add</button>
        </div>
        <div className="todo-list">
          {items.map((elem, ind) => (
            <div className="todo-item" key={ind}>
              <input
                type="text"
                value={editableIndex === ind ? inputData : elem}
                disabled={editableIndex !== ind}
                onChange={(e) => setInputData(e.target.value)}
              />
              {editableIndex === ind ? (
                <button className="save-btn" onClick={() => saveItem(ind, inputData)}>Save</button>
              ) : (
                <button className="edit-btn" onClick={() => editItem(ind)}>Edit</button>
              )}
              <button className="delete-btn" onClick={() => deleteItem(ind)}>Delete</button>
            </div>
          ))}
        </div>
        <div className="todo-footer">
          <button className="delete-all-btn" onClick={deleteAll}>Remove All</button>
        </div>
      </div>
    );
  }
  
  export default Todo;
  
 

   ////// todo khud banae/////

// const Todo = () => {
//   const [inputData, setInputData] = useState("");
//   const [items, setItems] = useState([]);
//   const addItem = () => {
//     if (!inputData) {

//     } else {
//       setItems([...items, inputData]);
//       setInputData('')
//     }
//   }

//   const deleteItem = (index) => {
//     const updatedItems = items.filter((_, i) => i !== index);
//     setItems(updatedItems);
//   };
//     const deleteAll = ()=>{
//       setItems([]);
//     }
//   return (
//     <>
//       <div>
//         <div>
//           <h1>Todo-list</h1>
//         </div>
//         <div>
//           <input type="text" placeholder='Add item ' value={inputData} onChange={(e) => setInputData(e.target.value)} />
//           <button title='add-item' onClick={addItem}>add</button>
//         </div>
//         <div>
//           {
//             items.map((elem, ind) => {
//               return (<div key={ind}>
//                 <input type="text" value={elem} />
//                 <button title='delete' onClick={ ()=>deleteItem(ind)}>Delete item</button>
//               </div>)
//             })
//           }

//         </div>

//         <div>
//           <button onClick={deleteAll}>Remove All</button>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Todo;

    

