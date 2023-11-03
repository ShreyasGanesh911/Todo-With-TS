import React,{useState,ChangeEvent} from 'react'

export default function TaskDisplay() {
    const [task,setTask] = useState<string>("")
  return (
    <>
      <section className='page bg-warning displayFlex ' style={{justifyContent:'start'}}>
        <div className='w-75 my-5'>
        <input type="text" className='w-50 ' name='task' value={task} onChange={(e)=>{setTask(e.target.value)}} style={{borderRadius:"8px",height:'4vh',border:'none',padding:'5px'}} placeholder='Try typing something'/>
         <button className='btn btn-danger mx-5' onClick={()=>{alert(task)}}>Add Taks</button>
        </div>
        
      </section>
    </>
  )
}
