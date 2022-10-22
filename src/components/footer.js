import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  return (
    <div className="my-4 py-4 roboto">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <a href="https://www.ricethresher.org/">
              <img
                src="https://d2jz71s5ipgn8z.cloudfront.net/5d926a861afafbbaf49d48e7c270ac17/dist/img/the-rice-thresher-logo.gif"
                // style={{width: "100%"}}
                className="w-100"
              />
            </a>
            <address>
              713-348-4801
              <br />
              <a href="mailto:thresher@rice.edu">thresher@rice.edu</a>
              <br />
              6100 Main St. MS 524
              <br />
              Houston, TX 77005
            </address>
          </div>
          <div className="col-sm-6">
            <div className="row">
              <div className="col-sm-6">
                <ul className="list-unstyled">
                  <li>
                    <b>Sections</b>
                  </li>
                  <li>
                    <a href="https://www.ricethresher.org/section/news" target="_blank">News</a>
                  </li>
                  <li>
                    <a href="https://www.ricethresher.org/section/sports" target="_blank">
                      Sports
                    </a>
                  </li>
                  <li>
                    <a href="https://www.ricethresher.org/section/arts-entertainment" target="_blank">
                      A&amp;E
                    </a>
                  </li>
                  <li>
                    <a href="https://www.ricethresher.org/section/features" target="_blank">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="https://www.ricethresher.org/section/opinion" target="_blank">
                      Opinion
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6">
                <ul className="list-unstyled">
                  <li>
                    <b>Services</b>
                  </li>
                  <li>
                    <a href="https://www.ricethresher.org/page/about" target="_blank">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="https://www.ricethresher.org/page/contact" target="_blank">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="https://www.ricethresher.org/page/advertise-overview" target="_blank">
                      Advertise
                    </a>
                  </li>
                  <li>
                    <a href="https://www.ricethresher.org/page/join-us" target="_blank">
                      Join The Thresher
                    </a>
                  </li>
                  <li>
                    <a href="https://www.ricethresher.org/page/story-tip" target="_blank">
                      Story Idea?
                    </a>
                  </li>
                </ul>
              </div>
              {/* <div className="col-sm-4">
                <ul className="list-unstyled">
                  <li>
                    <b>Latest Issue</b>
                  </li>
                  <li>
                    <a href="https://issuu.com/thresher/docs/220420thresh" target="_blank">
                      <img
                        src="https://image.issuu.com/220420032304-a38739296d1e2f76916103f4f63418fe/jpg/page_1_thumb_large.jpg"
                        className="w-100"
                      />
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
        <div className="legal">
          The Rice Thresher © 2022. All rights reserved.
        </div>
      </div>
    </div>
  );
}
