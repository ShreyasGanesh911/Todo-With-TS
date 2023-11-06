import React,{useState} from 'react'
import { motion } from 'framer-motion'
type Task = {
  date:string,
  task:string,
  taskId:string,
}
type Props = {
    task:string,
    date:string,
    taskArray:Task[],
    setTaskArray:any,
    taskId:string,
    toastMsg:(a:string,b:string)=>void,
}

export default function TaskItem({task,date,taskId,taskArray,setTaskArray,toastMsg}:Props) {
  const[activeField,setActiveField] = useState<Boolean>(false)
  const[editTaskValue,setEditTaskValue] = useState<string>(task)
  const deleteTask =()=>{
      taskArray = taskArray.filter((e)=>{
          return (e.taskId!==taskId)
      })
      setTaskArray(taskArray)
      toastMsg("Deleted!","✅")
  }
  const submitTask = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.preventDefault()
    if(editTaskValue==='')
      return toastMsg("You can't leave it blank!",'⚠️')
    
    setActiveField(false)
    const myTask:Task[] = taskArray.map((e)=>{
      if(e.taskId===taskId)
        e.task=editTaskValue
      return e
    })
  setTaskArray(myTask)  
  toastMsg("Task edited !",'✅')
  }
  return (
    <motion.div className=' border bg-light displayFlex mx-3 my-3 text-center'  whileHover={activeField?{}:{opacity:'0.9',scale:'1.02'}}   style={{width:'350px', height:"100px"}}>
      <div className='w-75'>
      {activeField? 
      <div>
          <input  type='text' value={editTaskValue} maxLength={45} onChange={(e)=>{setEditTaskValue(e.target.value)}} />
       <button className='btn btn-warning mx-3' onClick={submitTask}>ok</button>
      </div>
    
      :
      <h5>{task}</h5>}
      <h6 style={{fontSize:'12px'}}>{date}</h6>
      </div>
      <h6 >
      <i className="fa-regular fa-pen-to-square" onClick={()=>setActiveField(true)}  style={{color: "#f01494"}}></i>
      <i className="fa-solid fa-trash mx-2" onClick={deleteTask} style={{color: "#052971"}}></i>
      </h6>
     
    </motion.div>
    
  )
}
