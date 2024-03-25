import React from 'react'
import pic from './Image/logicon.png'
import { FaLock } from 'react-icons/fa';


function Adminresetpwd() {
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
                    <div class="card text-center" className='card2'>
                      
                      <div class="card-body" className='logcardbody'>
                        <br></br>
                        <h5 class="card-title">Reset Password</h5><hr className='hrlogpage'></hr>
                        <form>
                        <div class="input-group flex-nowrap">
                          
                          <span class="input-group-text" id="addon-wrapping"><FaLock /></span>
                          <input type="email" class="form-control"  name='email'  placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
                        </div><br></br>
                        <div class="input-group flex-nowrap">
                          <span class="input-group-text" id="addon-wrapping"><FaLock /></span>
                          <input type="text" class="form-control"  name='password'  placeholder="Password" aria-label="Username" aria-describedby="addon-wrapping" />
                        </div><br></br>
                        
                        <button class="btn btn-outline-success" type="submit">Change</button><br></br><br></br>
                        </form>
                        
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

export default Adminresetpwd