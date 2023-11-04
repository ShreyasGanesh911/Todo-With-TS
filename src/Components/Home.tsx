import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>

  <section className='page bg-warning displayFlex' >
    <h1 className='text-danger text-center my-3'>Tasky </h1>
    <form className='border px-5 py-2' style={{height:'auto'}}>
    <label  className="form-label">Email address</label>
    <input type="email" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div>
    <label  className="form-label float-left ">Password</label>
    <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    </div>
    <div className='d-flex'>
    <button className='btn btn-danger my-3'>Login</button>
    <Link to='/signup' className='nav-link my-4 mx-2 text-danger text-decoration-underline' style={{fontSize:'12px'}}>Don't have an Account?</Link>
    </div>
    
    </form>
  </section>
    </>
  )
}
