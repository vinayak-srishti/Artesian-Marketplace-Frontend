import React,{ useState } from 'react'
import { FaLock, FaUserAlt } from 'react-icons/fa';
import pic from './Image/logicon.png'

function Adminlogin() {
    const[data,setdata]=useState({email:'',password:''})
  const func1=(a)=>{
    setdata({...data,[a.target.name]:a.target.value})
    console.log(data)
}
const submitfn=(Event)=>{
  Event.preventDefault()
     console.log("saved")

  // axios.post("https://jsonplaceholder.typicode.com/posts",data)
    // .then((result)=>{
    //     console.log(result)
    // })
    // .catch((error)=>{
    //  console.log(error)
    // })
}
  return (
    <div>
        <section class="vh-100" className='sect1' /*style="background-color: #9A616D;"*/>
      <div class="container py-5 h-100">
        <div class="row justify-content-center align-items-center">
          <div class="col col-xl-10" >
            <div class="card" className='logcard' /*style="border-radius: 1rem;"*/>
              <div class="row g-0">
                <div class="col-md-6" >
                  <div className='col1'>
                    <img src={pic} alt='icon image' className='logicn' /><br></br>
                    <label className='labellogpage'>Museofire</label><br></br>
                    <span className='labeltagline'>The art of connection</span>
                  </div>
                </div>
                <div class=" col-md-6">
                  <div className='col2'>
                    <div class="card text-center" className='card1'>
                      <h5 class="card-header">
                        <label className='loglabel'>Sign in as:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href='./adminlog' className='loglinkuser'>Admin</a>&nbsp;&nbsp;&nbsp;
                        <a href='./logpage' className='loglinkuser'>Artist</a>&nbsp;&nbsp;&nbsp;
                        <a href='./userlogin' className='loglinkuser'>User</a>&nbsp;&nbsp;&nbsp;
                        
                        <a href='' className='loglinkda'>Delivery Agent</a>
                        
                      </h5>
                      <div class="card-body" className='logcardbody'>
                        <br></br>
                        <h5 class="card-title">Sign in as Admin</h5><hr className='hrlogpage'></hr>
                        <form onSubmit={submitfn}>
                        <div class="input-group flex-nowrap">
                          
                          <span class="input-group-text" id="addon-wrapping"><FaUserAlt /></span>
                          <input type="email" class="form-control" onChange={func1} name='email' value={data.email} placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
                        </div><br></br>
                        <div class="input-group flex-nowrap">
                          <span class="input-group-text" id="addon-wrapping"><FaLock /></span>
                          <input type="text" class="form-control" onChange={func1} name='password' value={data.password} placeholder="Password" aria-label="Username" aria-describedby="addon-wrapping" />
                        </div><br></br>
                        <a href="./adminresetpwd" className='forgotpassword'>Forgot password?</a><br></br><br></br>
                        <button class="btn btn-outline-success" type="submit">Login</button><br></br><br></br>
                        </form>
                        
                        
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Adminlogin