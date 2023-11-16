import React, { Fragment } from "react";
import Navbar from "./Navbar";

function Index() {
    return(
        <Fragment>
            <div>
            <Navbar />
<section className="banner">
  <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
    <video autoplay loop muted plays-inline className="banner-video">
      <source src="assets/img/banner-video.mp4" type="video/mp4"/>
    </video>
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval="4000"> <img src="assets/img/banner1.webp" className="d-block w-100" alt="..."/>
        <div className="carousel-caption c1">
          <div className="container-lg">
            <div className="row">
              <div className="col-lg-5 col-md-7 col-sm-8">
                <h1 className="white">Competency Research for <span>Newer Capabilities</span> of Software defined Industries</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item" data-bs-interval="4000"> <img src="assets/img/banner2.webp" className="d-block w-100" alt="..."/>
        <div className="carousel-caption c2">
          <div className="container-lg">
            <div className="row">
              <div className="col-lg-5 col-md-7 col-sm-8">
                <h1>Frictionless experience for <span>Graduating students & Professionals</span> to decide on building their <strong>Careers of choice</strong></h1>
                {/* <!--<button type="button" className="btn btn-primary mt-4">Learn More</button>--> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item" data-bs-interval="4000"> <img src="assets/img/banner3.webp" className="d-block w-100" alt="..."/>
        <div className="carousel-caption c3">
          <div className="container-lg">
            <div className="row">
              <div className="col-lg-5 col-md-7 col-sm-8">
                <h1>Industry Academia <span>Collaboration Contributing</span> to Continuous <strong>Innovation</strong></h1>
                {/* <!--<button type="button" className="btn btn-primary mt-4">Learn More</button>--> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="industry">
  <div className="container-lg">
    <div className="row justify-content-center">
      <div className="col-md-8 text-center">
        <div className="page-title1">Automotive industry is undergoing the disruption of a century in this decade</div>
      </div>
      <div className="col-12">
        <div className="is-main">
          <ul className="industry-list">
            <li>
              <div className="is-body">
                <div className="is-top">
                  <div className="ist-left"> 90% </div>
                  <div className="ist-right"> <img src="assets/img/industry1.svg" alt="..."/> </div>
                </div>
                <div className="is-bottom"> Software will differentiate <strong>Future cars</strong> </div>
              </div>
            </li>
            <li>
              <div className="is-body">
                <div className="is-top">
                  <div className="ist-left"> $0.5-1T </div>
                  <div className="ist-right"> <img src="assets/img/industry2.svg" alt="..."/> </div>
                </div>
                <div className="is-bottom"> Software and data driven <strong>market volume in 2035</strong> </div>
              </div>
            </li>
            <li>
              <div className="is-body">
                <div className="is-top">
                  <div className="ist-left"> 90% </div>
                  <div className="ist-right"> <img src="assets/img/industry3.svg" alt="..."/> </div>
                </div>
                <div className="is-bottom"> Autonomous vehicles can<strong> Reduce Accidents</strong> </div>
              </div>
            </li>
            <li>
              <div className="is-body">
                <div className="is-top">
                  <div className="ist-left"> 300 mn </div>
                  <div className="ist-right"> <img src="assets/img/industry4.svg" alt="..."/> </div>
                </div>
                <div className="is-bottom"> <strong>Lines of code</strong> involved for one vehicle within next few years </div>
              </div>
            </li>
            <li>
              <div className="is-body">
                <div className="is-top">
                  <div className="ist-left"> 25 GB </div>
                  <div className="ist-right"> <img src="assets/img/industry5.svg" alt="..."/> </div>
                </div>
                <div className="is-bottom"> of data generated by every connected car per hour </div>
              </div>
            </li>
            <li>
              <div className="is-body">
                <div className="is-top">
                  <div className="ist-left"> 50% </div>
                  <div className="ist-right"> <img src="assets/img/industry6.svg" alt="..."/> </div>
                </div>
                <div className="is-bottom"> of the vehicle cost will be of software by 2030 </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="challenge">
  <div className="container-lg">
    <div className="row justify-content-center">
      <div className="col-md-8 text-center">
        <div className="page-title2">Challenge</div>
        <div className="sub-title">Software Defined Vehicle industry is facing 3 key challenges</div>
      </div>
      <div className="col-12 mb-3">
        <div className="c-main">
          <div className="row g-0">
            <div className="col-sm-8 col-md-9"><div className="img-holder"> <img src="assets/img/challenge3.webp" alt="..."/></div> </div>            
            <div className="col-sm-4 col-md-3 px-3">
              <div className="c-info"><span>Industry ready <strong>Talent</strong></span></div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 mb-3">
        <div className="c-main">
          <div className="row g-0">
            <div className="col-sm-4 col-md-3 px-3 order-sm-1 order-2">
              <div className="c-info"><span><strong>Technology infrastructure Readiness</strong></span></div>
            </div>            
            <div className="col-sm-8 col-md-9 order-sm-2 order-1"><div className="img-holder"> <img src="assets/img/challenge4.webp" alt="..."/></div> </div>
          </div>
        </div>
      </div>
	  <div className="col-12">
        <div className="c-main">
          <div className="row g-0">
            <div className="col-sm-8 col-md-9"><div className="img-holder"> <img src="assets/img/challenge5.webp" alt="..."/> </div>  </div>           
            <div className="col-sm-4 col-md-3 px-3">
              <div className="c-info"><span>Continuous R&D for <strong>Faster Innovation</strong></span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="hour">
  <div className="container-lg">
    <div className="row justify-content-center">
      <div className="col-md-10 text-center">
        <div className="page-title2">Need of the Hour</div>
        <div className="sub-title2">At <strong>Cream<span className="text-orange">Collar</span></strong> we are building an ecosystem where Collaboration is <strong>Frictionless.</strong> Knowledge sharing is <strong>Culture</strong> and Growth is <strong>inevitable</strong> for all our stakeholders.</div>
      </div>
      <div className="col-md-9">
        <div className="card-group hour-card">
          <div className="card"> <img src="assets/img/hour1.webp" className="card-img-top" alt="..."/>
            <div className="card-body">
              <p className="card-text">Industry and Academia joint <strong>Partnerships & Collaboration</strong></p>
            </div>
          </div>
          <div className="card"> <img src="assets/img/hour2.webp" className="card-img-top" alt="..."/>
            <div className="card-body">
              <p className="card-text">To help industry with continuous <strong>Innovation & Talent Pipeline</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="challenge">
  <div className="container-lg">
    <div className="row justify-content-center">
      <div className="col-md-8 text-center">
        <div className="page-title2">Unlocking values for stakeholders</div>
      </div>
      <div className="col-12">
        <div className="row gy-3">
          <div className="col-md-4">
            <div className="card s-card"> <img src="assets/img/stakeholder1.webp" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Industry</h5>
                <p>Access to highly skilled industry ready talent to reduce skill gap</p>
                <p>Optimize Research and Development cost through shared innovation</p>
                <p>Be the frontrunner in building new age capabilities in SDV’s</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card s-card"> <img src="assets/img/stakeholder2.webp" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Academia</h5>
                <p>Access to industrial expertise for Academic Research and Incubations</p>
                <p>Higher placements and better internships for the students</p>
                <p>Introducing more Industry relevant electives</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card s-card"> <img src="assets/img/stakeholder3.webp" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Students</h5>
                <p>Career awareness and clarity from early stages of academic courses</p>
                <p>Research oriented learning by solving real world industry problems</p>
                <p>Community based learning through Industry and academic mentorship</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="hour">
  <div className="container-lg">
    <div className="row justify-content-center">
      <div className="col-md-10 text-center">
        <div className="page-title2">Join The Movement</div>
      </div>
      <div className="col-12">
        <div className="movement"> <img src="assets/img/creamcollar-logo.svg" className="mb-4" alt="..."/>
          <h1>Alone we can do so little, together we can do so much - Helen Keller</h1>
          <div className="d-grid gap-4 d-flex justify-content-center">
            <a className="btn btn-primary" type="button" href="contact-us.html">Contact us</a>
            <a className="btn btn-primary" type="button" href="about-us.html">About us</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<footer>
  {/* <!--<div className="footer-top">
    <div className="container-lg">
      <div className="row gx-lg-5">
        <div className="col-12">
          <div className="footer-title">Contact us</div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4"> <img src="assets/img/creamcollar-logo2.svg" className="mb-3" alt="..."/>
          <p>Lorem ipsum dolor sit amet consectetur. Enim penatibus eu non elementum mauris vel tempor.</p>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <h6 className="section-title">CreamCollar</h6>
          <p>1st Floor, A Wing, Mindcomp Tech Park, 149, Whitefield, Basavanna Nagar, Bengaluru, Karnataka 560048.</p>
          <p>info@creamcollar.com</p>
        </div>
        <div className="col-lg-4 col-md-6">
          <h6 className="section-title">Subscribe</h6>
          <div className="input-group subscribe mb-4">
            <input type="text" className="form-control form-control-lg" placeholder="Email Address" aria-label="Email Address" />
            <button className="btn btn-primary" type="button">Submit</button>
          </div>
          <ul className="social-links">
            <li> <a href="#"><i className="lab la-linkedin-in"></i></a> </li>
            <li> <a href="#"><i className="lab la-twitter"></i></a> </li>
            <li> <a href="#"><i className="lab la-youtube"></i></a> </li>
            <li> <a href="#"><i className="lab la-facebook-f"></i></a> </li>
          </ul>
        </div>
      </div>
    </div>
  </div>--> */}
  <div className="footer-bottom">
    <div className="container-lg">
      <div className="row align-items-center">
        <div className="col-md-6 col-sm-12 text-md-start text-center">
          {/* <!--<ul className="footer-links">
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>--> */}
		  <img src="assets/img/footer-logo.svg" alt="..."/>
        </div>
        <div className="col-md-6 col-sm-12 text-md-end text-center">
          <p className="mb-0">Copyright © 2023, All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </div>
</footer>
<div className="offcanvas offcanvas-top" tabindex="-1" id="menu" aria-labelledby="menu" data-bs-backdrop="true" data-bs-scroll="true">
  {/* <!--<div className="offcanvas-header"> <img src="assets/img/creamcollar-logo.svg" alt="">
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>--> */}
  <div className="offcanvas-body p-0">
    <ul className="left-menu">
      <li className="nav-item"> <a className="nav-link active" href="index.html">Home</a> </li>
      <li className="nav-item"> <a className="nav-link" href="about-us.html">About Us</a> </li>
      <li className="nav-item"> <a className="nav-link" href="contact-us.html">Contact Us</a> </li>
    </ul>
  </div>
</div>
<script src="https://code.jquery.com/jquery-3.7.0.js" integrity="sha256-JlqSTELeR4TLqP0OG9dxM7yDPqX1ox/HfgiSLBj8+kM=" crossorigin="anonymous"></script> 
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
<script src="assets/js/common.js"></script> 
	
</div>
        </Fragment>
    )
}

export default Index;