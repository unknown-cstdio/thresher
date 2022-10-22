import '../../../../stylings/IonFeatures.css';
import { Link } from "react-router-dom";
import Benard from "../../../../images/ion-features/Benard.jpg";

const Jones = () => {
  return (
    <>
    <section className='feature-header'>
        <div class="header-content feature-container">
            <h1>Benard Jones</h1>
            <img src={Benard} className="header-img"></img>
        </div>
    </section>
    <section className='feature-content feature-container'>
        <p id="author">By Hajera Naveed</p>
        <p id="date" className="gray">October 4, 2022</p>
        <p className='feature-text'>Benard Jones moved to Third Ward from Mississippi when he was seven years old. Now 67, Jones has lived a majority of his life in this community.&nbsp;</p>
        <p className='feature-text'>Jones said he remembers his childhood being full of laughter and fun. He said he recalls visiting Miller Outdoor Theatre, laying on the grass in Hermann Park, riding horses and going to the Houston Zoo with his friends from the community.</p>
        <p className='feature-text'>&ldquo;Everybody had a house. I could play with my neighbors here and there. I did mingle and socialize with different cultures and peoples too,&rdquo; Jones said. &ldquo;All kinds of stuff I did. It was beautiful. Really beautiful.&rdquo;&nbsp;</p>
        <p className='feature-text'>However, over the past 60 years of his living here, Jones said his beloved childhood community has changed. Though Jones, who worked as a Harris County mechanic for 22 years, was able to purchase his house, he said he has seen many people forced to leave the community because of rising housing costs.&nbsp;</p>
        <p className='feature-text'>&ldquo;Most of the people are moving out, and everybody&rsquo;s moving in with the condos, and their property values are going up and up. They are really developing in the community,&rdquo; Jones said. &ldquo;I like the development myself, but I want to make sure that everybody can afford it. The condos are [very expensive], and the poor people don&rsquo;t have that type of money.&rdquo;</p>
        <p className='feature-text'>Jones said he finds strength and support within the community and especially values its diversity. He said he began attending &ldquo;elder meetings&rdquo; at the <a href="https://shape.org/eiw" target="_blank" rel="noopener">SHAPE</a> community center, where he feels immense support from other elders within the community.&nbsp;</p>
        <p className='feature-text'>&ldquo;This community is a support system where we share the knowledge and try to guide [each other] in the right direction, learn as much as you can and try to help someone else along the way,&rdquo; Jones said.</p>
        <p className='feature-text'>As new residents move into Third Ward, many of them white and college-educated, Jones said the theme of unity within the community must persist.&nbsp;</p>
        <p className='feature-text'>&ldquo;You are not better than me, and I am not better than you,&rdquo; Jones said. &ldquo;Just because you got more money than me that doesn&rsquo;t mean you are above [me] because we are all humans, one nation under God, and that&rsquo;s what it should be. Everyone should get together, love each other, care for each other and look out for each other.&rdquo;</p>
        <section className='feature-container link-container'>
            <Link to="/projects/innovation/meet-rices-newest-neighbors/ion-feature-freeman"  className='back-features'>←Previous</Link>
            <Link to="/projects/innovation/meet-rices-newest-neighbors"  className='all-features'>All</Link>
            <Link to="/projects/innovation/meet-rices-newest-neighbors/ion-feature-rush"  className='next-features'>Next→</Link>
        </section>
    </section>
    
    </>
  );
};

export default Jones;