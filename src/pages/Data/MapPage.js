import React, {useState, useEffect} from 'react'
import DistrictRegionList from '../../components/dataStory/DistrictRegionList';
import { NewEmail, EmptyMid } from '../../components/midStory';
// import BarGraph from '../../components/dataStory/BarGraph';
import { FormGroup } from 'react-bootstrap';
import housing_structure from "../../images/housing_structure.png";
import susceptibility from "../../images/susceptibility.png";
import hv from "../../images/hv.png";

import MapSelect from '../../components/dataStory/MapSelect';

const datas = [
    // [
    //     {
    //         "model_name":"Harris County",
    //         "field1":0.1188076198,
    //         "field2":0.1310660643,
    //         "field3":0.1031789421
    //     },
    //     {
    //         "model_name":"3124",
    //         "field1":0.05529739777,
    //         "field2":0.06833333333,
    //         "field3":0.2357422969
    //     },
    //     {
    //         "model_name":"3123",
    //         "field1":0.08081363386,
    //         "field2":0.189059501,
    //         "field3":1.339450559
    //     },
    //     {
    //         "model_name":"3122",
    //         "field1":0.01388888889,
    //         "field2":0.07255936675,
    //         "field3":4.224274406
    //     }
    // ],
    [
        {
            "model_name":"Harris County",
            "field1":0.3167551273,
            "field2":0.2898665537,
            "field3":-0.08488757188
        },
        {
            "model_name":"3124",
            "field1":0.02276951673,
            "field2":0.03916666667,
            "field3":0.7201360544
        },
        {
            "model_name":"3123",
            "field1":0.06706981858,
            "field2":0.1401151631,
            "field3":1.089094113
        },
        {
            "model_name":"3122",
            "field1":0.02240143369,
            "field2":0.02704485488,
            "field3":0.2072823219
        }
    ],
    [
        {
            "model_name":"Harris County",
            "field1":54457,
            "field2":63022,
            "field3":0.1572800558
        },
        {
            "model_name":"3124",
            "field1":19330,
            "field2":19292,
            "field3":-0.001965856182
        },
        {
            "model_name":"3123",
            "field1":23424,
            "field2":45542,
            "field3":0.9442452186
        },
        {
            "model_name":"3122",
            "field1":21791,
            "field2":25909,
            "field3":0.1889771006
        }
    ],
    [
        {
            "model_name":"Harris County",
            "field1":906,
            "field2":1115,
            "field3":0.2306843267
        },
        {
            "model_name":"3124",
            "field1":714,
            "field2":719,
            "field3":0.00700280112
        },
        {
            "model_name":"3123",
            "field1":689,
            "field2":838,
            "field3":0.2162554427
        },
        {
            "model_name":"3122",
            "field1":646,
            "field2":781,
            "field3":0.2089783282
        }
    ],
    [
        {
            "model_name":"Harris County",
            "field1":137800,
            "field2":189400,
            "field3":0.3744557329
        },
        {
            "model_name":"3124",
            "field1":79000,
            "field2":124300,
            "field3":0.5734177215
        },
        {
            "model_name":"3123",
            "field1":122000,
            "field2":340400,
            "field3":1.790163934
        },
        {
            "model_name":"3122",
            "field1":80600,
            "field2":160000,
            "field3":0.9851116625
        }
    ]
]

const dataLabels = [//"Bachelor's Degrees", 
                    "Non-Hispanic White Population", "Median Household Income", "Gross Rent", "Home Value"];


var i = 0;
var label = "";

