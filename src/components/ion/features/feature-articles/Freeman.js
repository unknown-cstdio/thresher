import '../../../../stylings/IonFeatures.css';
import { Link } from "react-router-dom";
import Clarice from "../../../../images/ion-features/Clarice.jpg";

const Freeman = () => {
  return (
    <>
    <section className='feature-header'>
        <div class="header-content feature-container">
            <h1>Clarice Freeman</h1>
            <img src={Clarice} className="header-img"></img>
        </div>
    </section>
    <section className='feature-content feature-container'>
        <p id="author">By Riya Misra</p>
        <p id="date" className="gray">October 4, 2022</p>
        <p className='feature-text'>Clarice Freeman, the 102-year-old pillar of the Third Ward community, dons elegant black head wraps and strikingly crimson nails. Age does not seem to have halted her&nbsp; zest; for her 100th birthday, she wore a tiara and rode around the city in a Corvette convertible, the star of her very own parade. A noted community member, elder and wife of the late Thomas Freeman, a debate coach and mentor to the likes of Martin Luther King Jr. and Denzel Washington, Freeman&rsquo;s engagement with Third Ward spans decades. Indeed, she has graced publications ranging from Texas Monthly to Oprah Daily.</p>
        <p className='feature-text'>&ldquo;I&rsquo;ve had a very unusual life,&rdquo; Freeman said. &ldquo;It&rsquo;s been quite different.&rdquo;</p>
        <p className='feature-text'>Freeman said the community&rsquo;s demographics have shifted over the 67 years she has lived in Third Ward. When real estate agents first started selling property to Black buyers, they met resistance.&nbsp;</p>
        <p className='feature-text'>&ldquo;All the homes had these signs in front: &lsquo;This is our home, it is not for sale,&rsquo;&rdquo; Freeman said. &ldquo;But gradually, the signs began to disappear, and Black people started moving into the area.&rdquo;</p>
        <p className='feature-text'>Freeman said she laments the ever-shifting tide of Third Ward&rsquo;s demographics. The very Texas Monthly article that coined Third Ward as one of Houston&rsquo;s richest Black neighborhoods also questioned whether the community could maintain its title.</p>
        <p className='feature-text'>People eventually removed the signs asserting their home ownership &mdash; but, some years after, Freeman says she recalls an influx of new homeowners who posed threats to the current residents of Third Ward.</p>
        <p className='feature-text'>&ldquo;Someone from the Chronicle came to my house, she wanted to ask about the neighborhood today,&rdquo; Freeman said. &ldquo;She said, &lsquo;Well, a lot of people want to move into the area&rsquo; ... You ask anyone in that area, they will tell you that, all day long, people are wanting to buy our houses. Their houses.&rdquo;</p>
        <p className='feature-text'>Despite the battles that Freeman continues to witness Third Ward fight against new developments, she has relished the area&rsquo;s rich history and notable community members.</p>
        <p className='feature-text'>&ldquo;We&rsquo;ve had some very famous people living in our area. You know Beyonce, the singer,&rdquo; Freeman said. &ldquo;I could get out from my back door, look over where she was. She grew up in the neighborhood.&rdquo;</p>
        <section className='feature-container link-container'>
            <Link to="/projects/innovation/meet-rices-newest-neighbors/ion-feature-edwards"  className='back-features'>←Previous</Link>
            <Link to="/projects/innovation/meet-rices-newest-neighbors"  className='all-features'>All</Link>
            <Link to="/projects/innovation/meet-rices-newest-neighbors/ion-feature-jones"  className='next-features'>Next→</Link>
        </section>
    </section>
    
    </>
  );
};

export default Freeman;