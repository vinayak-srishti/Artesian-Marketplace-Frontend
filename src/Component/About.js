import React from 'react'
import "../Component/About.css"

function About() {
    return (
        <div>
            
            <div class="container-fluid text-center" className='about-container'>
                <div class="row">
                    <div class="col-md-6" id='col1about'> {/*</div><!-- Use half of the container width for the image -->*/}
                        <img src='https://img.freepik.com/free-photo/high-angle-woman-wrapping-bowl_23-2149480234.jpg?t=st=1709197752~exp=1709201352~hmac=e836a590163f41df6ee77fc70bd7236f86178d340e0a72ac7392d0a0e503de3c&w=360' class='aboutimage'></img>
                    </div>
                    
                    <div class="col-md-6 align-self-end" id='col2about'>{/*} <!-- Use half of the container width for the paragraph -->*/}
                    
                        <p className='aboutparagraph'> At this place, we are dedicated to showcasing the creativity and craftsmanship of artisans from around the world. Our mission is to provide a platform where artisans can share their unique talents and creations with a global audience, while also giving customers the opportunity to discover and support handmade products that reflect individuality and style.<br></br>&nbsp; &nbsp; &nbsp; Founded on the principles of authenticity and community, This marketplace celebrates the art of craftsmanship and the stories behind each handmade piece. We believe in the power of human connection and the importance of preserving traditional techniques in a modern world. Whether you're an artisan looking to share your work or a customer in search of something special, we invite you to join us in our journey of creativity, passion, and discovery.</p>
                       
                    </div>
                </div>

            </div>
         </div>
            )
}

            export default About