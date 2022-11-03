import React, { useState  , useRef} from 'react'
import TodoCards from './TodoCards'
import ReactDOM from 'react-dom/client';
import App from '../App';
function Form(props) {

    const[titlee, settitlee] = useState('')
    const[newId, setId] = useState(1)
    const [task, setTask] = useState([])
    const [title, setTitle] = useState('')
    const [editor, setEditor] = useState('')
    const [endDate, setEndDate] = useState('')
    const [description, setDescription] = useState('')

    const changeTitle = (event) => {
        event.preventDefault();
        setTitle(event.target.value)
    }
    const changeEditor = (event) => {
        event.preventDefault();
        setEditor(event.target.value)
    }
    const changeEndDate = (event) => {
        event.preventDefault();
        setEndDate(event.target.value)
    }
    const changeDescription = (event) => {
        event.preventDefault();
        setDescription(event.target.value)
    }
    const getStartDate =() =>{
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
        return `${day}:${month+1}:${year}`
    }
    const deleteTask = (key) => {
        // const newTask = task.filter(taskItem =>{
        //     return taskItem.id!=id
        // })
        // setTask(newTask);
        localStorage.removeItem(key);
        // setId(111)
        const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
         <App />
        </React.StrictMode>
    );
    }
    const storeTask =(event) =>{
        
        let newTask ={
            id: newId,
            title: title,
            editor: editor,
            description: description,
            startDate: getStartDate(),
            endDate: endDate
        }
        //setTask([newTask, ...task])
        localStorage.setItem(Math.floor(Math.random()*1000), JSON.stringify(newTask))
        //localStorage.setItem(...newTask ,newTask.id)
        setId(newId+1)
        setTitle('')
        setEditor('')
        setEndDate('')
        setDescription('')
        console.log(task) 
    }
    const ref = useRef(null)
    const editTask = (id) => {
        ref = ref.current.click()
     
    }

    const editIt = (key) => {
        const newDescription = prompt("Enter the new description")
        let taskItem   =JSON.parse(localStorage.getItem(key));
        console.log(taskItem)
        taskItem.description = newDescription

        localStorage.setItem(key, JSON.stringify(taskItem));
        const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
         <App />
        </React.StrictMode>
    );
    }
  return (
    <>



    <div className="row g-3">
        <div className="mx-3 col-sm-7">
        <input type="text" className="form-control" placeholder="Title" aria-label="Title" onChange={changeTitle} value={title}/>
    </div>
    <div className="mx-3 col-sm">
        <input type="text" className="form-control" placeholder="Editor" aria-label="Editor" onChange={changeEditor} value={editor}/>
    </div>
        <div className="mx-3 col-sm">
        <input type="text" className="form-control" placeholder="End Date" aria-label="End Date" onChange={changeEndDate} value={endDate}/>
    </div>
    <div className="mx-3 mb-3">
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter Description" onChange={changeDescription} value={description}></textarea>
    </div>
    </div>
        <div className="d-grid gap-2 col-4 mx-auto my-3">
        <button className="btn btn-primary" type="button" onClick={storeTask}>Add Task</button>
    </div>
    <div>
    {/* {task.map((taskItem)=>{
        return <TodoCards taskItem={taskItem} deleteTask={deleteTask} editTask={editTask}/>
    })} */}
    {Object.keys(localStorage).map(function(key){
            const taskItem   =JSON.parse(localStorage.getItem(key));
            console.log(key)
            return <>
            <TodoCards taskItem={taskItem} deleteTask={deleteTask} editTask={editTask} newKey={key}/>
            <button ref = {ref}type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>editIt(key)} > Edit
            </button>
            </>
    })}
    </div>
    </>
  )
}

export default Form