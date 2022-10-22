import '../../../../stylings/IonFeatures.css';
import { Link } from "react-router-dom";
import Marie from "../../../../images/ion-features/Marie.jpg";

const Bensaci = () => {
  return (
    <>
    <section className='feature-header'>
        <div class="header-content feature-container">
            <h1>Maire Bensaci</h1>
            <img src={Marie} className="header-img"></img>
        </div>
    </section>
    <section className='feature-content feature-container'>
        <p id="author">By Bonnie Zhao</p>
        <p id="date" className="gray">October 4, 2022</p>
        <p className='feature-text'>Marie Bensaci has lived in the Third Ward community for the past 11 years, and she&rsquo;s held the position of church secretary for the last 15. Now 69 years old, Bensaci is struggling with homelessness.</p>
        <p className='feature-text'>&ldquo;I am an elderly in the community &hellip; I have seen changes [here] &mdash; some good, some bad,&rdquo; Bensaci said. &ldquo;I believe the positive changes will only be positive with everybody concerned if we are all incorporated &mdash; our opinions, our thoughts, directions &hellip; in the changes that are coming.&rdquo;</p>
        <p className='feature-text'>But in Marie&rsquo;s experience, that has not been the case because of the drastic changes in Third Ward&rsquo;s demographics over the years.</p>
        <p className='feature-text'>&ldquo;[Third Ward] was predominantly Black culture &hellip; predominantly middle class,&rdquo; Bensaci said. &ldquo;Now it has switched around. Because it was mostly the elderly people that held the property, [but] their kids moved to New York, to Alabama &hellip; So when the elderly people could no longer take care of it, or they would move to a nursing home, then their children came, but they just wanted to sell [the properties] off.&rdquo;</p>
        <p className='feature-text'>Besides the properties in the area sold to people outside of their community, Bensaci stressed that many economic factors also negatively impact Third Ward.</p>
        <p className='feature-text'>&ldquo;For instance, a one-bedroom apartment you [could] get here, maybe three or 400 [thousand dollars] is jumped up to 12 or 1,500,&rdquo; Bensaci said. &ldquo;A lot of the [taken] property is obtained [by the government] through taxes &mdash; taxes that haven't been paid. And sometimes a lot of people are not aware of that. You got to be smart, you got to want to look ahead.&rdquo;</p>
        <p className='feature-text'>Bensaci lost her long-time house on North MacGregor Street for this very reason &mdash; taxes.</p>
        <p className='feature-text'>&ldquo;My mom was 93. She passed right before COVID hit full screen. So I was traveling back and forth,&rdquo; Bensaci said. &ldquo;While I was taking care of my mom, I got a notice that my housing was [going to be taken away]. I was supposed to report [my taxes], [but on the day before], I was burying my mom. So I lost my house.&rdquo;</p>
        <p className='feature-text'>Bensaci was a retired legal secretary who was used to taking care of herself before becoming homeless. The domain that comes with losing one&rsquo;s own shelter is daunting for her.</p>
        <p className='feature-text'>&ldquo;It was my first time ever being on housing [assistance], because I've always been &hellip; very independent, very goal oriented. I've always paid my own bills,&rdquo; Bensaci said. &ldquo;So I didn't know how to maneuver these government entities like food stamps, housing.&rdquo;</p>
        <p className='feature-text'>Despite her own struggles, Bensaci dedicates herself to helping others in the community.</p>
        <p className='feature-text'>&ldquo;There's a lot of homelessness in this area. There's a lot of brokenness, broken souls &hellip; they feel hopeless,&rdquo; Bensaci said. &ldquo;And that's where our church comes in, and other churches in the area.&rdquo;</p>
        <section className='feature-container link-container'>
            <Link to="/projects/innovation/meet-rices-newest-neighbors/ion-feature-vallie"  className='back-features'>←Previous</Link>
            <Link to="/projects/innovation/meet-rices-newest-neighbors"  className='all-features'>All</Link>
            <Link to="/projects/innovation/meet-rices-newest-neighbors/ion-feature-doshi"  className='next-features'>Next→</Link>
        </section>
    </section>
    
    </>
  );
};

export default Bensaci;