import React from "react";
import logo from '../logo.svg';
import '../style/glitch.css';
const SeminarAndEvents = ()=>{
  return(
    <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
          <div className="my-auto text-left">
            <h2 className="mb-5 text-center">Seminars and Events</h2> <br />

            <div className="resume-item d-flex flex-column flex-md-row mb-5">
              <div className="resume-content mr-auto">
                <h3 className="mb-0">ImagineCup Indonesia</h3>
                <div className="subheading mb-3">Microsoft</div>
                <div>Category : Seminar </div>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">2016</span>
              </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row mb-5">
              <div className="resume-content mr-auto">
                <h3 className="mb-0">Perkembangan Komputer Vision dan Multimedia</h3>
                <div className="subheading mb-3">Himpunan Mahasiswa Teknik Informatika Universitas Nasional</div>
                <div>Category : Seminar </div>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">20 january 2016</span>
              </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row mb-5">
              <div className="resume-content mr-auto">
                <h3 className="mb-0">Kreatif dan Inovatif dengan Animasi dan Robotik</h3>
                <div className="subheading mb-3">Robo Edukasi</div>
                <div>Category : Workshop </div>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">3 March 2017 - 4 March 2017</span>
              </div>
            </div>




          </div>

        </section>
  )
}

export default SeminarAndEvents;
