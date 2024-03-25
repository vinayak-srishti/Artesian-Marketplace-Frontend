import React from 'react'
import { FaLock, FaUserAlt } from 'react-icons/fa';

import "../Component/Logpage.css"
import pic from './Image/logicon.png'

function Userlogin() {
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
                        <a href='' className='loglinkuser'>User</a>&nbsp;&nbsp;&nbsp;
                        
                        <a href='' className='loglinkda'>Delivery Agent</a>
                        
                      </h5>
                      <div class="card-body" className='logcardbody'>
                        <br></br>
                        <h5 class="card-title">Sign in as User</h5><hr className='hrlogpage'></hr>
                        <form>
                        <div class="input-group flex-nowrap">
                          
                          <span class="input-group-text" id="addon-wrapping"><FaUserAlt /></span>
                          <input type="email" class="form-control"  name='email'  placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
                        </div><br></br>
                        <div class="input-group flex-nowrap">
                          <span class="input-group-text" id="addon-wrapping"><FaLock /></span>
                          <input type="text" class="form-control" name='password'  placeholder="Password" aria-label="Username" aria-describedby="addon-wrapping" />
                        </div><br></br>
                        <a href="#!" className='forgotpassword'>Forgot password?</a><br></br><br></br>
                        <button class="btn btn-outline-success" type="submit">Login</button><br></br><br></br>
                        </form>
                        <p class="mb-0">Don't have an account? <a href="./userreg" class="text-white-50 fw-bold" className='signup'>Sign Up</a>
                        </p>
                        {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
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

export default Userlogin