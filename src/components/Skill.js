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
            <li className="list-inline-item" data-toggle="tooltip" data-placement="top" title="HTML stands for Hyper Text Markup Language (w3schools), i use it along with css3 to create web page">
              <i className="devicons devicons-html5"></i>
            </li>
            <li className="list-inline-item" data-toggle="tooltip" data-placement="top" title="CSS stands for Cascading Style Sheets (w3schools), i use it along with HTML 5 to create web page and create some style on it">
              <i className="devicons devicons-css3"></i>
            </li>
            <li className="list-inline-item" data-toggle="tooltip" data-placement="top" title="Javascript is the programming language of the web (w3schools), and i love to use it because this site is built with this programming language, especially Rectjs">
              <i className="devicons devicons-javascript"></i>
            </li>
            <li className="list-inline-item" data-toggle="tooltip" data-placement="top" title="The Write Less, Do More, JavaScript Library (jquery). i think without this, website is not complete because it makes great animations on the website without having to write super long script">
              <i className="devicons devicons-jquery"></i>
            </li>
            <li className="list-inline-item" data-placement="top" title="Build responsive, mobile-first projects on the web with the world's most popular front-end component library(getbootstrap).">
              <i className="devicons devicons-bootstrap"></i>
            </li>
            <li className="list-inline-item" data-placement="top" title="PHP is a server scripting language, and a powerful tool for making dynamic and interactive Web pages(w3schools).">
              <i className="devicons devicons-php"></i>
            </li>
            <li className="list-inline-item" data-placement="top" title="CodeIgniter is a powerful open-source PHP framework with a very small footprint, created by Rick Ellis in 2006(wikipedia).">
              <i className="devicons devicons-codeigniter"></i>
            </li>
            <li className="list-inline-item" data-placement="top" title="Laravel is a free, open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller (MVC) architectural pattern and based on Symfony(wikipedia).">
              <i className="devicons devicons-laravel"></i>
            </li>
            <li className="list-inline-item" data-placement="top" title="MySQL is an open-source relational database management system (RDBMS) (wikipedia). i use it with ERD or also known as entity relationship model to create a database model before it is implemented in my code">
              <i className="devicons devicons-mysql"></i>
            </li>
            <li className="list-inline-item" data-placement="top" title="MongoDB is a free and open-source cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schemas(wikipedia).">
              <i className="devicons devicons-mongodb"></i>
            </li>
            <li className="list-inline-item" data-placement="top" title="PostgreSQL, often simply Postgres, is an object-relational database management system (ORDBMS) with an emphasis on extensibility and standards compliance. It can handle workloads ranging from small single-machine applications to large Internet-facing applications (or for data warehousing) with many concurrent users(wikipedia)">
              <i className="devicons devicons-postgresql"></i>
            </li>
            <li className="list-inline-item" data-placement="top" title="Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside the browser. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML and run client-side by a JavaScript engine in the user's web browser(wikipedia)">
              <i className="devicons devicons-nodejs"></i>
            </li>
            <li className="list-inline-item" data-placement="top" title="Express.js, or simply Express, is a web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js(wikipedia)">
              <i className="devicon-express-original"></i>
            </li>
            <li className="list-inline-item" data-placement="top" title="npm is the package manager for JavaScript and the world's largest software registry(npmjs).">
              <i className="devicons devicons-npm"></i>
            </li>
            <li className="list-inline-item" data-placement="top" title="Git is a version control system for tracking changes in computer files and coordinating work on those files among multiple people(wikipedia).">
              <i className="devicons devicons-git"></i>
            </li>
            <li className="list-inline-item" data-placement="top" title="Heroku is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud(heroku).">
              <i className="devicons devicons-heroku"></i>
            </li>
            <li className="list-inline-item" data-placement="top" title="GitLab is a web-based Git-repository manager with wiki, issue-tracking and CI/CD pipelines features, using an open-source license, developed by GitLab Inc(wikipedia).">
              <i className="devicon-gitlab-plain"></i>
            </li>
            <li className="list-inline-item" data-placement="top" title="Debian is an operating system and a distribution of Free Software(debian). i use this as my main operating system, and i loved to use is">
              <i className="devicons devicons-debian"></i>
            </li>
            <li className="list-inline-item" data-placement="top" title="Atom is one of my favorite text editors">
              <i className="devicons devicons-atom"></i>
            </li>
            <li className="list-inline-item" data-placement="top" title="The Apache HTTP Server Project is an effort to develop and maintain an open-source HTTP server for modern operating systems including UNIX and Windows.">
              <i className="devicon-apache-plain"></i>
            </li>
            <li className="list-inline-item" data-placement="top" title="Java is a general-purpose computer-programming language that is concurrent, class-based, object-oriented, and specifically designed to have as few implementation dependencies as possible (wikipedia).">
              <i className="devicon-java-plain"></i>
            </li>
            <li className="list-inline-item" data-placement="top" title="Slack is a cloud-based set of proprietary team collaboration tools and services, founded by Stewart Butterfield (wikipedia).">
              <i className="devicon-slack-plain"></i>
            </li>
            <li className="list-inline-item" data-placement="top" title="Trello is the visual collaboration platform that gives teams perspective on projects (wikipedia).">
              <i className="devicon-trello-plain"></i>
            </li>
            <li className="list-inline-item" data-placement="top" title="Visual Studio Code is one of my favorite text editors">
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
