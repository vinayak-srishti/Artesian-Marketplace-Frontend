import React from 'react'
import "../Component/Logpage.css"
 import "./Registerpage.css"
import pic from './Image/logicon.png'

function Registerpage() {
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
                    <div class="card text-center" className='card1registeruser'>
                      
                      <div class="card-body" className='logcardbody'>
                        <br></br>
                        <h5 class="card-title">Sign up as Artist</h5> <br></br>
                        
                        <div class="input-group flex-nowrap">
                          
                          {/* <span class="input-group-text" id="addon-wrapping"></span> */}
                          <input type="text" class="form-control"  name='email' placeholder="Firstname" aria-label="Username" aria-describedby="addon-wrapping" />
                        </div><br></br>
                        <div class="input-group flex-nowrap">
                          {/* <span class="input-group-text" id="addon-wrapping"></span> */}
                          <input type="text" class="form-control"  name='password' placeholder="Lastname" aria-label="Username" aria-describedby="addon-wrapping" />
                        </div><br></br>
                        <div class="input-group flex-nowrap">
                          {/* <span class="input-group-text" id="addon-wrapping"></span> */}
                          <input type="date" class="form-control"  name='password' placeholder="DOB" aria-label="Username" aria-describedby="addon-wrapping" />
                        </div><br></br>
                        <div class="input-group flex-nowrap">
                          {/* <span class="input-group-text" id="addon-wrapping"></span> */}
                          <input type="Text Area" class="form-control"  name='password' placeholder="Address" aria-label="Username" aria-describedby="addon-wrapping" />
                        </div><br></br>
                        <div class="input-group flex-nowrap">
                          {/* <span class="input-group-text" id="addon-wrapping"></span> */}
                          <input type="Text Area" class="form-control"  name='password' placeholder="Email" aria-label="Username" aria-describedby="addon-wrapping" />
                        </div><br></br>
                        <div class="input-group flex-nowrap">
                          {/* <span class="input-group-text" id="addon-wrapping"></span> */}
                          <input type="Text Area" class="form-control"  name='password' placeholder="Phoneno" aria-label="Username" aria-describedby="addon-wrapping" />
                        </div><br></br><br></br>
                      
                        <button class="btn btn-outline-success" type="submit">Submit</button><br></br><br></br>
                        
                        <p class="mb-0">Have an account? <a href="#!" class="text-white-50 fw-bold" className='signup1'>Login</a>
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

export default Registerpage