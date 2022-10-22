import React, { useEffect, useState } from 'react';
import TopPickPost from '../components/homepage/TopPickPost';
import SideStory from '../components/homepage/SideStory';
import SideStory2 from '../components/homepage/SideStory2';
import NonPicStory from '../components/homepage/NonPicStory';
import logo from "../images/logo.png";
import date from 'date-and-time';
import ProjectStory from '../components/homepage/ProjectStory';
import Footer from '../components/footer';
import ProjectStory2 from '../components/homepage/ProjectStory2';

import white_houses from '../images/white_houses.jpg';
import ion_front from '../images/ion_front.jpg';
import racism from '../images/racism.jpg';
import shape from '../images/shape.jpg';
import street_art from '../images/street_art.jpg';

import mainImg from '../images/mainImg.jpg';
import newsImg from '../images/newsImg.jpg';
import featuresImg from '../images/featuresImg.jpg';
import artImg from '../images/artImg.jpg';
import dataImg from '../images/dataImg.jpg';


export default function Homepage() {
  const picNum = 5
  const [headerHeight, setHeaderHeight] = useState("40vh")
  const [appear, setAppear] = useState(true)
  const [picState, setPicState] = useState()

  const current = new Date();
  const currentFormat = date.format(current, "dddd, MMMM DD YYYY")

  const [picScrollPos, setPicScrollPos] = useState(0)


  const picTimeOut = () => {
    return setInterval(() => {
      setPicScrollPos(prevPos => prevPos - 100)
    }, 5000)
  }

  useEffect(() => {
    if (picScrollPos <= (-1) * picNum * 100 || picScrollPos > 0) {
      setPicScrollPos(0)
    }
  }, [picScrollPos])


  useEffect(() => {
    console.log("appear watch")
    if (appear === true) {
      const picStateStart = picTimeOut()
      setPicState(picStateStart)
    } else {
      clearInterval(picState)
    }
  }, [appear])

  function triggerVideo() {
    setAppear(!appear)
    if (headerHeight == "40vh") {
      setHeaderHeight("95vh")
    } else {
      setHeaderHeight("40vh")
    }
  }
  return (
    <div>
      <div className='header-frame' style={{ height: `${headerHeight}`, transition: "height 1.5s ease" }}>
        <div className='ppt-pic-scroll d-flex bg-black'>
          <div className='ppt-pic-scroll-container d-flex' style={{ transform: `translateX(${picScrollPos}vw)`, transitionDuration: "2s" }}>
            <div className='pic-scroll-wrapper'>
              <img src={white_houses} className='pic-scroll' />
            </div>
            <div className='pic-scroll-wrapper'>
              <img src={ion_front} className='pic-scroll' />
            </div>
            <div className='pic-scroll-wrapper'>
              <img src={racism} className='pic-scroll' />
            </div>
            <div className='pic-scroll-wrapper'>
              <img src={shape} className='pic-scroll' />
            </div>
            <div className='pic-scroll-wrapper'>
              <img src={street_art} className='pic-scroll' />
            </div>
          </div>

        </div>

        <div style={{ opacity: `${appear ? "1" : "0"}`, transition: "opacity 1.5s ease" }}>
          <div className='ppt-pic-scroll-cover'></div>
        </div>

        <div className='position-relative text-white text-center p-4 roboto'>
          {
            appear ?
              <div>
                <div className='d-flex justify-content-center'>
                  <img src={logo} alt="The Rice Thresher" style={{ width: "38vw" }}></img>
                </div>
                <div className='mt-2'>RICE UNIVERSITY'S STUDENT NEWSPAPER — SINCE 1916</div>
                <div className='mb-2'>{currentFormat}</div>
              </div>
              :
              <></>

          }


          <div className='position-relative' style={{ zIndex: 99 }}>
            <i className={"bi fs-3 bi-chevron-double-" + `${appear ? "down" : "up chevron-up"}`} onClick={triggerVideo} style={{ cursor: "pointer", transitionProperty: "all", transitionDuration: "1s" }}></i>
            {/* {appear ? <div>Click to See Today's Top Pictures/Videos</div> : <></>} */}
          </div>

        </div>
        {
          appear ?
            <></>
            :
            <div className='header-picscroll-click-wrapper'>
              <div className='header-picscroll-click'>
                <i class="bi bi-caret-left-fill text-white fs-4" style={{ cursor: "pointer" }} onClick={() => { setPicScrollPos(picScrollPos + 100) }}></i>
                <i class="bi bi-caret-right-fill text-white fs-4" style={{ cursor: "pointer" }} onClick={() => { setPicScrollPos(picScrollPos - 100) }}></i>
              </div>
            </div>
        }
      </div>


      {/* <div className='navbar-second roboto'>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Theme1</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Theme2</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Theme3</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Theme4</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Theme5</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Theme6</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Theme7</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div> */}


      <div style={{ position: "relative", top: "2px", borderTop: "2px solid black" }} />
      <div className='body'>
        <div className='row body-content'>
          <div className='col-12 col-md-12 top-pick'>
            {/* <TopPickPost src={"https://images.ctfassets.net/3s5io6mnxfqz/3nyTQpKeBlLULcuO5oKjHb/03daacc9f4fadb06f80e3a02b617f2d5/AdobeStock_320627727.jpeg"} />
            <div className='d-flex justify-content-between'>
              <div style={{ width: "50%" }}><NonPicStory /></div>
              <div className='vertical-line px-2'></div>
              <div style={{ width: "50%" }}><NonPicStory /></div>
            </div> */}
            <hr />

            <ProjectStory projectPic={mainImg} 
                          projectName="The Ion: Rice’s innovation district joins Third Ward community"
                          projectLink="/projects/innovation"
                          projectDesc1="The Thresher is launching its Special Projects team with a thorough examination of Rice's Innovation District. As part of Rice's push beyond the hedges, the Innovation District is under construction in Third Ward, one of Houston's historically Black neighborhoods."
                          projectDesc2="We spoke with the Rice Management Company and with community members, who expressed both hopes for resources and fears of gentrification and displacement. We dove into the data, and we researched the history of Black art in Houston."
              storyPics={[
                <SideStory2 storyName="Rice’s Ion settles into Third Ward" storyLink="/projects/innovation/rices-ion-settles-into-third-ward" authorName = "Murtaza Kazmi and Matt Banschbach" src={newsImg} />,
                <SideStory2 storyName="Meet Rice's newest neighbors" storyLink="/projects/innovation/meet-rices-newest-neighbors" authorName = "Hajera Naveed, Riya Misra, Michelle Gachelin, Bonnie Zhao and Kathleen Ortiz" src={featuresImg} />,
                <SideStory2 storyName="Art and integration: Houston’s tradition of art challenging the paradigm" storyLink="/projects/innovation/meet-rices-newest-neighbors/art-and-integration-houstons-tradition-of-art-challenging-the-paradigm" authorName = "Joseph Flores" src={artImg} />,
              <SideStory2 storyName="The data is unclear on Ion’s gentrification impact" storyLink="/projects/innovation/the-data-are-unclear-on-ions-gentrification" authorName = "Victor Huang" src={dataImg} />,
              ]} />
            {/* <ProjectStory2 projectPic="https://s26162.pcdn.co/wp-content/uploads/2020/12/truth-166853_1920.jpg" projectName="test2"
              storyPics={[
                <SideStory2 projectName="test2" src={"https://www.pewresearch.org/wp-content/uploads/2021/06/FT_21.05.18_TrustInNewsStories_feature.jpg?w=640"} />,
                <SideStory2 projectName="test2" src={"https://www.pewresearch.org/wp-content/uploads/2021/06/FT_21.05.18_TrustInNewsStories_feature.jpg?w=640"} />,
                <SideStory2 projectName="test2" src={"https://www.pewresearch.org/wp-content/uploads/2021/06/FT_21.05.18_TrustInNewsStories_feature.jpg?w=640"} />,
              ]} />
            <ProjectStory projectPic="https://s26162.pcdn.co/wp-content/uploads/2020/12/truth-166853_1920.jpg" projectName="test3"
              storyPics={[
                <SideStory2 projectName="test3" src={"https://www.pewresearch.org/wp-content/uploads/2021/06/FT_21.05.18_TrustInNewsStories_feature.jpg?w=640"} />,
                <SideStory2 projectName="test3" src={"https://www.pewresearch.org/wp-content/uploads/2021/06/FT_21.05.18_TrustInNewsStories_feature.jpg?w=640"} />,
                <SideStory2 projectName="test3" src={"https://www.pewresearch.org/wp-content/uploads/2021/06/FT_21.05.18_TrustInNewsStories_feature.jpg?w=640"} />,
              ]} />
            <ProjectStory2 projectPic="https://s26162.pcdn.co/wp-content/uploads/2020/12/truth-166853_1920.jpg" projectName="test4"
              storyPics={[
                <SideStory2 projectName="test4" src={"https://www.pewresearch.org/wp-content/uploads/2021/06/FT_21.05.18_TrustInNewsStories_feature.jpg?w=640"} />,
                <SideStory2 projectName="test4" src={"https://www.pewresearch.org/wp-content/uploads/2021/06/FT_21.05.18_TrustInNewsStories_feature.jpg?w=640"} />,
                <SideStory2 projectName="test4" src={"https://www.pewresearch.org/wp-content/uploads/2021/06/FT_21.05.18_TrustInNewsStories_feature.jpg?w=640"} />,
              ]} /> */}
          </div>
          {/* <div className='col-12 col-md-2 side-story'>
            <SideStory src={"https://www.pewresearch.org/wp-content/uploads/2021/06/FT_21.05.18_TrustInNewsStories_feature.jpg?w=640"} />
            <SideStory src={"https://www.pewresearch.org/wp-content/uploads/2021/06/FT_21.05.18_TrustInNewsStories_feature.jpg?w=640"} />
            <SideStory src={"https://www.pewresearch.org/wp-content/uploads/2021/06/FT_21.05.18_TrustInNewsStories_feature.jpg?w=640"} />
            <SideStory src={"https://www.pewresearch.org/wp-content/uploads/2021/06/FT_21.05.18_TrustInNewsStories_feature.jpg?w=640"} />
            <SideStory src={"https://www.pewresearch.org/wp-content/uploads/2021/06/FT_21.05.18_TrustInNewsStories_feature.jpg?w=640"} />
          </div> */}
        </div>
      </div>
    </div>
  )
}