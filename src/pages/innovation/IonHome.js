import React, {useEffect, useState} from 'react';
import newsImg from '../../images/newsImg.jpg';
import featuresImg from '../../images/featuresImg.jpg';
import artImg from '../../images/artImg.jpg';
import dataImg from '../../images/dataImg.jpg';
import '../../stylings/IonHome.css'

export default function IonHome() {

    // React.useEffect(() => {
    //     document.title = 'The Ion: Rice’s innovation district joins Third Ward community';
    //   });

    const overviewText = [
        "The Thresher is launching its Special Projects team with a thorough examination of Rice's Innovation District. As part of Rice's push beyond the hedges, the Innovation District is under construction in Third Ward, one of Houston's historically Black neighborhoods.",
        "We spoke with the Rice Management Company and with community members, who expressed both hopes for resources and fears of gentrification and displacement. We dove into the data, and we researched the history of Black art in Houston. Read more here and in our Oct 5., 2022 print edition."
    ];

    const stories = [
        {
            "quote": "Rice's Ion settles into Third Ward ",
            "desc": "Murtaza Kazmi and Matt Banschbach",
            "byline": "See more",
            "link": "/projects/innovation/rices-ion-settles-into-third-ward",
            "image": newsImg
        },
        {
            "quote": "Meet Rice's newest neighbors",
            "desc": "Hajera Naveed, Riya Misra, Michelle Gachelin, Bonnie Zhao and Kathleen Ortiz",
            "byline": "See more",
            "link": "/projects/innovation/meet-rices-newest-neighbors",
            "image": featuresImg
        },
        {
            "quote": "Art and integration: Houston's tradition of art challenging the paradigm",
            "desc": "Joseph Flores",
            "byline": "See more",
            "link": "/projects/innovation/meet-rices-newest-neighbors/art-and-integration-houstons-tradition-of-art-challenging-the-paradigm",
            "image": artImg
        },
        {
            "quote": "The data is unclear on Ion's gentrification impact",
            "desc": "Victor Huang",
            "byline": "See more",
            "link": "/projects/innovation/the-data-are-unclear-on-ions-gentrification",
            "image": dataImg
        }
    ];

    const [visible, incrementVisible] = useState(4);
    // for (let i = 0; i < stories.length; i++) {
    //     useEffect(() => {
    //         const timer = setTimeout(() => {
    //             incrementVisible(visible => visible + 1);
    //             console.log(visible);
    //         }, 1700 * i + 700);
    //         return () => clearTimeout(timer);
    //     }, []);
    // }

    return (
        <div id='ion-home-container'>
            <div id='ion-header'>The Ion: Rice’s innovation district joins Third Ward community</div>
            {/* <div id='ion-intro'></div> */}
            <div className='ion-item-container'>
                <div className='ion-item ion-overview'>
                    <p><em>A note from Special Projects Editor Prayag Gordy:</em></p>
                    {overviewText.map(paragraph => {
                        return (<p>{paragraph}</p>)
                    })}
                    <p id="date" className="gray">Design by Fadil Eledath.</p>
                </div>
                {stories.map((story, idx) => {
                    return (<a href={story.link} className={`ion-item${(visible <= idx) ? ' hidden' : ''}`}>
                        <div className="ion-item-image" style={{backgroundImage: `url(${story.image})`}}></div>
                        <div className="ion-item-text">
                            <div className="ion-quote">{story.quote}</div>
                            <div className="ion-bottom">
                                <div className="ion-desc">{story.desc}</div>
                                <div className="ion-link">
                                    <span><br />{story.byline}<hr /></span>
                                </div>
                            </div>
                        </div>
                    </a>)
                })}
            </div>
        </div>
    )
}