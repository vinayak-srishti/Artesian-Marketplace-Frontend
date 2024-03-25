import React from 'react'
import { FaAccusoft, FaLock, FaUser , FaShoppingCart} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import "../Component/Navigation.css"
import naviimg from './Image/homie.jpg'
function Navigation() {
  return (
    <div>
      <nav class="navbar">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1 " className='brndname'> Artisan Marketplace
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
          <a class="nav-link active" className='navcontent' aria-current="page" href="#" >Home</a>
        </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <li class="nav-item">
          <a class="nav-link" className='navcontent' href="#">Shop</a>
        </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <li class="nav-item">
          <a class="nav-link" className='navcontent' href="/About">About us</a>
        </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <li class="nav-item">
          <a class="nav-link" className='navcontent' href="#">Contact</a>
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
          <h5 class="card-title" className='cardtle'><marquee hspace='450px'>Handmade with love</marquee></h5>
          <p class="card-text" className='cardtxt'>With supporting text below as a natural lead-in to additional content.</p><br></br>
          <a href="#" class="btn btn-primary" className='cardbtn'><b>Shop Now</b> </a>
        </div>
      </div><br></br><hr></hr><p className='headers'>Popular Items</p>
      {/* <div class="container text-center"> */}
      {/*<div class="row row-cols-1 row-cols-md-3 g-4 text-center">
          <div class="col text-center">
            <div class="card h-100">
              <img src="https://img.freepik.com/free-photo/cute-plush-toy-made-from-crochet_23-2151145668.jpg?w=360&t=st=1708491990~exp=1708492590~hmac=a9fb97b3fd24a5dc5ee21292bf8174213ade5b7c08460c5d70919f7133b066bb" class="card-img-top" className='cardimageset1' alt="..." />
              <div class="card-body">
                <h5 class="card-title" id='cardtitile'>Rose Bouquet</h5>
                <p class="card-text">₹100</p>
              </div>
              <div class="card-footer">
                <small class="text-body-secondary">
                  <a href='' className='card-viewdetails'>view details</a>
                </small>
              </div>
            </div>
          </div>
          <div class="col text-center">
            <div class="card h-100">
              <img src="https://img.freepik.com/free-photo/aromatherapy-nebulizer-device-with-minimalist-monochrome-background_23-2150763331.jpg?w=360&t=st=1707664356~exp=1707664956~hmac=97f564ba84906ee4682ae41c0d4bf9d2039e585bbacfcdc18012ec14991cbc45" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Wooden lamp</h5>
                <p class="card-text">₹500</p>
              </div>
              <div class="card-footer">
                <small class="text-body-secondary">
                  <a href='' className='card-viewdetails'>view details</a>
                </small>
              </div>
            </div>
          </div>
          <div class="col text-center">
            <div class="card h-100">
              <img src="https://img.freepik.com/free-photo/flat-lay-natural-marble-texture_23-2149091276.jpg?w=360&t=st=1708492532~exp=1708493132~hmac=2fbd450b2bbd081a626c4c54ce311059a8785b7245a84b2395c6a76b74a80825" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Brown Painting</h5>
                <p class="card-text">₹750</p>
              </div>
              <div class="card-footer">
                <small class="text-body-secondary"><a href='' className='card-viewdetails'>view details</a></small>
              </div>
            </div>
          </div>
        </div>*/}
      <div class="container" className='container1'>
        <div class="row justify-content-center">
          <div class="col-12 col-md-10">
            <div class="row">
              <div class="col-12 col-md-4">
                <div class="card h-100">
                  <img src="https://img.freepik.com/free-photo/cute-plush-toy-made-from-crochet_23-2151145668.jpg?w=360&t=st=1708491990~exp=1708492590~hmac=a9fb97b3fd24a5dc5ee21292bf8174213ade5b7c08460c5d70919f7133b066bb" class="card-img-top" className='cardimageset1' alt="..." />
                  <div class="card-body">
                    <h5 class="card-title" id='cardtitile'>Rose Bouquet</h5>
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
                  <img src="https://img.freepik.com/free-photo/aromatherapy-nebulizer-device-with-minimalist-monochrome-background_23-2150763331.jpg?w=360&t=st=1707664356~exp=1707664956~hmac=97f564ba84906ee4682ae41c0d4bf9d2039e585bbacfcdc18012ec14991cbc45" class="card-img-top" className='cardimageset1' alt="..." />
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
                  <img src="https://img.freepik.com/free-photo/flat-lay-natural-marble-texture_23-2149091276.jpg?w=360&t=st=1708492532~exp=1708493132~hmac=2fbd450b2bbd081a626c4c54ce311059a8785b7245a84b2395c6a76b74a80825" class="card-img-top" className='cardimageset1' alt="..." />
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
          
          {/* </div> */}
        </div>

        )
}

        export default Navigation