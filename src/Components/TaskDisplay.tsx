import React,{useState} from 'react'
import TaskItem from './TaskItem'
import { motion } from 'framer-motion'
type Task = {
    date:string,
    task:string
}
const date = new Date() 

const myArray:Task[] = [{date:'20/20/20',task:'hello'},{date:'20/20/20',task:'hello'},{date:'20/20/20',task:'hello'},{date:'20/20/20',task:'hello'},{date:'20/20/20',task:'hello'},{date:'20/20/20',task:'hello'},{date:'20/20/20',task:'hello'}]
export default function TaskDisplay() {
    const [task,setTask] = useState<string>("")
    const [taskArray,setTaskArray] = useState<Task[]>(myArray)
    const submitTask = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault()
        if(task==='')
            return 
        setTaskArray(taskArray.concat({task:task,date:String(date.getDate() +"/"+ date.getMonth()+"/"+ date.getFullYear())}))
        setTask('')
    }
  return (
    <>
      <section className='page bg-warning displayFlex  ' style={{justifyContent:'start'}}>
        <div className='w-75 my-5 border-bottom py-4'>
        <input type="text" className='w-50 ' name='task' maxLength={20} value={task} onChange={(e)=>{setTask(e.target.value)}} style={{borderRadius:"8px",height:'4vh',border:'none',padding:'5px'}} placeholder='Try typing something'/>
         <motion.button className='btn btn-danger mx-5' whileTap={{scale:1.09}} onClick={submitTask} onKeyDown={(e)=>{}}>Add Taks</motion.button>
        </div>

        <div className="w-75 " style={{display:'flex',height:"auto",flexWrap:'wrap',justifyContent:'center'}}>

        { taskArray.length!==0?
        taskArray.map((e)=>{
            return <TaskItem task={e.task} date={e.date}/>
        }):<h1>No tasks Entered</h1>}
        </div>
      </section>

    </>
  )
}
