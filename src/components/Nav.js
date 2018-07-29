import React from "react";
import logo from '../logo.svg';
const Nav = ()=>{
  return(
    <nav class="navbar navbar-expand-md navbar-light bg-light sticky-top" role="navigation">
      <div class="container-fluid">
        <a href="#" class="navbar-brand"><img src={logo} className="App-logo" alt="logo" /></a>
    		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
    			<span class="navbar-toggler-icon"></span>
    		</button>
    		<div class="collapse navbar-collapse" id="navbarResponsive">

    			<ul class="navbar-nav ml-auto">
    				<li class="nav-item active">
    					<a href="#" class="nav-link">Home</a>
    				</li>
    				<li class="nav-item">
    					<a href="#" class="nav-link">About</a>
    				</li>
    				<li class="nav-item">
    					<a href="#" class="nav-link">Services</a>
    				</li>
    				<li class="nav-item">
    					<a href="#" class="nav-link">Team</a>
    				</li>
    				<li class="nav-item">
    					<a href="#" class="nav-link">Connect</a>
    				</li>
    			</ul>
    		</div>
      </div>
    </nav>
  )
}

export default Nav;
