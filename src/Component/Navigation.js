import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import image from './Image/Untitled Project (1).jpg'
import "../Component/Navigation.css"
function Navigation() {
  return (
    <div>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid" >
          <span class="navbar-brand mb-0 h1" className='brndname'> Artisan Marketplace
          </span>
          <form class="d-flex" role="search">
            <input class="form-control me-2"  className='inputsrch' type="search" placeholder="Search" aria-label="Search" />&nbsp;&nbsp;
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
          <a class="nav-link" className='navcontent' href="#">About us</a>
        </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <li class="nav-item">
          <a class="nav-link" className='navcontent' href="#">Contact</a>
        </li>
        
      </ul><hr></hr>
      <div class="card text-center">
  <img src="https://img.freepik.com/free-photo/front-view-man-clay-sculpting_23-2149730874.jpg?w=1060&t=st=1707232571~exp=1707233171~hmac=ed9372cabc015876e751abe4691cdc1caf4d10f3838e6f5547f6faaa612bb7b5" alt="..."/>
  <div class="card-img-overlay"><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
  <h5 class="card-title" className='cardtle'><marquee hspace='450px'>Handmade with love</marquee></h5>
    <p class="card-text" className='cardtxt'>With supporting text below as a natural lead-in to additional content.</p><br></br>
    <a href="#" class="btn btn-primary" className='cardbtn'><b>Shop Now</b> </a>
  </div>
</div><hr></hr>
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src="https://img.freepik.com/free-photo/top-view-beautiful-roses-bouquet-with-pink-ribbon_23-2148822309.jpg?w=740&t=st=1707664727~exp=1707665327~hmac=eb94659b9ff9e44da251ed52bbd78a0480dbd090b434934dab3f01a25f610961" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://img.freepik.com/free-photo/aromatherapy-nebulizer-device-with-minimalist-monochrome-background_23-2150763331.jpg?w=360&t=st=1707664356~exp=1707664956~hmac=97f564ba84906ee4682ae41c0d4bf9d2039e585bbacfcdc18012ec14991cbc45" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://img.freepik.com/free-photo/decorative-light-blue-glass-jar-wimacrame-knotting-cord-twine-seashell-ornament_181624-57539.jpg?w=360&t=st=1707665430~exp=1707666030~hmac=d38c3b3baab78d5db5c1fdcd99f8d628852ab67696451670e0096da5734db554" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>
<div class="container my-5">

  <footer /*style="background-color: #ffede7;"*/>
    <div class="container p-4">
      <div class="row">
        <div class="col-lg-3 col-md-6 mb-4">
          <h5 class="mb-3" /*style="letter-spacing: 2px; color: #7f4722;"*/>shopping online</h5>
          <ul class="list-unstyled mb-0">
            <li class="mb-1">
              <a href="#!" /*style="color: #4f4f4f;"*/>frequently asked questions</a>
            </li>
            <li class="mb-1">
              <a href="#!" /*style="color: #4f4f4f;"*/>delivery</a>
            </li>
            <li class="mb-1">
              <a href="#!" /*style="color: #4f4f4f;"*/>pricing</a>
            </li>
            <li>
              <a href="#!" /*style="color: #4f4f4f;"*/>where we deliver?</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6 mb-4">
          <h5 class="mb-3" /*style="letter-spacing: 2px; color: #7f4722;"*/>git cards</h5>
          <ul class="list-unstyled mb-0">
            <li class="mb-1">
              <a href="#!" /*style="color: #4f4f4f;"*/>frequently asked questions</a>
            </li>
            <li class="mb-1">
              <a href="#!" /*style="color: #4f4f4f;"*/>delivery and payment</a>
            </li>
            <li class="mb-1">
              <a href="#!" /*style="color: #4f4f4f;"*/>activate the card</a>
            </li>
            <li>
              <a href="#!" /*style="color: #4f4f4f;"*/>rules</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6 mb-4">
          <h5 class="mb-3" /*style="letter-spacing: 2px; color: #7f4722;"*/>company</h5>
          <ul class="list-unstyled mb-0">
            <li class="mb-1">
              <a href="#!" /*style="color: #4f4f4f;"*/>buy a gift card</a>
            </li>
            <li class="mb-1">
              <a href="#!" /*style="color: #4f4f4f;"*/>history</a>
            </li>
            <li class="mb-1">
              <a href="#!" /*style="color: #4f4f4f;"*/>return</a>
            </li>
            <li>
              <a href="#!" /*style="color: #4f4f4f;"*/>contact</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6 mb-4">
          <h5 class="mb-3" /*style="letter-spacing: 2px; color: #7f4722;"*/>diamond club</h5>
          <ul class="list-unstyled mb-0">
            <li class="mb-1">
              <a href="#!" /*style="color: #4f4f4f;"*/>registration</a>
            </li>
            <li class="mb-1">
              <a href="#!" /*style="color: #4f4f4f;"*/>application</a>
            </li>
            <li class="mb-1">
              <a href="#!" /*style="color: #4f4f4f;"*/>about program</a>
            </li>
            <li>
              <a href="#!" /*style="color: #4f4f4f;"*/>rules</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="text-center p-3" /*style="background-color: rgba(0, 0, 0, 0.2);"*/>
      © 2020 Copyright:
      <a class="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
    </div>
    {/* <!-- Copyright --> */}
  </footer>

</div>

    </div>
  )
}

export default Navigation