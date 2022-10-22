import '../../../../stylings/IonFeatures.css';
import { Link } from "react-router-dom";
import Lana from "../../../../images/ion-features/Lana_Edwards.jpg";

const Edwards = () => {
  return (
    <>
    <section className='feature-header'>
        <div class="header-content feature-container">
            <h1>Lana Edwards</h1>
            <img src={Lana} className="header-img"></img>
        </div>
    </section>
    <section className='feature-content feature-container'>
        <p id="author">By Hajera Naveed</p>
        <p id="date" className="gray">October 4, 2022</p>
        <p className='feature-text'>MacGregor Way was coined by the <a href="https://www.texasmonthly.com/being-texan/easy-street/" target="_blank" rel="noopener">Texas Monthly</a> in 1982 as the &ldquo;main street of the richest, stateliest Black neighborhood in Texas.&rdquo; Lana Edwards recalls that her husband, Albert &ldquo;Al&rdquo; Edwards, had a childhood dream of owning a house on this street.</p>
        <p className='feature-text'>When Al Edwards was young, his dad, a landscaper at the time, used to drive him down MacGregor to show him the houses, Lana said. After Al and Lana married in 1969, the two purchased a spacious two-story home on MacGregor.&nbsp;</p>
        <p className='feature-text'>&ldquo;He always said he was going to have one of those houses,&rdquo; Lana said. &ldquo;And so we ended up buying a house on MacGregor &hellip; that was his lifelong dream.&rdquo;</p>
        <p className='feature-text'>Lana worked as an educator for the Houston Independent School District for 37 years. Al was elected in 1978 to serve in the Texas Legislature as the representative for House District 146.</p>
        <p className='feature-text'>Al Edwards, who passed in 2020, served in the legislature for more than 30 years and is best remembered for authoring the <a href="https://lrl.texas.gov/legis/billSearch/BillDetails.cfm?legSession=66-0&amp;billTypeDetail=HB&amp;billnumberdetail=1016" target="_blank" rel="noopener">bill</a> that made Juneteenth a state holiday in 1979. He did not live to see Juneteenth <a href="https://www.whitehouse.gov/briefing-room/presidential-actions/2021/06/18/a-proclamation-on-juneteenth-day-of-observance-2021/" target="_blank" rel="noopener">become</a> a federal holiday in 2021.</p>
        <p className='feature-text'>&ldquo;Al sponsored the bill, and he worked hard to get it passed, because there [were] some people that did not feel that they wanted to get it passed,&rdquo; Lana said. &ldquo;Al wasn&rsquo;t actually here to see it [become a federal holiday]. He&rsquo;s looking down and happy, [and] I am sure they celebrate it wherever he is.&rdquo;</p>
        <p className='feature-text'>Lana has now been living in Third Ward for more than 50 years. She is on the board of the African American Library at the Gregory School and regularly attends &ldquo;elder meetings&rdquo; at the SHAPE community center. As an educator, Lana created close bonds with community members.</p>
        <p className='feature-text'>&ldquo;I love the neighborhood, I love the community,&rdquo; Lana said. &ldquo;But Al loved it first.&rdquo;</p>
        <p className='feature-text'>Lana said she has seen how the people who left Third Ward early on in her life have wanted to come back, now viewing this area as a &ldquo;goldmine.&rdquo;</p>
        <p className='feature-text'>&ldquo;Every day, I get calls from people wanting to know if my property is for sale. I don&rsquo;t know why if they don&rsquo;t see a sign on [the property], why would they even call me to ask,&rdquo; Lana said. &ldquo;Many people are trying to come back, because they realize what a goldmine this [area] really is.&rdquo;</p>
        <section className='feature-container link-container'>
            <Link to="/projects/innovation/meet-rices-newest-neighbors/ion-feature-doshi"  className='back-features'>←Previous</Link>
            <Link to="/projects/innovation/meet-rices-newest-neighbors"  className='all-features'>All</Link>
            <Link to="/projects/innovation/meet-rices-newest-neighbors/ion-feature-freeman"  className='next-features'>Next→</Link>
        </section>
    </section>
    
    </>
  );
};

export default Edwards;