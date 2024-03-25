import React from 'react'

function Navbar() {
  return (
    <div>
        <nav class="navbar bg-body-tertiary">
        <div class="container-fluid" >
          <span class="navbar-brand mb-0 h1 " className='brndname'> Artisan Marketplace
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
          <a class="nav-link active" className='navcontent' aria-current="page" href="/Navigation" >Home</a>
        </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <li class="nav-item">
          <a class="nav-link" className='navcontent' href="#">Shop</a>
        </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <li class="nav-item">
          <a class="nav-link" className='navcontent' href="#">About us</a>
        </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <li class="nav-item">
          <a class="nav-link" className='navcontent' href="#">Contact</a>
        </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <li class="nav-item">
          <a class="nav-link" className='navcontent' href="#">Gallery</a>
        </li>
        
      </ul><hr></hr>
    </div>
  )
}

export default Navbar