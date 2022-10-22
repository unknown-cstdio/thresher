import React from 'react'
import '../stylings/A&EStyles.css';
import 'bootstrap/dist/css/bootstrap.css'; //Bootstrap

export default function ArtsEntertainment() {
    // parallax to images so they scroll slower --> creates depth

    let nipsey = document.getElementById('nipsey');
    let angela = document.getElementById('angela');
    let guilt = document.getElementById('guilt');
    let man = document.getElementById('man');
    let brooding = document.getElementById('brooding');
    let sos = document.getElementById('sos');
    let state = document.getElementById('state');
    let economics = document.getElementById('economics');
    let boxing = document.getElementById('boxing');

    React.useEffect(() => {
        window.addEventListener('scroll', function() {
            var value = window.scrollY;

            nipsey.style.top = 100 + (value * 0.3) + 'px';
            angela.style.top = 100 + (value * 0.3) + 'px';
            let floating = document.getElementsByClassName('floating');
            // guilt.style.top = 100 + (value * 0.3) + 'px';
            // man.style.top = 100 + (value * 0.3) + 'px';
            // brooding.style.top = 100 + (value * 0.3) + 'px';
            // sos.style.top = 100 + (value * 0.3) + 'px';
            // state.style.top = 100 + (value * 0.3) + 'px';
            // economics.style.top = 100 + (value * 0.3) + 'px';
            // boxing.style.top = 100 + (value * 0.3) + 'px';

            // add slower scrolling for class elements
            for (var i=0; i<floating.length; i++) {
                // let el = floating[i];
                // var elDistanceToTop = el.getBoundingClientRect().top;
                // el.style.top = (elDistanceToTop * 0.3) + 'px';
            }
        })
    }, []);

    // React.useEffect(() => {
    //   document.title = 'Art and integration: Houston’s tradition of art challenging the paradigm';
    // });


    return (
        <div>

            <div className="mainAE">

                <img className="position-absolute floating left-floating" id='nipsey' src={require('../media/ArtsEntertainment/art not competition.jpg')} alt="" data-aos="fade-zoom-in"/>
                <img className="position-absolute floating right-floating" id='angela' src={require('../media/ArtsEntertainment/angela davis.jpg')} alt="" data-aos="fade-zoom-in"/>
                
                <div className="title">
                    <h1>Art and integration: Houston’s tradition of art challenging the paradigm</h1>
                </div>

                <div className="author-date text-block">
                    <p id="author">By <strong>Joseph Flores</strong></p>
                    <p id="date" className="gray">October 4, 2022</p>
                </div>

                <div className='text-block'>
                    <p>In the heart of Third Ward, the <a href='https://hmaac.org/' rel='noreferrer' target='_blank'>Houston Museum for African American Culture</a> hosts exhibitions from artists whose creativity and culture blend to produce works that often revel in abstraction, revere influential African Americans and raise questions about the Black experience.</p>
                    <p>Eddie Filer’s recent exhibit, “The Bridging of a Negative Mindset with Positivity,” showcased his friends, family and Black creatives, politicians and philanthropists.</p>
                    <p>“I felt in the Black community, positive role models and positive thinking were becoming extinct,” Filer wrote on a small placard overshadowed by the portraits of influential African Americans in his exhibit at HMAAC. “I have to paint positive because I have seen enough negativity already, you know, growing up and in my community.”</p>
                </div>
                
                <img className="position-absolute floating left-floating" id='guilt' src={require('../media/ArtsEntertainment/guilt.jpg')} alt="" data-aos="fade-zoom-in"/>

                {/* <div className="media-content">
                    <div class="row align-items-end">
                        <div class="col-md-6">
                            <img class="hover-flip" src={require("../media/ArtsEntertainment/SOS (1).jpg")} alt="" data-aos="fade-zoom-in"/>
                        </div>
                        <div class="col-md-6">
                            <img class="hover-flip" src={require("../media/ArtsEntertainment/The State of Things.jpg")} alt="" data-aos="fade-zoom-in"/>
                        </div>
                    </div>
                    <div class="row align-items-start justify-content-center">
                        <div class="col-md-7">
                            <img class="hover-flip" src={require("../media/ArtsEntertainment/Black Economics (1).jpg")} alt="" data-aos="fade-zoom-in"/>
                        </div>
                    </div>  
                </div> */}

                <div className='text-block'>
                    <p>Alongside portraits of Filer’s family and friends are the portraits of the Los Angeles rapper Nipsey Hussle, the radical feminist Angela Davis and American novelist and author of <em>If Beale Street Could Talk</em>, James Baldwin. Also included in the exhibit are portraits of Shirley Chisholm, Nina Simone, John Lewis, Oprah Winfrey, Muhammad Ali and Denzel Washington.</p>
                </div>

                <img className="position-absolute floating right-floating" id='man' src={require('../media/ArtsEntertainment/old man.jpg')} alt="" data-aos="fade-zoom-in"/>

                {/* <img className="position-absolute floating right-floating" src={require('../media/ArtsEntertainment/letterscircles-distorted.png')} alt="" data-aos="fade-zoom-in"/> */}
                
                
                <div className='text-block'>
                    <p>“I am no longer accepting the things I can not change” are the words hovering above Davis, who is depicted wearing a bright red shirt in front of a green background. “I am changing the things I can not accept.”</p>
                    <p><a href='https://www.archives.gov/research/african-americans/individuals/angela-davis' rel='noreferrer' target='_blank'>Davis’ activism</a> at its height, took place during the Civil Rights Era in the 1960s and 1970s. Davis and some of her fellow members of the Black Panther Party critiqued police brutality, anti-Black racism and discrimination on the basis of gender and sexuality.</p>
                    <p>This activism and political tradition, in particular among the Panthers and the Black community, was not confined to Davis or to <a href='https://repository.upenn.edu/cgi/viewcontent.cgi?article=1004&context=asc_papers' rel='noreferrer' target='_blank'>Oakland</a>, CA. In fact, some of this radical politics took place at The Menil Collection in Houston in the 1960s.</p>
                </div>

                {/* <img id='ropepig' src={require('../media/ArtsEntertainment/ropepig.png')} alt="" data-aos="fade-zoom-in"/> */}

                
                <div className='text-block'><h2>A legacy of the de Menils</h2>
                    <p><a href='https://www.menil.org/' rel='noreferrer' target='_blank'>John and Dominique de Menil</a> gifted their art and museum, The Menil Collection, to the City of Houston in 1987 to make art more accessible and to provide a platform for Black artists, according to <a href='https://www.menil.org/bookstore/products/art-and-activism-projects-of-john-and-dominique-de-menil' rel='noreferrer' target='_blank'>the Menil Collection's website</a>.</p>
                    <p>“What was a very important legacy was all the activities, events and programs that [the de Menils] established with the African American community, at a moment when the city was completely segregated, when it was more segregated than it was today,” Fabiola López-Durán, an associate professor of art and architectural history at Rice, said.</p>
                    <p>The de Menils offered to match a federal grant to purchase Barnett Newman’s <em>Broken Obelisk</em> in hopes of donating the gift to the City of Houston and dedicating it to Martin Luther King Jr., who was assassinated a year prior. The City of Houston rejected the gift, and the de Menils purchased it themselves and placed it in front of the Rothko Chapel in Fall 1970.</p>
                    <p>The de Menils also <a href='https://www.nytimes.com/1986/05/18/magazine/the-de-menil-family-the-medici-of-modern-art.html' rel='noreferrer' target='_blank'>aided the Houston chapter</a> of the Black Panther Party’s free breakfast program that began in January 1973, according to historian Alvia J. Wardlaw. Their link to the Party was Charles Freeman, one of the two students who <a href='https://digitalprojects.rice.edu/wrc/between-decisions/exhibits/show/between-decisions/race/charlie-freeman' rel='noreferrer' target='_blank'>desegregated</a> Rice University in 1965. The de Menils had contributed to the Panther’s “survival projects,” which included purchasing groceries for free distribution to local families.</p>
                    <p>The “De Luxe Show,” the first interracial show of contemporary art in the US that was housed in an abandoned movie theater in Fifth Ward, was a collaborative effort between the de Menils and African American activist and Texas congressman Mickey Leland. They worked with local Black businesses to renovate the theater in a span of thirteen days.</p>
                    <p>“The show galvanized the Fifth Ward community and created a rare interface between blacks and whites, one that was productive and goal driven,” Wardlaw wrote in <em>Art and Activism: Projects of John and Dominique de Menil</em>. “‘The De Luxe Show’ was a novel idea that set the Houston art world on its heels.”</p>
                    
                    <h2>Artists of color in Houston</h2>

                    <p>Now, with the Rice Management Company continuing with their plan to develop a 16-acre <a href='https://iondistrict.com/#section-1' rel='noreferrer' target='_blank'>innovation district</a> in historically Black Third Ward, some activists have <a href='https://www.houstonpublicmedia.org/articles/news/business/2021/10/12/410697/shut-out-of-a-contract-a-third-ward-community-coalition-continues-to-fight-for-equitable-development-of-houstons-ion-district/' target='_blank' rel='noreferrer'>expressed</a> fears of gentrification and displacement, while others have focused on capturing the opportunities Rice promises to provide.</p>
                    <p>“The thing I love about [the Ion] is that it’s so forward thinking,” <a href='https://www.cedricingram.com/' rel='noreferrer' target='_blank'>Cedric Ingram</a>, a local urban contemporary artist, said. “It feeds the diversity of Houston. It’s feeding to the culture, not just in Houston but in general. It is all about being innovative, collaborating, feeding and growing opportunities.”</p>
                    <p>Ingram, who said he finds influence from the likes of those ranging from <a href='https://www.caravaggio-foundation.org/' rel='noreferrer' target='_blank'>Caravaggio</a> to the <a href='http://theisleybrothersofficial.com/' rel='noreferrer' target='_blank'>Isley Brothers</a>, said he sees the Ion as crucial to the city’s development, but acknowledges that its success relies on initiatives to immerse itself in the city.</p>
                    <p>One of Ingram’s recent works is “S.O.S.,” an oil pastel painting that features a young African American boy trying to portray his talent to people walking by. Then there is a young girl supporting his cause.</p>
                </div>

                <img className="intext-image" id='sos' src={require('../media/ArtsEntertainment/SOS (1).jpg')} alt="" data-aos="fade-zoom-in"/>
                
                <div className='text-block'>
                    <p>“As we talk about the Innovation District, and thinking about the area, [“S.O.S”]  is one of the works that comes to mind,” Ingram said.</p>
                    <p>Filer said that without venues such as HMAAC, many African American artists would not have a place to exhibit in Houston.</p>
                </div>

                <img className="position-absolute floating right-floating" id='boxing' src={require('../media/ArtsEntertainment/boxing.jpg')} alt="" data-aos="fade-zoom-in"/>
                
                <div className='text-block'>
                    <p>“I thank HMAAC because they opened their doors to me, but there definitely needs to be more places.” Filer said. “There’s hardly any places for people of color to show [their artwork].”</p>
                </div>

                <img className="position-absolute floating left-floating" id='brooding' src={require('../media/ArtsEntertainment/brooding.jpg')} alt="" data-aos="fade-zoom-in"/>
                
                <div className='text-block'>
                    <p>Ingram also spoke of the underrepresentation of Black artists in prominent Houston galleries, noting that he and his colleagues had similar experiences in the Houston art scene.</p>
                    <p>“When you think about other galleries in the area, you don’t see as many [Black] artists… but there’s so many I know within the area,” Ingram said. “It’s a matter of having those opportunities to tell their stories and represent who they are, their background … and so forth. There’s a lot of us out there, and some of us get a little recognition. [New artists] seem to be popping up every day with different angles.”</p>
                    
                    <p>López-Durán said many Latinx artists have also faced difficulties finding homes for their artwork. She applauded the Museum of Fine Arts’s <a href='https://www.mfah.org/visit/kinder-building' rel='noreferrer' target='_blank'>opening</a> of the Nancy and Rich Kinder Building, which is dedicated to international modern and contemporary art. She said this would allow more spaces for Latin American and Latinx artists to showcase their talents. López-Durán also commended Rice’s Moody Center for the Arts and the University of Houston’s Blaffer Art Museum for displaying Latinx art. She said this is a valiant effort, but much more work still needs to be done.</p>
                </div>
                
                <img className="position-absolute floating left-floating" id='state' src={require('../media/ArtsEntertainment/The State of Things.jpg')} alt="" data-aos="fade-zoom-in"/>

                <div className='text-block'>
                    <p>“Socially speaking we move very slowly,'' López-Durán said. “We require a lot of self-education and unlearning. There’s things for us to do and celebrate. I celebrate the initiative of the Menil in the process of the 1960s, in the middle of the Civil Rights demonstrations. The success of the Museum of the Fine Arts in forcing the museum to have more modern and contemporary [Latin American and Latinx art].”</p>
                </div>

                <img className="position-absolute floating right-floating" id='economics' src={require('../media/ArtsEntertainment/Black Economics (1).jpg')} alt="" data-aos="fade-zoom-in"/>

                <div className='text-block'>
                    <p>Regarding the long-term impacts of the Ion and the Innovation District, Ingram remains hopeful.</p>
                    <p>“It comes down to the initiatives,” Ingram said. “To fight against gentrification, it matters how people are included in those areas. If it is more inclusive of the people and the culture, maybe it wouldn’t be as negative of an impact. If you do not allow people to represent themselves in their various aspects, then it would be a negative thing.”</p>
                    <div className='text-secondary'>All images courtesy of the artists. Design by MyCo Le and Heather Szczesniak.</div>
                </div>
            </div>
        </div>

    )
}
