import React from 'react'
import { motion } from 'framer-motion'
type Props = {
    task:string,
    date:string,
}
export default function TaskItem({task,date}:Props) {
  return (
    <motion.div className=' border bg-light displayFlex mx-3 my-3' whileHover={{opacity:'0.9',scale:'1.02'}}   style={{width:'350px', height:"100px"}}>
      <div className='w-75'>
      <h4>{task}</h4>
      <h6 style={{fontSize:'12px'}}>{date}</h6>
      </div>

      <h6 >
      <i className="fa-regular fa-pen-to-square" style={{color: "#f01494"}}></i>
      <i className="fa-solid fa-trash mx-2" style={{color: "#052971"}}></i>
      </h6>
    </motion.div>
  )
}
