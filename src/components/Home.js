import React from "react";
import logo from '../logo.svg';
import '../style/glitch.css';
const Home = ()=>{
  return(
    <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
      <div className="my-auto">
      <div id="logoGw">
        <h1 className="mb-0 text-primary glitch" data-text="Fadli Muharram">
            Fadli Muharram
        </h1>
        <h2 className="mb-0 glitch2" data-text="Backend Web Developer">
            Backend Web Developer
        </h2>

        </div>
        <div className="subheading mb-5">Jalan Cabe 3 kel Pondok Cabe Ilir Tangerang, (+62) 822-9894-8991 ·
          <a href="mailto:fadlimuharram@hotmail.com">fadlimuharram@hotmail.com</a>
        </div>
        <br />

        <p className="mb-5">
        I <span className="fa fa-heart lv"></span> the world of programming since 2015, in that year I started the basic website and codeigniter course, other than that i <span className="fa fa-heart lv"></span> learning the latest technology like socket.io for realtime application, docker for container and start interested in graphQL for API. Sometime i code in python to finish my S1 thesis, in that application i make REST api using flask that serves to connect between client and machine learning server
        </p>
        <br />
        <ul className="list-inline list-social-icons mb-0">
          <li className="list-inline-item">
            <a href="https://www.facebook.com/fadli.muharram.5" target="_blank">
              <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
              </span>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://github.com/fadlimuharram" target="_blank">
              <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-github fa-stack-1x fa-inverse"></i>
              </span>
            </a>
          </li>

        </ul>
      </div>
    </section>
  )
}
export default Home;
