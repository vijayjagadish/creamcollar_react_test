import React, { Fragment } from "react";
import {Link} from 'react-router-dom';
function Navbar(){
    return(
        <Fragment>
            <header className="sticky-top">
  <nav className="navbar navbar-expand-lg">
    <div className="container-lg"> <a className="navbar-brand" href="index.html"><img src="assets/img/creamcollar-logo.svg" alt=""/></a>
      <ul className="navbar-nav navbar-left me-auto">
        <li className="nav-item"> <Link to="/" class="nav-link" >Home</Link> </li>
        <li className="nav-item"> <Link to="/about_us" class="nav-link" >About Us</Link> </li>
        <li className="nav-item"> <Link to="/contact_us" class="nav-link" >Contact Us</Link> </li>
      </ul>
      <ul className="navbar-nav navbar-right">
        <li className="nav-item"> <Link to="/login" class="nav-link" >Login</Link> </li>
        <li className="nav-item"> <Link to="/register" class="nav-link" >Sign up</Link> </li>
        {/* <!--<li className="nav-item dropdown"> <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
            <path d="M17.9029 18.3346L13.1432 13.5845V12.8325L12.8862 12.5659C11.6702 13.6096 10.0971 14.1416 8.49718 14.0501C6.89729 13.9587 5.39505 13.251 4.30585 12.0755C3.21665 10.9001 2.62521 9.34841 2.65571 7.7462C2.6862 6.14399 3.33625 4.61591 4.46939 3.48278C5.60253 2.34964 7.13061 1.69958 8.73282 1.66909C10.335 1.6386 11.8867 2.23004 13.0622 3.31924C14.2376 4.40844 14.9453 5.91068 15.0368 7.51057C15.1282 9.11045 14.5962 10.6835 13.5525 11.8996L13.8191 12.1566H14.5711L19.3213 16.9163L17.9029 18.3337V18.3346ZM8.8595 3.58919C8.01227 3.58919 7.18406 3.84043 6.47961 4.31112C5.77516 4.78182 5.22611 5.45085 4.90188 6.23359C4.57766 7.01633 4.49283 7.87764 4.65812 8.7086C4.8234 9.53956 5.23139 10.3028 5.83047 10.9019C6.42956 11.501 7.19284 11.909 8.0238 12.0743C8.85475 12.2396 9.71606 12.1547 10.4988 11.8305C11.2815 11.5063 11.9506 10.9572 12.4213 10.2528C12.892 9.54834 13.1432 8.72013 13.1432 7.87289C13.1419 6.73717 12.6902 5.64833 11.8871 4.84525C11.0841 4.04217 9.99523 3.59045 8.8595 3.58919Z" fill="#252525"/>
          </svg>
          </a>
          <div className="dropdown-menu dropdown-menu-end">
            <form>
              <div className="input-group search"> <span className="input-group-text">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <mask id="mask0_1091_5724" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                    <rect width="24" height="24" fill="#D9D9D9"/>
                  </mask>
                  <g mask="url(#mask0_1091_5724)">
                    <path d="M19.6 21L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16C7.68333 16 6.14583 15.3708 4.8875 14.1125C3.62917 12.8542 3 11.3167 3 9.5C3 7.68333 3.62917 6.14583 4.8875 4.8875C6.14583 3.62917 7.68333 3 9.5 3C11.3167 3 12.8542 3.62917 14.1125 4.8875C15.3708 6.14583 16 7.68333 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L21 19.6L19.6 21ZM9.5 14C10.75 14 11.8125 13.5625 12.6875 12.6875C13.5625 11.8125 14 10.75 14 9.5C14 8.25 13.5625 7.1875 12.6875 6.3125C11.8125 5.4375 10.75 5 9.5 5C8.25 5 7.1875 5.4375 6.3125 6.3125C5.4375 7.1875 5 8.25 5 9.5C5 10.75 5.4375 11.8125 6.3125 12.6875C7.1875 13.5625 8.25 14 9.5 14Z" fill="#1C1B1F"/>
                  </g>
                </svg>
                </span>
                <input type="text" className="form-control" placeholder="Search here" aria-label="Search here"/>
                <span className="input-group-text"> <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <mask id="mask0_1091_5784" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
                    <rect width="16" height="16" fill="#D9D9D9"/>
                  </mask>
                  <g mask="url(#mask0_1091_5784)">
                    <path d="M5.60016 11.332L8.00016 8.93203L10.4002 11.332L11.3335 10.3987L8.9335 7.9987L11.3335 5.5987L10.4002 4.66536L8.00016 7.06536L5.60016 4.66536L4.66683 5.5987L7.06683 7.9987L4.66683 10.3987L5.60016 11.332ZM8.00016 14.6654C7.07794 14.6654 6.21127 14.4904 5.40016 14.1404C4.58905 13.7904 3.8835 13.3154 3.2835 12.7154C2.6835 12.1154 2.2085 11.4098 1.8585 10.5987C1.5085 9.78759 1.3335 8.92092 1.3335 7.9987C1.3335 7.07648 1.5085 6.20981 1.8585 5.3987C2.2085 4.58759 2.6835 3.88203 3.2835 3.28203C3.8835 2.68203 4.58905 2.20703 5.40016 1.85703C6.21127 1.50703 7.07794 1.33203 8.00016 1.33203C8.92238 1.33203 9.78905 1.50703 10.6002 1.85703C11.4113 2.20703 12.1168 2.68203 12.7168 3.28203C13.3168 3.88203 13.7918 4.58759 14.1418 5.3987C14.4918 6.20981 14.6668 7.07648 14.6668 7.9987C14.6668 8.92092 14.4918 9.78759 14.1418 10.5987C13.7918 11.4098 13.3168 12.1154 12.7168 12.7154C12.1168 13.3154 11.4113 13.7904 10.6002 14.1404C9.78905 14.4904 8.92238 14.6654 8.00016 14.6654Z" fill="#1C1B1F"/>
                  </g>
                </svg>
                </a> </span> </div>
            </form>
          </div>
        </li>--> */}
        
        <li className="nav-item"> <a className="nav-link" href=" https://www.linkedin.com/company/creamcollar" target="_blank"><img src="assets/img/linkedin.svg" alt=""/></a> </li>
        <li className="menu-btn" type="button" data-bs-toggle="offcanvas" href="#menu" role="button" aria-controls="menu"> <a className="nav-link" href="#"><i className="las la-bars"></i> </a> </li>
      </ul>
    </div>
  </nav>
</header>
        </Fragment>
    )
}

export default Navbar;