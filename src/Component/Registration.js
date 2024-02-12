import React from 'react'
import "../Component/Registration.css"
import "../Component/Login.css"
function Registration() {
  return (
    <div>
      <section class="vh-100"/*style="background-color: #508bfc;"*/>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              <div class="btn-group groupbtn2">
                <a href="/login" aria-current="page" className='groupbtn1'>Login</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href='/register'  >Registration</a>

              </div><br></br><br></br>
              <div class="card"/*style="border-radius: 1rem;"*/>
                <div class="card-body">

                  <h3 class="mb-5">Registration</h3>
                
                <div class="form-floating mb-3">
                  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                  <label for="floatingInput">Full Name</label>
                </div>
                <div class="input-group mb-3">
                  {/*<label class="input-group-text" for="inputGroupSelect01">Options</label>*/}
                  <select class="form-select" id="inputGroupSelect01">
                    <option selected>Choose your Gender</option>
                    <option value="1">Female</option>
                    <option value="2">Male</option>
                    <option value="3">Transgender</option>
                  </select>
                </div>
                <div class="form-floating">
                  <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                  <label for="floatingPassword">Email</label>
                </div><br></br>
                <div class="form-floating mb-3">
                  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                  <label for="floatingInput">Password</label>
                </div>
                <button class="btn btn-outline-primary" className='loginbutton' type="submit"> &nbsp; &nbsp; Submit &nbsp; &nbsp; </button>
                <hr class="my-4" />

                <p class="small mb-5 pb-lg-2" ><a href=" " className='forgotpwd'>already have an account? sign in</a></p>
</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Registration