export default function MapPage() {
  const [data, setData] = useState([]);
  const [statNum1, setStatNum1] = useState(1);
  const [statNum2, setStatNum2] = useState(4);

    useEffect(() => {
        changeDataNext()
    }, []);

    useEffect(() => {
        changeDataLast();
    }, []);


    const changeDataNext = () => {
        i++;
        if(i >= datas.length) i = 0;
        setData(datas[i]);
        label = dataLabels[i];
    }

    const changeDataLast = () => {
        i--;
        if(i <= 0) i = datas.length-1;
        setData(datas[i]);
        label = dataLabels[i];
    }

    var previous = "<";
    var next = ">";

  return (
    <div className='d-flex justify-content-center py-5 lora'>
      <div style={{width: "75%"}}>
        <div id="main story body">
          <div>
            <div>Innovation Data</div>
            <h1 style={{fontSize: "36pt"}}>The data is unclear on Ion’s gentrification impact</h1>
            <div className='row pt-2'>
              <div className='col-12 col-sm-2'>by <b>Victor Huang</b></div>
            <p id="date" className="gray">October 4, 2022</p>
            </div>
          </div>

          <div className='py-5 fs-5 pt-3 row justify-content-center'>
            <div className='my-3'>
            Third Ward is one of Houston’s most diverse neighborhoods. With its Black population standing at 65%, Third Ward is home to Houston’s many Black communities and holds a rich history and cultural legacy. It was the birthplace of Houston’s civil rights movements in the 1960s and the home to some of Houston’s most beloved music legends.
            </div>
            <div className='my-3'>
            Surrounded by universities and close to downtown, Third Ward has drawn attention from investors over the last two decades. It has been gradually gentrifying since the early 2000s, according to <a href="https://kinder.rice.edu/research/re-taking-stock-understanding-how-trends-housing-stock-and-gentrification-are-connected" target="_blank" rel="noopener">studies</a> from Rice&rsquo;s Kinder Institute for Urban Research, as shown by both their sociodemographic and housing changes.
            </div>
            <h3 className='mt-5 fw-bold'>What is gentrification?</h3>
            <div className='my-3'>
            The Kinder Institute <a href="https://kinder.rice.edu/research/neighborhood-gentrification-across-harris-county-1990-2016" target="_blank" rel="noopener">defines</a> gentrification as &ldquo;a process of neighborhood change characterized by migration of middle- and upper-income groups into disinvested urban neighborhoods, resulting in a loss of affordable housing and a transformation of the social character of a neighborhood.&rdquo;&nbsp;
            </div>
            <div className='my-3'>
            Notable examples include San Francisco and Oakland, Calif., where tens of thousands of racial and economic <a href="http://www.bayareacensus.ca.gov/counties/SanFranciscoCounty.htm" target="_blank" rel="noopener">minorities have left the city</a> in the last 20 years. Houston is also no stranger to gentrification. According to <a href="https://kinder.rice.edu/urbanedge/big-texas-cities-are-rapidly-gentrifying-none-fast-houston" target="_blank" rel="noopener">Kinder&rsquo;s study</a>, Houston is Texas&rsquo; fastest gentrifying city.
            </div>
            <div className='my-3'>
            Due to its housing structures and socioeconomic diversity, Third Ward is an area of Houston among the most <a href="https://kinder.rice.edu/research/neighborhood-gentrification-across-harris-county-1990-2016" target="_blank" rel="noopener">vulnerable</a> to gentrification.&nbsp; 
            </div>

            <div className='py-2 col-12 col-md-9'>
                <img src={housing_structure} width="100%"></img>
                <div className='text-center text-secondary' style={{fontSize: "12pt"}}>Third Ward is mostly comprised of detached single family homes, according to a (<a target={"_blank"} href='https://kinder.rice.edu/research/re-taking-stock-understanding-how-trends-housing-stock-and-gentrification-are-connected'>2021 Kinder Institute study</a>). Graphic courtesy of the Kinder Institute.</div>
            </div>

            <div className='my-3'>
            In a <a href="https://kinder.rice.edu/research/neighborhood-gentrification-across-harris-county-1990-2016" target="_blank" rel="noopener">2016 study</a> conducted by the Kinder Institute, two of the Third Ward&rsquo;s three subdivision tracts rank first and second in Houston on the &ldquo;susceptibility index,&rdquo; which is calculated using data from categories such as sociodemographic, housing, transportation and location.
            </div>

            <div className='py-2 col-12 col-md-9'>
                <img src={susceptibility} width="100%"></img>
                <div className='text-center text-secondary' style={{fontSize: "12pt"}}>Two of Third Ward's three subdivision tracts ranked first and second in Houston on the Kinder Institute's 2016 (<a target={"_blank"} href="https://kinder.rice.edu/research/neighborhood-gentrification-across-harris-county-1990-2016">gentrification susceptibility index</a>).</div>
            </div>

            <div className='my-3 mt-5'>
            <a href="https://www.ricethresher.org/article/2020/01/students-demand-community-benefits-agreement-for-ion" target="_blank" rel="noopener">Activists have long expressed concerns</a> about the Ion District exacerbating gentrification. Housing and sociodemographic data do not clearly show gentrification occurring, but there are some threatening patterns.
            </div>

            <div className='my-3'>
            The Kinder Institute&rsquo;s criteria for gentrification consist of two main aspects: sociodemographic change and investment change.
            </div>

            <h3 className='mt-5 mb-2 fw-bold'>Sociodemographic change</h3>

             <div className='py-3'>
                <div className='my-3 mb-5'>
                    <MapSelect setStat = {setStatNum1} type={1}/>
                </div>
                
                <div className='row mb-3'>
                    <div className='col-12 col-xl-6 lg-view' style={{height: "70vh"}}>
                        <div>Year 2015</div>
                        <DistrictRegionList year ={15} statNum = {statNum1} small={false} id = "1"/>
                    </div>
                    <div className='col-12 col-xl-6 sm-lg-view' style={{height: "45vh"}}>
                        <div>Year 2015</div>
                        <DistrictRegionList year ={15} statNum = {statNum1} small = {true} id = "2"/>
                    </div>
                    <div className='col-12 col-xl-6 lg-view' style={{height: "70vh"}}>
                        <div>Year 2020</div>
                        <DistrictRegionList year ={20} statNum = {statNum1} small={false} id = "3"/>
                    </div>
                    <div className='col-12 col-xl-6 sm-lg-view' style={{height: "45vh"}}>
                        <div>Year 2020</div>
                        <DistrictRegionList year ={20} statNum = {statNum1} small = {true} id = "4"/>
                    </div>
                </div>
                <div className='text-center text-secondary' style={{fontSize: "12pt"}}>Darker colors indicate a higher value. Third Ward census tracts are outlined in red.</div>
            </div> 

            <div className='my-3'>
            From 2015 to 2020, two census tracts inside Third Ward doubled their non-Hispanic white population, and all three tracts&rsquo; population with bachelor degrees grew at least two times faster than Harris County&rsquo;s average.&nbsp; On the other hand, Third Ward&rsquo;s median household income growth barely exceeds Harris County&rsquo;s average. According to Jacob Wegmann, a professor of urban planning at the University of Texas at Austin, areas with large student populations can appear to be worse off economically than they are in reality.&nbsp;
            </div>

            <div className='my-3'>
            &ldquo;Sometimes neighborhoods that have a lot of college students can appear to have high poverty rates,&rdquo; Wegmann said. &ldquo;There are a lot of young people who maybe have part time jobs, but they are full or part time students. They are people who 20 years from now will be making a lot of money and are getting an education, but they temporarily appear to be poor.&rdquo;
            </div>

            <div className='my-3'>
            Derek Hyra, the founding director of American University&rsquo;s Metropolitan Policy Center, said that an increase in college-educated population is an indicator of gentrification.
            </div>

            <div className='my-3'>
            &ldquo;From my own eyes and experience in large cities like New York, Chicago &hellip; seeing Third Ward, [I believe] gentrification is occurring at some places,&rdquo; Hyra said. &ldquo;You can see luxury restaurants in Third Ward that&rsquo;s relocated from places like New Orleans. There&rsquo;s a wealth inflow.&rdquo;
            </div>

            <h3 className='mt-5 mb-2 fw-bold'>Investment change</h3>

            <div className='py-3'>
                <div className='my-3 mb-5'>
                    <MapSelect setStat = {setStatNum2} type = {2}/>
                </div>
                
                <div className='row mb-3'>
                    <div className='col-12 col-xl-6 lg-view' style={{height: "70vh"}}>
                        <div>Year 2015</div>
                        <DistrictRegionList year ={15} statNum = {statNum2} small={false} id = "5"/>
                    </div>
                    <div className='col-12 col-xl-6 sm-lg-view'style={{height: "45vh"}}>
                        <div>Year 2015</div>
                        <DistrictRegionList year ={15} statNum = {statNum2} small={true} id = "6"/>
                    </div>
                    <div className='col-12 col-xl-6 sm-lg-view'style={{height: "45vh"}}>
                        <div>Year 2020</div>
                        <DistrictRegionList year ={20} statNum = {statNum2} small={true} id = "7"/>
                    </div>
                    <div className='col-12 col-xl-6 lg-view' style={{height: "70vh"}}>
                        <div>Year 2020</div>
                        <DistrictRegionList year ={20} statNum = {statNum2} small={false} id = "8"/>
                    </div>
                </div>
                <div className='text-center text-secondary' style={{fontSize: "12pt"}}>Darker colors indicate a higher value. Third Ward census tracts are outlined in red.</div>
            </div>

           <NewEmail/>

            <div className='my-3'>
            Third Ward&rsquo;s median gross rent remained essentially unchanged from 2015 to 2020. The stagnant rent could be explained by the housing structure of Third Ward, according to Robert Silverman, a professor of urban and regional planning at the State University of New York at Buffalo.
            </div>

            <div className='my-3'>
            &nbsp;&ldquo;It looks like there is a shrinking number of rental properties,&rdquo; Silverman said. &ldquo;Some may be subsidized units or built as affordable. This is also suggested by the rent as percent of household income data.&rdquo;
            </div>

            <div className='my-3'>
            However, the median home value in all three Third Ward census tracts has increased by over 50% since 2015, higher than Harris County&rsquo;s increase of 37% in that time. This could be suggestive of a future rent increase once the market adjusts the rent to meet the demand, Silverman said.&nbsp;
            </div>

            <div className='my-3'>
            &ldquo;You may see rents go up if new market rate units are added to the area,&rdquo; Silverman said. &ldquo;There is also a pattern where the remaining rental units declined in numbers while the owner-occupied units increased slightly in number.&rdquo;
            </div>

            <h3 className='mt-5 mb-2 fw-bold'>Third Ward’s history of gentrification</h3>

            <div className='py-2 col-12 col-md-9'>
                <img src={hv} width="100%"></img>
                <div className='text-center text-secondary' style={{fontSize: "12pt"}}>Home value increased across Harris County, but especially so in census tract 3123.</div>
            </div>
            
            {/* <div className='barGraph py-3'>
              <center>
                <BarGraph width={600} height={400} data={data} label={label} />
                
                <div className='d-flex justify-content-center align-items-center'>
                    <button style={{border: 0, padding: 10, margin: 10}} onClick={changeDataLast}> {previous} </button>
                    <p className='pt-3 px-2'>  </p>
                  <button style={{border: 0, padding: 10, margin: 10}} onClick={changeDataNext}> {next} </button>
                  </div>
                  <div className='text-center text-secondary' style={{fontSize: "12pt"}}>3124, 3123 and 3122 are Third Ward's census tracts. Click on the arrows to see more graphs.</div>
                
              </center>
            </div> */}

            <div className='my-3'>
            Recent developments are hardly Third Ward&rsquo;s first experience with socioeconomic changes in recent memory. The area underwent a change from 2000 to 2010, losing over 30% of its population due to disinvestment and aging infrastructure, <a href="https://kinder.rice.edu/research/re-taking-stock-understanding-how-trends-housing-stock-and-gentrification-are-connected" target="_blank" rel="noopener">according to Kinder Institute</a>.
            </div>
            <div className='my-3'>
            In the 2010s, Third Ward started garnering investor interest, and its housing structure changed fundamentally. The newly built houses, predominantly in the forms of single-family houses or townhouses, are gradually replacing the multi-family households originally in the area.&nbsp;
            </div>
            <div className='my-3'>
            During this time, the white population almost tripled, and average household income <a href="https://data.census.gov/cedsci/all?q=Harris%20County" target="_blank" rel="noopener">increased by a margin of 60%</a>. By 2016, when the Ion District was still in conception, Third Ward already had an average income close to Houston&rsquo;s average.
            </div>
            <div className='my-3'>
            While the effects of Ion District are still to be determined, Silverman expressed concerns.&nbsp;
            </div>

            <div className='my-3'>
            &ldquo;These types of economic development projects tend to attract other market-rate residential development in surrounding areas, usually in the form of market rate rental properties to attract workers in the new development,&rdquo; Silverman said. &ldquo;With a relatively decimated population in the area, who are probably older homeowners and renters, they may not be able to muster much political pressure to maintain affordable housing in the area, let alone build more to attract back a more economically diverse population.&rdquo;
            </div>

          </div>
          <div className='d-flex justify-content-end'> <div>Graphics and design by Alexia Huang, Jinyu Pei and Christina Wong</div></div>
          
        </div>
        
      </div>
    </div>
  );
}
