import {useState} from 'react'
import './App.css';

function App() {

  const [todos,setTodos]=useState([])
  const [todo,setTodo]=useState('')
  const deleteTodo = (id) => {
    const removedArr = [...todos].filter(todo => todo !== id);
       setTodos(removedArr);
     }



  return (
    <div className="app">
      <div className='left' >
      < div className="card">
        <h2>To-do List</h2>
         <textarea value={todo} onChange={(e)=>setTodo(e.target.value) } className="text_area" placeholder="Enter your tasks here"></textarea>
        <div className="btn">
           <button onClick={()=>setTodos([...todos,{id:Date.now(), text : todo,status:false}])} className="add_task">Add Task<i className="fa-solid fa-plus"></i></button> 
        </div>

        {
          todos.map((obj)=>{
            return(
              <ul className="mainList">
              <li className="list_item" id="1">
                  <div className="main_div">
                  <input onChange={(e)=>{
            console.log(e.target.checked)
            console.log(obj)
            setTodos(todos.filter(obj2=>{
              if(obj2.id===obj.id){
                obj2.status=e.target.checked
              }
              return obj2
            }))
          }} value={obj.status} type="checkbox" name="" id="" />
          <p>{obj.text}</p>

          <span id="deletes1" onClick={()=>deleteTodo(obj)}><i className="fa-solid fa-xmark"></i></span>
                     
                  </div>
                
              </li>
          </ul>

            )
          })
        }

       
    </div>
      </div>
      
    <div className='right'>
    <div className='active-todo'>
    <h2>Active To-do </h2>
     
  {
    todos.map((obj)=>{
      if(obj.status){
        return(
          
        <div>
        
        <ul className="mainList">
            <li className="list_item" id="1">
                <div className="main_div">
                    <div className="checked_div">  <strike id="strike1" className="strike_none">{obj.text}</strike> </div> 
                    <span id="deletes1" onClick={()=>deleteTodo(obj)}><i className="fa-solid fa-xmark"></i></span>
                </div>
              
            </li>
        </ul>

      </div>
        )
      }
      return null
    })
  }
      </div>
    </div>
    </div>
  
  );
}


export default App;
