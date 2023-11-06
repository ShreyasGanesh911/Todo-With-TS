import React,{useState} from 'react'
import TaskItem from './TaskItem'
import { motion } from 'framer-motion'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toastMsg } from '../Toast';

type Task = {
    date:string,
    task:string,
    taskId:string,
}
const date = new Date() 

const myArray:Task[] = []
export default function TaskDisplay() {
    const [task,setTask] = useState<string>("")
    const [taskArray,setTaskArray] = useState<Task[]>(myArray)
    const submitTask = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault()
        if(task==='')
            return toastMsg("You can't leave it blank!",'⚠️')
        setTaskArray(taskArray.concat({task:task,taskId:String(Math.random()*1000),date:String(date.getDate() +"/"+ date.getMonth()+"/"+ date.getFullYear())}))
        setTask('')
        toastMsg('Added','✅')
    }
    const checkKeyValue = (e:React.KeyboardEvent<HTMLInputElement>)=>{
      if (e.key === "Enter"){
      setTaskArray(taskArray.concat({task:task,taskId:String(Math.random()*1000),date:String(date.getDate() +"/"+ date.getMonth()+"/"+ date.getFullYear())}))
      setTask('')
      toastMsg('Added','✅')
      } 
    }
  return (
    <>
      <section className='page bg-warning displayFlex text-center ' style={{justifyContent:'start'}}>
        <div className='w-75 my-5 border-bottom py-4'>
        <input type="text" className='w-50 ' name='task' maxLength={45} value={task} onChange={(e)=>{setTask(e.target.value)}} onKeyDown={checkKeyValue} style={{borderRadius:"8px",height:'4vh',border:'none',padding:'5px'}} placeholder='Try typing something'/>
         <motion.button className='btn btn-danger mx-5' whileTap={{scale:1.09}} onClick={submitTask} onKeyDown={(e)=>{}}>Add Taks</motion.button>
        </div>

        <div className="w-75 " style={{display:'flex',height:"auto",flexWrap:'wrap',justifyContent:'center'}}>

        { taskArray.length!==0?
        taskArray.map((e)=>{
            return <TaskItem task={e.task} date={e.date} taskArray={taskArray} toastMsg={toastMsg} taskId={e.taskId} setTaskArray={setTaskArray}/>
        }):<h1>No tasks Entered</h1>}
        </div>
      </section>
      <ToastContainer/>
    </>
  )
}
// {date:'20/20/20',task:'hello',taskId:date.getMilliseconds()},{date:'20/20/20',task:'hello',taskId:date.getMilliseconds()},{date:'20/20/20',task:'hello',taskId:date.getMilliseconds()},{date:'20/20/20',task:'hello',taskId:date.getMilliseconds()},{date:'20/20/20',task:'hello',taskId:date.getMilliseconds()},{date:'20/20/20',task:'hello',taskId:date.getMilliseconds()},{date:'20/20/20',task:'hello',taskId:date.getMilliseconds()}