import React from "react";
import logo from '../logo.svg';
import '../style/glitch.css';
const Skill = ()=>{
  return(
    <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
        <div className="my-auto">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">Programming Languages &amp; Tools</div>
          <ul className="list-inline list-icons">
            <li className="list-inline-item">
              <i className="devicons devicons-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-css3"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-javascript"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-jquery"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-bootstrap"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-php"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-codeigniter"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-laravel"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-mysql"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-mongodb"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-postgresql"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-nodejs"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-express-original"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-npm"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-git"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-heroku"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-gitlab-plain"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-debian"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-atom"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-apache-plain"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-java-plain"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-slack-plain"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-trello-plain"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-visualstudio-plain"></i>
            </li>

          </ul>
          <br />
          <div className="subheading mb-3 text-left">Projects</div>
          <ul className="fa-ul mb-0 text-left">
            <li>
              <i className="fa-li fa fa-check"></i>
              News Website, Individual Project (2015)
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              library management system, Individual Project (2016)
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Community Website, HIMTI (2018)
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Realtime Chat, Individual Project (2018)
            </li>
          </ul>
        </div>
      </section>
  )
}

export default Skill;
