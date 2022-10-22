import '../../../../stylings/IonFeatures.css';
import { Link } from "react-router-dom";
import Frank from "../../../../images/ion-features/Frank.jpg";

const Rush = () => {
  return (
    <>
    <section className='feature-header'>
        <div class="header-content feature-container">
            <h1>Frank Rush</h1>
            <img src={Frank} className="header-img"></img>
        </div>
    </section>
    <section className='feature-content feature-container'>
        <p id="author">By Hajera Naveed</p>
        <p id="date" className="gray">October 4, 2022</p>
        <p className='feature-text'>On a late summer day in 1970, Frank Rush walked the paved streets of Texas Southern University for his first day of college. Rush, originally from Waco, Texas moved to Houston to attend the historically Black college on a music scholarship to play trombone.&nbsp;</p>
        <p className='feature-text'>A turn of events led to Rush eventually changing his major, moving to the University of California, Berkeley to challenge himself more academically and ultimately graduating from law school with his J.D. Although he is now a preacher, Rush spent the first part of his career mentoring other law students like him in Houston.</p>
        <p className='feature-text'>&ldquo;The challenge was that not enough Black students were being hired nationally. There was this prejudice,&rdquo; Rush said. &ldquo;My thing is that I don&rsquo;t let people treat me second class. They can&rsquo;t talk to me second class, and &hellip; I am not going to let you treat me like that. So I wanted to instill in [my students&rsquo;] minds that you can become successful. I don&rsquo;t care who you are.&rdquo;</p>
        <p className='feature-text'>In 1985, after training in a Fourth Ward church, Rush found himself in front of a church, now called the Houston Praise and Worship Center, in Third Ward. He was asked to become the pastor of this church, and, after contemplation, he accepted and became invested in the position.&nbsp;</p>
        <p className='feature-text'>&ldquo;The church is a spiritual hospital, it is here to serve the community,&rdquo; Rush said. &ldquo;How do we do that? Multiple ways. Not only spiritual counseling and all of that, but we [also] give away food &hellip; and toys. We've even given away two cars over the years. The first [person] I gave [a car] to, he'll never forget. He comes to see me all the time.&rdquo;</p>
        <p className='feature-text'>Rush and his church also started a U.S. Armed Forces Celebration, which continues to grow as an event. This year, they hosted Houston Mayor Sylvester Turner as a speaker and were accompanied by over 60 vendors, according to Rush.&nbsp;</p>
        <p className='feature-text'>&ldquo;I don't want people to look at the inner city, predominantly Black community and say, &lsquo;You folks have no relationship with people who serve this country, people who are on the front lines in the country and in this city,&rsquo;&rdquo; Rush said.</p>
        <p className='feature-text'>Rush calls on others who plan to enter into the community to work on similar initiatives in an effort to improve the lives of those who already live there. He said the University of Houston Medical School is a good example of how to do that, as they host <a href="https://hri.uh.edu/news-events/closer-look-third-ward-co-chair-third-ward-health-and-wellness-committee" target="_blank" rel="noopener">&lsquo;Tre Talks&rsquo;</a> to better understand the health concerns of the community.&nbsp;</p>
        <p className='feature-text'>&ldquo;Lately our church and other [community] organizations are seeing more infusion, like with [the University of Houston], to the community,&rdquo; Rush said. &ldquo;I am hopeful that Rice, through [the] Ion, will do the same. Welcome to the community, but make sure you are infusing your dollars into the community to help others who were already there doing great work before you arrived.&rdquo;</p>
        <section className='feature-container link-container'>
            <Link to="/projects/innovation/meet-rices-newest-neighbors/ion-feature-jones"  className='back-features'>←Previous</Link>
            <Link to="/projects/innovation/meet-rices-newest-neighbors"  className='all-features'>All</Link>
            <Link to="/projects/innovation/meet-rices-newest-neighbors/ion-feature-vallie"  className='next-features'>Next→</Link>
        </section>
    </section>
    
    </>
  );
};

export default Rush;