import React from 'react'
import '../../stylings/innovationStyles.css';
import 'bootstrap/dist/css/bootstrap.css'; //Bootstrap

export default function InnovationPage() {

    // React.useEffect(() => {
    //     document.title = 'Rice’s Ion Settles Into Third Ward';
    //   });

    return (
        <div>
            {/* <video id="background-media" playsInline autoPlay loop muted poster="../../media/Rick Astley - Never Gonna Give You Up (Official Music Video).mp4">
                <source src={require("../../media/Rick Astley - Never Gonna Give You Up (Official Music Video).mp4")} type="video/mp4" />
            </video> */}
            {/* <img id='background-media' src={require("../../images/IMG_3175.jpg")} alt="" data-aos="fade-zoom-in" /> */}
            <div className='overlay'></div>
            
            <div className="intro">
            </div>

            <div className="main">
            <img src={require("../../images/IMG_3175.jpg")}/>
                <h1 className="text-center"><strong>Rice’s Ion Settles Into Third Ward</strong></h1>
                <div className="row intro-caption justify-content-center">
                    <p className="gray">Rice’s Innovation District is a joint public and private partnership involving the City of Houston and Rice.</p>
                </div>

                <div className="author-date">
                    <p id="author">By Matt Banschbach and Murtaza Kazmi</p>
                    <p id="date" className="gray">October 4, 2022</p>
                </div>
                <p>Introduced in 2019, Rice&rsquo;s Innovation District is a joint initiative between the City of Houston and Rice, intended to lift up economically disadvantaged areas. The central building hub, the Ion, <a href="https://communityimpact.com/houston/heights-river-oaks-montrose/development/2022/05/10/the-ion-celebrates-grand-opening-in-houstons-midtown/" target="_blank" rel="noopener">held its grand opening in May</a> with a ceremony featuring Houston Mayor Sylvester Turner and former Rice President David Leebron.</p>
<p>According to the Brookings Institution, an innovation district is a public and private partnership meant to lift economically disadvantaged areas.</p>
<p>Sam Dike, an investment manager for strategic investments for the Rice Management Company, said the Ion District will support innovation in Houston&rsquo;s economy. The <a href="https://investments.rice.edu/" target="_blank" rel="noopener">RMC</a> is the firm that manages the university&rsquo;s endowment and is responsible for overseeing the project.&nbsp;</p>
<p>&ldquo;This is about strengthening Houston&rsquo;s economic resiliency,&rdquo; Dike said. &ldquo;If you think about the core industries that make up Houston: energy sector, healthcare sector, logistics, aerospace, all of those sectors are all evolving and changing.&rdquo;</p>
<p>The new building now has coworking office areas, various businesses and public spaces. Notable tenants include Chevron and Microsoft.</p>
<p>Dike says that the Ion building is meant to couple people with opportunities.&nbsp;</p>

<div className="media-content">
                    <div class="row align-items-end">
                        <div class="col-md-7">
                            <img src={require("../../media/companies_ion.png")} alt="" data-aos="fade-zoom-in" />
                        </div>
                        <div class="col-md-5">
                            <img src={require("../../media/ion_workspace.png")} alt="" data-aos="fade-zoom-in" />
                        </div>
                    </div>
                    <div class="row align-items-start justify-content-center">
                        <div class="col-md-5">
                            <img className="hui-pic" src={require("../../media/ion_patio.jpg")} alt="" data-aos="fade-zoom-in" />
                        </div>
                        <div class="col-md-7">
                            <img src={require("../../media/ion_streetview.jpg")} alt="" data-aos="fade-zoom-in" />
                            <p class="caption gray">The Ion is the centerpiece of Rice's new Innovation District.</p>
                        </div>
                    </div>
                </div>

<p>&ldquo;If you think about what&rsquo;s happening with our core industries, folks are realizing that they need to innovate,&rdquo; Dike said. &ldquo;They&rsquo;re looking for opportunities to get with like-minded people, smart people, that can help them continue to innovate. This place provides a forum for those discussions to happen in a very productive way.&rdquo;</p>
<p>The construction of the district, adjacent to Houston&rsquo;s Third Ward neighborhood, has been met with strong opposition from some community members, who fear negative impacts of the development. The most prominent effort has been led by the Houston Coalition for Equitable Development without Displacement, which has argued that the development of the district would lead to displacement in the historically Black Third Ward.&nbsp;</p>
<p>&ldquo;It will push African Americans out of a community they&rsquo;ve invested in for years,&rdquo; Carl Davis, a founding member of HCEDD, told <a href="https://www.houstonpublicmedia.org/articles/news/in-depth/2019/12/12/353960/gentrification-a-big-concern-for-some-in-the-community-as-houston-builds-its-innovation-district/" target="_blank" rel="noopener">Houston Public Media</a> in 2019 when the Ion was still under construction.&nbsp;</p>
<p>According to some community members like Elizabeth Montgomery Shelton, Third Ward residents have felt the effects of gentrification over the last few years.&nbsp;</p>
<p>&ldquo;A lot of older buildings are being taken down and replaced with newer buildings,&rdquo; Shelton said. &ldquo;Some of us cannot afford the condos that are moving in &hellip; taxes have gone up tremendously. It&rsquo;s hard for the people in the Third Ward area with the big condos moving in, the new buildings moving in. It&rsquo;s a struggle for the people who can&rsquo;t afford that.&rdquo;</p>
<p>In November 2021, the Houston City Council approved the RMC&rsquo;s development agreement for the creation of the Rice Innovation District. The agreement was negotiated by the RMC and Houston Chief Development Officer Andy Icken.&nbsp;</p>
<p>HCEDD had called for the establishment of a Community Benefits Agreement <a href="https://drive.google.com/file/d/1zQXt472XxN8bP3iMDv8xk-wm1CvzTp7i/view" target="_blank" rel="noopener">between themselves and the RMC</a>, which would <a href="https://fpdl.coss.fsu.edu/sites/g/files/imported/storage/original/application/7a02bcd14985e8dab2c6bff7fcc28585.pdf" target="_blank" rel="noopener">legally bind</a> the RMC to establish safeguards against displacement and other community damage. Rice and Houston declined to include HCEDD in the final agreement.</p>
<p><a href="https://drive.google.com/file/d/1_saqcqJ1SEJoV4DwwlFSwWyF0fsPtCQ1/view" target="_blank" rel="noopener">HCEDD had earlier argued</a> that a CBA by definition is between a developer and community, and that the agreement entered with the City was more akin to a development agreement than a CBA.</p>
<p>Three members of the City Council voted against the motion to approve the agreement. Councilwoman Carolyn Evans-Shabazz, who both grew up in and represents the district encompassing Third Ward, was among them.&nbsp;</p>
<p>&ldquo;I fully support the Ion, but I believe that CBAs should be between the developer and the impacted community,&rdquo; Evans-Shabazz <a href="https://www.houstonpublicmedia.org/articles/news/politics/2021/11/11/413209/houston-city-council-approves-an-agreement-with-ion-developers-despite-community-pushback/" target="_blank" rel="noopener">said to Houston Public Media</a> on her vote against the agreement.&nbsp;</p>
<p>The signing of the agreement came after a period of deliberation within an independent group created by the RMC and City of Houston. The parties developed a series of <a href="https://www.houinnovate.com/wp-content/uploads/2021/05/CBAWorkingGroupReportFinal4-22-21.pdf" target="_blank" rel="noopener">recommendations</a> meant to address community concerns. <a href="https://www.ricethresher.org/article/2021/03/rice-management-company-discusses-contentious-cba-at-sa-meeting" target="_blank" rel="noopener">HCEDD did not participate</a> in the working group.</p>

<div className="media-content">
                    <div className="row justify-content-center">
                        <div className='col-md-8'>
                            <img src={require('../../media/graffiti.jpg')} alt="" data-aos="fade-zoom-in" />
                        </div>
                    </div>
                    <div className="row align-items-start justify-content-center">
                        <div className="col-md-6">
                            <div className="video">
                                <video controls autoplay muted data-aos="fade-zoom-in">
                                    <source src={require('../../media/3rdward.MP4')} type="video/mp4" />
                                </video>
                                <p className="caption gray">Art adorns many of the walls of Third Ward.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src={require('../../media/racism_illness.jpg')} alt="" data-aos="fade-zoom-in" />
                        </div>
                    </div>
                </div>

<p>Some community members are encouraged by the project&rsquo;s development. Aretha Freeman, a resident who attends a church near the Ion, said she is looking forward to the Ion&rsquo;s impact on the community.&nbsp;</p>
<p>&ldquo;There&rsquo;s a whole lot of positive things that the Ion can offer that this community needs,&rdquo; Freeman said. &ldquo;I&rsquo;m excited, I&rsquo;m really glad to see that they consider the community.&rdquo;</p>
<p>The <a href="https://drive.google.com/file/d/1KRgIH6XRq0WZPMVxlZ9ffSfCRAWwCLPN/view" target="_blank" rel="noopener">agreement</a> includes various commitments for the city and for RMC to support the community. These include the establishment of an affordable housing fund, a talent development and placement program and homelessness services.&nbsp;</p>
<p>Other community members said they want the Innovation District and Rice to also address critical issues in the community, such as substance abuse.&nbsp;</p>
<p>&ldquo;Technology is fine, but when you&rsquo;ve got people laying around on every corner, drunk and high, what do we do?&rdquo; Tanya Moore, a member of the same church as Freeman, said. &ldquo;We&rsquo;ve got to start at the root of what&rsquo;s really going on in this community.&rdquo;</p>
<p>Concerns over the development of the district <a href="https://medium.com/@hgentrification/rice-university-students-to-president-david-leebron-and-board-of-trustees-not-in-our-name-4c8127ec824c" target="_blank" rel="noopener">led a selection of Rice student organizations</a> to voice support for HCEDD&rsquo;s mission. There was also <a href="https://www.ricethresher.org/article/2020/01/rice-management-company-defends-ion" target="_blank" rel="noopener">significant discourse</a> within the Student Association, including a meeting with the RMC. In February 2020, the Senate <a href="https://docs.google.com/document/d/1-F21GrBqofV7_XHplijvBVsBqTXlU1S6Fu3R7r6hb9M/edit" target="_blank" rel="noopener">passed a resolution</a> supporting the establishment of a CBA with the City of Houston.</p>
<p>&ldquo;[The] Student Association, representing the Rice student body, supports the development, securement and enforcement of a Community Benefits Agreement for the South Main Innovation District project only if HCEDD &hellip; is an equal decision-maker in the negotiations process and ultimately itself or its members organizations are equal signatories,&rdquo; the resolution reads.</p>
<p>The development has also highlighted other issues in the area, like <a href="https://www.ricethresher.org/article/2020/09/innovation-district-developers-enter-partnership-with-food-insecurity-non-profit" target="_blank" rel="noopener">food insecurity</a> and <a href="https://www.ricethresher.org/article/2019/11/houston-coalition-meets-to-discuss-community-benefits-agreement-regarding-the-ion" target="_blank" rel="noopener">unemployment</a>, leading community advocates to call on the RMC to assist in addressing these issues.</p>
<p>&ldquo;I do think they have a responsibility to make sure that billion-dollar ideas aren&rsquo;t coming in the midst of some child going hungry two miles away,&rdquo; Kirk Jackson, an urban planner who works in Third Ward, previously said to the Thresher.</p>
<p>In response to the broad body of concern, Dike said that the development will not disregard the community in which it is constructed.</p>
<p>&ldquo;[T]he people that are located in this building are actually people that live and work in our communities,&rdquo; Dike said. &ldquo;What we&rsquo;ve tried to do as part of this development is to engage all of the relevant stakeholders that are in our neighborhood.&rdquo;</p>
<p>Zoe Middleton, a member of HCEDD, said that the Innovation District still risks gentrifying Third Ward.</p>
<p>&ldquo;Wherever workers associated with the Ion live, Rice Management Company and Rice University have the most to gain from the Ion and without a Community Benefits Agreement, this development places Third Ward at greater risk of speculation and displacement,&rdquo; Middleton wrote in an email to the Thresher.</p>
<p><a href="http://www.brookings.edu/about/programs/metro/innovation-districts" target="_blank" rel="noopener">Analysis</a> from the Brookings Institution says innovation districts operate in the middle of three types of assets: economic, physical and networking.</p>
<p>Economic assets are built through pure capital. Networking assets are built through close physical proximity between entrepreneurs. Finally, physical assets are built through the various technologies that are available for use by community members, Brookings reports.</p>
<p>Dike indicates the potential for networking assets by saying that the Ion is built for &ldquo;connecting people to opportunities.&rdquo;&nbsp;</p>
<p>&ldquo;It&rsquo;s a place for businesses who are looking for new opportunities to grow and expand, to also get connected to the technical advice and other kinds of services that help them grow and expand their business,&rdquo; Dike said.</p>

<div className="media-content">
                    <div className="row align-items-start justify-content-center">
                        <div className="col-md-6">
                            <img src={require('../../media/community_center.jpg')} alt="" data-aos="fade-zoom-in" />
                        </div>
                        <div className="col-md-6">
                            <div className="video">
                                <img src={require('../../media/art.jpg')} alt="" data-aos="fade-zoom-in" />
                                <p class="caption gray"> The SHAPE Community Center serves Third Ward's Black community. </p>
                            </div>
                        </div>
                    </div>
                </div>

<p>Physical assets are also abundant in the Ion. The building hosts The Ion Prototyping Lab, a 6,500-square-foot space which includes a rapid prototyping lab, wood shop, machine shop, electronics lab and a wide variety of other tools.</p>
<p>However, all these assets are subject to various membership and leasing plans.&nbsp;</p>
<p>The Ion primarily supports businesses through their incubator and accelerator programs. These programs take businesses at different stages of development and provide them the requisite mentorship or capital to help these businesses succeed.&nbsp;</p>
<p>Dike says that these accelerator hubs cater to various sectors in an effort to promote business growth.&nbsp;</p>
<p>&ldquo;There are some that focus on smart and resilient cities,&rdquo; Dike said. &ldquo;There are some that are focused on clean tech. There are accelerators that are focused on sports and there&rsquo;s some that are focused on minority or women owned businesses and entrepreneurs.&rdquo;</p>
<p>Among one of these incubator programs is Greentown Labs Houston. This organization is the largest climate technology and sustainable energy incubator in North America. According to <a href="https://www.houstonpublicmedia.org/articles/news/business/2020/09/22/382490/clean-energy-tech-incubator-to-move-into-former-midtown-fiesta/" target="_blank" rel="noopener">Houston Public Media</a>, this Massachusetts-based incubator is ready to support 50 startup businesses in the Ion.&nbsp;</p>
<p>&ldquo;I think that&rsquo;s a testament to what Houston has to offer as being the energy capital of the world and to their desire to be located here in the Ion District because of the synergies in activity,&rdquo; Dike said.&nbsp;</p>
<p>According to Derek Hyra, the founding director of American University&rsquo;s Metropolitan Policy Center, equity should play a central role as Rice moves forward with its innovation district.</p>
<p>&ldquo;It is very important for Rice to pursue an equitable development, instead of gentrification,&rdquo; Hyra said. &ldquo;The growth should be equitable &hellip; Is Rice supporting affordable housing for residents in the Third Ward? Or doing any other measure? This is very important.&rdquo;</p>
                <p id="author">Photos by Katherine Hui, Camille Kao and Kelton Keck / Thresher. Design by Nithya Ramcharan, Shannon Shao and MyCo Le.</p>
            </div>
        </div>
    )
}
