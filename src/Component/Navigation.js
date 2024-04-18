import React from 'react'
import { FaAccusoft, FaLock, FaUser, FaShoppingCart } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import "../Component/Navigation.css"
import naviimg from './Image/homie.jpg'
import elephant from './Image/elephant.jpg'
import madha from './Image/madha.jpg'
import logo from'./Image/logo.jpg'
import doll from './Image/doll.jpg'
import woodlight1 from './Image/woodlight.jpg'
import brown from './Image/brownpainting.jpg'
function Navigation() {
  return (
    <div>
      <nav class="navbar">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1 " className='brndname'> HandiZen {/*<img src={logo} className='logo1'></img>*/}
          
          </span>
          <form class="d-flex" role="search">
            <input class="form-control me-2" className='inputsrch' type="search" placeholder="Search" aria-label="Search" />&nbsp;&nbsp;
            <button class="btn btn-outline-success" type="submit" className='navsrchbtn'>Search</button>
          </form>

        </div>


      </nav>
      <hr></hr>
      <ul class="nav justify-content-center">
        <li class="nav-item" >
          <a class="nav-link active" className='navcontent' aria-current="page" href="/navigation" >Home</a>
        </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <li class="nav-item">
          <a class="nav-link" className='navcontent' href="#">Shop</a>
        </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <li class="nav-item">
          <a class="nav-link" className='navcontent' href="/About">About us</a>
        </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <li class="nav-item">
          <a class="nav-link" className='navcontent' href="/contactus">Contact</a>
        </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <li class="nav-item">
          <a class="nav-link" className='navcontent' href="./Gallery">Gallery</a>
        </li>
      </ul>
      <ul className='justify-content-end'>
        <a href='./adminlog' className='icnloglink'>
          <FaUser></FaUser>&nbsp;&nbsp; <FaShoppingCart></FaShoppingCart></a>
      </ul>

      <div class="card text-center">
        <img src={naviimg} className='homeimage' alt="..." />
        <div class="card-img-overlay"><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          <h5 class="card-title" className='cardtle'>Handmade with love</h5>
          <p class="card-text" className='cardtxt'>Love-infused crafts, from our heart</p><br></br>
          <a href="#" class="btn btn-primary" className='cardbtn'><b>Shop Now</b> </a>
        </div>
      </div><br></br><hr></hr><p className='headers'>Popular Items</p>

      
      <div class="container" className='container1'>
        <div class="row justify-content-center">
          <div class="col-12 col-md-10">
            <div class="row">
              <div class="col-12 col-md-4">
                <div class="card h-100">
                  <img src={doll} class="card-img-top" className='cardimageset1' alt="..." />
                  <div class="card-body">
                    <h5 class="card-title" id='cardtitile'>Thread Doll</h5>
                    <p class="card-text">₹100</p></div>
                  <div class="card-footer">
                    <small class="text-body-secondary">
                      <a href='' className='card-viewdetails'>view details</a>
                    </small>
                  </div>
                  {/* <!-- Card 1 content --> */}
                </div>
              </div>
              <div class="col-12 col-md-4">
                <div class="card h-100">
                  <img src={woodlight1} class="card-img-top" className='cardimageset1' alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Wooden lamp</h5>
                    <p class="card-text">₹500</p>
                  </div>
                  <div class="card-footer">
                    <small class="text-body-secondary">
                      <a href='' className='card-viewdetails'>view details</a>
                    </small>
                  </div>
                  {/* <!-- Card 2 content --> */}
                </div>
              </div>
              <div class="col-12 col-md-4">
                <div class="card h-100">
                  <img src={brown} class="card-img-top" className='cardimageset1' alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Brown Painting</h5>
                    <p class="card-text">₹750</p>
                  </div>
                  <div class="card-footer">
                    <small class="text-body-secondary"><a href='' className='card-viewdetails'>view details</a></small>
                  </div>
                  {/* <!-- Card 3 content --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <p className='headers'>New Paintings & Sketches</p>
      <div class="card mb-3" className='elephantcard'/*style="max-width: 540px;"*/>
        <div class="row g-0">
          <div class="col-md-4">
            <img src={elephant} class="img-fluid rounded-start" className='elephantimg' alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Elephant Pencil Sketch</h5><br></br><br></br>
              <p class="card-text" className='elephantcardtext'>This elephant sketch tells a story of beauty and wisdom. The artist used careful lines and shading to show the elephant's grace and strength. Look closely at its trunk and eyes—they hold the secrets of the wild. This drawing honors these amazing animals and invites us to imagine the jungle's wonders.</p>
              <p class="card-text"><small class="text-body-secondary">3 weeks ago</small></p>
            </div>
          </div>
        </div><br></br>

      </div>
      <div class="card mb-3" className='elephantcard'/*style="max-width: 540px;"*/>
        <div class="row g-0">
          <div class="col-md-4">
            <img src={madha} class="img-fluid rounded-start" className='elephantimg' alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Mother Mery Pencil Sketch</h5><br></br><br></br>
              <p class="card-text" className='elephantcardtext'>This pencil sketch of Mother Mary shows her calm and kind expression. The artist used light lines and shading to create a peaceful feeling. Looking at this sketch makes you feel comforted and hopeful.</p>
              <p class="card-text"><small class="text-body-secondary"> 3 mins ago</small></p>
            </div>
          </div>
        </div>

      </div>

      <hr></hr>

      {/* </div> */}
    </div>

  )
}

export default Navigation