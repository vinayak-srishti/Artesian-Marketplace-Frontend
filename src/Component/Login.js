import React from 'react'
import "../Component/Login.css"
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>

      <section class="vh-100" className='sect1'/*style="background-color: #508bfc;"*/>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              <div class="btn-group groupbtn2">
                <a href="#" aria-current="page" className='groupbtn1'>Login</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href='/register'  >Registration</a>

              </div><br></br><br></br>
              <div class="card"/*style="border-radius: 1rem;"*/>
                <div class="card-body">

                  <h3 class="mb-5">Login</h3>
                  

                  {/*<div class="form-outline mb-4"> 
                    <input type="email" id="typeEmailX-2" class="form-control form-control-lg" />
                    <label class="form-label" for="typeEmailX-2">Email</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" id="typePasswordX-2" class="form-control form-control-lg" />
                    <label class="form-label" for="typePasswordX-2">Password</label>
                  </div>*/}
                  <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                  </div>
                  <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                  </div><br></br>

                  {/* <!-- Checkbox --> */}
                  <div class="form-check d-flex justify-content-start mb-4">
                    <input class="form-check-input" type="checkbox" value="" id="form1Example3" />
                    <label class="form-check-label" for="form1Example3"> Remember password </label>
                  </div>

                  <button class="btn btn-outline-primary" className='loginbutton' type="submit"> &nbsp; &nbsp; Log in &nbsp; &nbsp; </button>


                  <hr class="my-4" />

                  <p class="small mb-5 pb-lg-2" ><a href="" className='forgotpwd'>Lost your password?</a></p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login