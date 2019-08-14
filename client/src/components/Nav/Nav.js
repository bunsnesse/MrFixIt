import React from "react";



const Nav = props => (
    <nav>
        <div className="nav-wrapper">
            <a href="/home" className="brand-logo">
                {/* <img id="image" src={logo}/> */}
            </a>
            <div className="text">
                {props.text}
            </div>
            <ul id="nav-mobile" className="right hide-on-med-and-down ">

                <li><a className="indigo-text" href="/view">All Listings</a></li> 
                <li><a className="indigo-text" href="/search">Find Work</a></li>
                <li><a className="indigo-text" href="/jobs">Post Work</a></li> 
                <li><a className="indigo-text" href="/hire">Hire</a></li> 
            </ul>
        </div>
    </nav>
);

export default Nav;