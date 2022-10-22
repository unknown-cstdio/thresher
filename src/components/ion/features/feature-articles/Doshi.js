import '../../../../stylings/IonFeatures.css';
import { Link } from "react-router-dom";
import Deepak from "../../../../images/ion-features/Deepak.jpg";

const Rush = () => {
  return (
    <>
    <section className='feature-header'>
        <div class="header-content feature-container">
            <h1>Deepak Doshi</h1>
            <img src={Deepak} className="header-img"></img>
        </div>
    </section>
    <section className='feature-content feature-container'>
        <p id="author">By Hajera Naveed</p>
        <p id="date" className="gray">October 4, 2022</p>
        <p className='feature-text'>At the corner of Holman Street and Emancipation Avenue, alongside the white-painted Project Row houses, sits the Doshi House &mdash; one of the only food establishments in the neighborhood. Its walls are adorned with tasteful pieces from local artists, and the antique furniture filling the interior serves as a facilitator for community gathering, which is what it was always about for Deepak Doshi: the community.</p>
        <p className='feature-text'>Doshi, now 40, left the corporate world to begin this journey with the Doshi House in 2010, when he first acquired the now-96-year-old building. It began as an art gallery and eventually evolved into a plant-based coffee and food shop.&nbsp;</p>
        <p className='feature-text'>&ldquo;It was a lifestyle change to feed into the things I am really interested in: community, food and coffee,&rdquo; Doshi said. &ldquo;I wanted to make sure that if we built something [here], it was going to be valuable for the people in the community.&rdquo;</p>
        <p className='feature-text'>Doshi said he took a risk in starting his business in this area at a time when there was almost no other development. Still now, he said, there are few small businesses in the area, while bigger developments &mdash; like the Ion &mdash; are growing at an increasing rate.&nbsp;</p>
        <p className='feature-text'>&ldquo;I really do think that if we had more businesses on the street, it activates the quality of life,&rdquo; Doshi said. &ldquo;I talked about this with the guys at [Emancipation Park]. [They] want to get [community members] walking, but what are they walking towards? It is just dead plots of land.&rdquo;</p>
        <p className='feature-text'>Having seen this community through a past decade of development, Doshi has had customers forced to move out of their homes as the price of living continues to rise. He has also seen grocery stores like Fiesta, the building that is now occupied by Greentown Labs, close down.&nbsp;</p>
        <p className='feature-text'>From having local customers interview his job candidates to using the sale of coffee to fuel a microeconomy within Third Ward, Doshi said that his intentions have always been community-centered. His advice to any new developer is to do the same.&nbsp;</p>
        <p className='feature-text'>&ldquo;It is always really nice to have [good] intentions, but you have to show up,&rdquo; Doshi said. &ldquo;If your idea is to innovate &hellip; what is the program for people in the community? It could be small businesses, the elementary school [or] day care issues, you can choose.&rdquo;</p>
        <p className='feature-text'>The Doshi House serves as a gathering space for what Doshi describes as a culturally rich, dynamic and persistent community. His efforts so far have supported and empowered this community, a goal achieved through intentional effort and action.&nbsp;</p>
        <p className='feature-text'>&ldquo;I think there is significant power in places like the Ion,&rdquo; Doshi said. &ldquo;If the idea is impact, you have to show up with some programming.&rdquo;</p>
        <p><em>[10/05/2022 at 2:15 p.m.] This article was corrected. Fiesta's former building is now occupied by Greentown Labs, not the Ion.</em></p>
        <section className='feature-container link-container'>
            <Link to="/projects/innovation/meet-rices-newest-neighbors/ion-feature-bensaci"  className='back-features'>←Previous</Link>
            <Link to="/projects/innovation/meet-rices-newest-neighbors"  className='all-features'>All</Link>
            <Link to="/projects/innovation/meet-rices-newest-neighbors/ion-feature-edwards"  className='next-features'>Next→</Link>
        </section>
    </section>
    
    </>
  );
};

export default Rush;