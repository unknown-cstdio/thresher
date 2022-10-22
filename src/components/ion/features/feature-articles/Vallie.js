import '../../../../stylings/IonFeatures.css';
import { Link } from "react-router-dom";
import Brendalyn from "../../../../images/ion-features/Brendalyn.jpg";

const Vallie = () => {
  return (
    <>
    <section className='feature-header'>
        <div class="header-content feature-container">
            <h1>Brendalyn Vallie</h1>
            <img src={Brendalyn} className="header-img"></img>
        </div>
    </section>
    <section className='feature-content feature-container'>
        <p id="author">By Michelle Gachelin</p>
        <p id="date" className="gray">October 4, 2022</p>
        <p className='feature-text'>Brendalyn Vallie is a 63 year old college student, social worker and former addict. While not originally from Third Ward, she frequently attends mass at the Houston Praise and Worship Center. Vallie works in counseling and program assistance for Santa Maria Hostel, a multi-site substance use treatment center which focuses on providing long-term, holistic care for women and their children.&nbsp;</p>
        <p className='feature-text'>&ldquo;You have these facilities, and the one at Bonita House is like the church,&rdquo; Vallie said. &ldquo;They&rsquo;re able to take their kids there and do their treatment. If they do successful treatment, [the center offers] them housing, so their kids have somewhere to go, provided that they are completely released from their addiction. So as not to lose them to CPS, they get counseling with their kids.&rdquo;</p>
        <p className='feature-text'>Vallie said that the center&rsquo;s clients, who number in the hundreds, undergo a rigorous recovery program, including daily group therapy to help them process their trauma.</p>
        <p className='feature-text'>&ldquo;Being able to talk about your past is like a release,&rdquo; Vallie said. &ldquo;You have some people who are just following protocol until the next phase, but some people actually come in and they grasp the whole of it, even if they&rsquo;re faking it &lsquo;till they make it. Some mama actually came in saying, &lsquo;This is something I have to do, so I&rsquo;m just going to do it right and get out sooner.&rsquo;&rdquo;</p>
        <p className='feature-text'>The treatment center services their patients throughout their recovery by providing prevention and intervention care, housing and long-term recovery aftercare. Vallie says that her experiences overcoming addiction shape her counseling approach.</p>
        <p className='feature-text'>&ldquo;Some of the counselors that have been in addiction turn out to be some of the best counselors, because they know what it&rsquo;s like,&rdquo; Vallie said. &ldquo;For me, I lived a lifestyle of glamor because I was married to a dope man. My addiction was money, but at the same time I still used [drugs]. For me to get past that, I had to give up my whole lifestyle.&rdquo;</p>
        <p className='feature-text'>At sixty-three, Vallie said she is on track to earn her bachelor&rsquo;s degree studying spiritual counseling and social work. She plans to have her own addiction treatment center that will address patients&rsquo; mental health to prevent a relapse in their substance abuse.</p>
        <p className='feature-text'>&ldquo;I&rsquo;m going to keep going until I get my PhD. Because when I get my own building, and I counsel people, I don&rsquo;t have to do it at a facility,&rdquo; Vallie said. &ldquo;I want to be able to help my people &hellip; I want to be able to assign them medication for their mental state of mind, to help keep them from going back to try to get drugs [for] their mental trauma.&rdquo;&nbsp;</p>
        <p className='feature-text'>Vallie said she hopes her successes will inspire her patients on their journey.</p>
        <p className='feature-text'>&ldquo;My passion is helping people out of [addiction],&rdquo; Vallie said. &ldquo;Mostly, I want to show them that if I came up, you can come up too. Anybody can do it.&rdquo;</p>
        <section className='feature-container link-container'>
            <Link to="/projects/innovation/meet-rices-newest-neighbors/ion-feature-rush"  className='back-features'>←Previous</Link>
            <Link to="/projects/innovation/meet-rices-newest-neighbors"  className='all-features'>All</Link>
            <Link to="/projects/innovation/meet-rices-newest-neighbors/ion-feature-bensaci"  className='next-features'>Next→</Link>
        </section>
    </section>
    
    </>
  );
};

export default Vallie;