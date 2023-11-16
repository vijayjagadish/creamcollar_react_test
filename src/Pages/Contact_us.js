import React, { Fragment } from "react";
import Navbar from "./Navbar";
function Contact_us() {
    return(
      <Fragment>
        <div>
        <Navbar />
<section class="contact">
  <div class="container-lg">
    <div class="row">
      <div class="col-12">
        <h1 class="contact-header">Contact Us</h1>
      </div>
      <div class="col-12">
        <div class="contact-section">
          <div class="row gx-5">
            <div class="col-lg-5 mb-lg-0 mb-5">
              <h6 class="contact-title">How can we help?</h6>
              <p class="contact-info">Please reach out to us with your query, our team of experts will be happy to assist you</p>
              <form class="contact-form" action="mail.php" method="post">
                <div class="row">
                  <div class="col-lg-12 col-md-4 mb-3">
                    <input type="text" class="form-control" name="name" placeholder="Name *" />
                  </div>
                  <div class="col-lg-12 col-md-4 mb-3">
                    <input type="email" class="form-control" name="email" placeholder="Email *" />
                  </div>
                  <div class="col-lg-12 col-md-4 mb-3">
                    <input type="text" class="form-control" name="phone" placeholder="Phone number" />
                  </div>
                  <div class="col-lg-12 mb-3">
                    <textarea class="form-control" Placeholder="Add your message" name="message" rows="4"></textarea>
                  </div>
                  <div class="col-lg-12">
                    <button type="submit" class="btn btn-primary">Submit</button>
                  </div>
                </div>
              </form>
            </div>
            <div class="col-lg-7">
              <h6 class="contact-title">Reach us</h6>
              <div class="d-flex mb-4 flex-sm-row flex-column">
                <div class="flex-fill contact-text">
                  <h6 class="text-grey"><i class="las la-phone-volume me-2"></i> Phone</h6>
                  <p><a class="link-orange" href="tel:+91 87547 04839">+91 87547 04839</a></p>
                </div>
                <div class="flex-fill contact-text">
                  <h6 class="text-grey"><i class="las la-envelope-open-text me-2"></i> Email</h6>
                  <p><a href="mailto:info@creamcollar.com" class="link-orange">info@creamcollar.com</a></p>
                </div>
                <div class="flex-fill contact-text">
                  <h6 class="text-grey"><i class="las la-external-link-square-alt me-2"></i> Social Media</h6>
                  <ul class="leaders-links">
                    <li> <a href=" https://www.linkedin.com/company/creamcollar" target="_blank"><i class="lab la-linkedin-in"></i></a> </li>
                   {/* <!-- <li> <a href="#"><i class="lab la-twitter"></i></a> </li>
                    <li> <a href="#"><i class="lab la-facebook-f"></i></a> </li>--> */}
                  </ul>
                </div>
              </div>
              <div class="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8968136659273!2d80.2593164!3d13.0422396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526636a92e1baf%3A0x51af4bc90d6e872c!2sWorkafella%20Alwarpet%20-%20Coworking%20Space%20in%20Chennai!5e0!3m2!1sen!2sin!4v1692027069816!5m2!1sen!2sin" width="100%" height="280"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
				
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<footer>
  {/* <!--<div class="footer-top">
    <div class="container-lg">
      <div class="row gx-lg-5">
        <div class="col-12">
          <div class="footer-title">Contact us</div>
        </div>
        <div class="col-lg-4 col-md-6 mb-4"> <img src="assets/img/creamcollar-logo2.svg" class="mb-3" alt="...">
          <p>Lorem ipsum dolor sit amet consectetur. Enim penatibus eu non elementum mauris vel tempor.</p>
        </div>
        <div class="col-lg-4 col-md-6 mb-4">
          <h6 class="section-title">CreamCollar</h6>
          <p>1st Floor, A Wing, Mindcomp Tech Park, 149, Whitefield, Basavanna Nagar, Bengaluru, Karnataka 560048.</p>
          <p>info@creamcollar.com</p>
        </div>
        <div class="col-lg-4 col-md-6">
          <h6 class="section-title">Subscribe</h6>
          <div class="input-group subscribe mb-4">
            <input type="text" class="form-control form-control-lg" placeholder="Email Address" aria-label="Email Address" >
            <button class="btn btn-primary" type="button">Submit</button>
          </div>
          <ul class="social-links">
            <li> <a href="#"><i class="lab la-linkedin-in"></i></a> </li>
            <li> <a href="#"><i class="lab la-twitter"></i></a> </li>
            <li> <a href="#"><i class="lab la-youtube"></i></a> </li>
            <li> <a href="#"><i class="lab la-facebook-f"></i></a> </li>
          </ul>
        </div>
      </div>
    </div>
  </div>--> */}
  <div class="footer-bottom">
    <div class="container-lg">
      <div class="row align-items-center">
        <div class="col-md-6 col-sm-12 text-md-start text-center">
          {/* <!--<ul class="footer-links">
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>--> */}
		  <img src="assets/img/footer-logo.svg" alt="..."/>
        </div>
        <div class="col-md-6 col-sm-12 text-md-end text-center">
          <p class="mb-0">Copyright © 2023, All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </div>
</footer>
<div class="offcanvas offcanvas-top" tabindex="-1" id="menu" aria-labelledby="menu" data-bs-backdrop="true" data-bs-scroll="true">
  {/* <!--<div class="offcanvas-header"> <img src="assets/img/creamcollar-logo.svg" alt="">
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>--> */}
  <div class="offcanvas-body p-0">
    <ul class="left-menu">
      <li class="nav-item"> <a class="nav-link" href="index.html">Home</a> </li>
      <li class="nav-item"> <a class="nav-link" href="about-us.html">About Us</a> </li>
      <li class="nav-item"> <a class="nav-link active" href="contact-us.html">Contact Us</a> </li>
    </ul>
  </div>
</div>
<script src="https://code.jquery.com/jquery-3.7.0.js" integrity="sha256-JlqSTELeR4TLqP0OG9dxM7yDPqX1ox/HfgiSLBj8+kM=" crossorigin="anonymous"></script> 
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script> 
<script src="assets/js/owl.carousel.min.js"></script> 
<script src="assets/js/common.js"></script> 
{/* <script>
$('.owl-carousel').owlCarousel({
    loop:false,
    margin:30,
    nav:true,
	dots: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})	
</script> */}
</div>
      </Fragment>
    )
}

export default Contact_us;