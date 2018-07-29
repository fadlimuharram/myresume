import React from "react";
import logo from '../logo.svg';
import '../style/glitch.css';
const Education = ()=>{
  return(
    <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
          <div className="my-auto text-left">
            <h2 className="mb-5 text-center">Education</h2> <br />

            <div className="resume-item d-flex flex-column flex-md-row mb-5">
              <div className="resume-content mr-auto">
                <h3 className="mb-0">Universitas Nasional</h3>
                <div className="subheading mb-3">Bachelor of computer Science</div>
                <div>Informatics - Artificial Intelligence Track</div>
                <p>GPA: 3.89</p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">September 2015 - Now</span>
              </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row">
              <div className="resume-content mr-auto">
                <h3 className="mb-0">Web Master Course</h3>
                <div className="subheading mb-3">ITKomputer</div>
                <div className="table-responsive center-block">
                <table className="table text-center">
                  <thead>
                    <tr>
                      <th scope="col" rowspan="2">No</th>
                      <th scope="col" rowspan="2">Subject Of Instructions</th>
                      <th scope="col" colspan="2">Marks</th>
                    </tr>
                    <tr>
                      <th scope="col">Theory</th>
                      <th scope="col">Practice</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>HTML 5</td>
                      <td>90</td>
                      <td>95</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>PHP</td>
                      <td>90</td>
                      <td>95</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>CSS</td>
                      <td>90</td>
                      <td>96</td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>MYSQL</td>
                      <td>88</td>
                      <td>90</td>
                    </tr>
                  </tbody>
                </table>
                <br />
                <table className="table">
                <tbody>
                  <tr>
                    <th scope="row">No Seri</th>
                    <td>: Wm.2015.743</td>
                  </tr>
                  <tr>
                    <th scope="row">Nilek</th>
                    <td>: 01204.1.0126</td>
                  </tr>
                  <tr>
                    <th scope="row">Depdiknas No</th>
                    <td>: 542/1.851.4</td>
                  </tr>
                </tbody>
                </table>
                </div>
                <br />
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">September 2015 - November 2015</span>
              </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row">
              <div className="resume-content mr-auto">
                <h3 className="mb-0">Codeigniter Course</h3>
                <div className="subheading mb-3">ITKomputer</div>
                <div className="table-responsive center-block">
                <table className="table">
                <tbody>
                  <tr>
                    <th scope="row">No Seri</th>
                    <td>: CI.2016 0003</td>
                  </tr>
                  <tr>
                    <th scope="row">Nilek</th>
                    <td>: 01204.1.0126</td>
                  </tr>
                  <tr>
                    <th scope="row">Depdiknas No</th>
                    <td>: 542/1.851.4</td>
                  </tr>
                </tbody>
                </table>
                </div>
                <br />
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">April 2016 - May 2016</span>
              </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row">
              <div className="resume-content mr-auto">
                <h3 className="mb-0">Basic Android APp Development Intensive Class</h3>
                <div className="subheading mb-3">Codepolitan</div>
                <p>link : <a href="https://devschool.id/c/DXgAo2S0" target="_blank">Certificate</a></p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">05 March 2018 - 09 March 2018</span>
              </div>
            </div> <br />

            <div className="resume-item d-flex flex-column flex-md-row">
              <div className="resume-content mr-auto">
                <h3 className="mb-0">Node.js Developer Online Course (2nd Edition)</h3>
                <div className="subheading mb-3">Udemy</div>
                <p>link : <a href="https://ude.my/UC-ZHJZV7A3" target="_blank">Certificate</a></p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">02 May 2018</span>
              </div>
            </div>

          </div>

        </section>
  )
}

export default Education;
