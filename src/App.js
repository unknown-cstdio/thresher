import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Homepage from './pages/Homepage';
// import Dummypage from './pages/Dummypage';
// import InteractiveTemplate from './pages/InteractiveStory';
// import Standardpage from './pages/StandardTemplate';
import NavBar from './components/NavBar';
import "./stylings/styleAH.css";
import "./stylings/styleJP.css";
import "./stylings/styleMap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import ScrollStory from './pages/ScrollStory';
// import InteractiveStory from './pages/InteractiveStory';
import Footer from './components/footer';
// import Multimediapage from './pages/MultimediaTemplate';
import MapPage from './pages/Data/MapPage';
import IonHome from './pages/innovation/IonHome';
import IonNews from './pages/innovation/InnovationPage';
import IonFeatures from './pages/ion/features/IonFeatures';
import Bensaci from './pages/ion/features/feature-articles/bensaci';
import Doshi from './pages/ion/features/feature-articles/doshi';
import Edwards from './pages/ion/features/feature-articles/edwards';
import Freeman from './pages/ion/features/feature-articles/freeman';
import Jones from './pages/ion/features/feature-articles/jones';
import Rush from './pages/ion/features/feature-articles/rush';
import Vallie from './pages/ion/features/feature-articles/vallie';

import AandEpage from './pages/ArtsEntertainment'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Homepage />}> </Route>
        {/* <Route path='/stories' element={<Dummypage />}></Route> */}
        {/* <Route path='/scroll' element={<ScrollStory />}></Route> */}
        {/* <Route path='/interactive' element={<InteractiveStory />}></Route> */}
        {/* <Route path='/multimediastory' element={<Multimediapage/>}></Route> */}
        {/* <Route path='/dummystory' element={<Dummypage/>}></Route> */}
        {/* <Route path='/standardstory' element={<Standardpage/>}></Route> */}
        <Route path='/projects/innovation' element={<IonHome/>}></Route>
        <Route path='/projects/innovation/rices-ion-settles-into-third-ward' element={<IonNews/>}></Route>
        <Route path='/projects/innovation/meet-rices-newest-neighbors' element={<IonFeatures/>}></Route>
        <Route path='/projects/innovation/meet-rices-newest-neighbors/ion-feature-bensaci' element={<Bensaci/>}></Route>
        <Route path='/projects/innovation/meet-rices-newest-neighbors/ion-feature-doshi' element={<Doshi/>}></Route>
        <Route path='/projects/innovation/meet-rices-newest-neighbors/ion-feature-edwards' element={<Edwards/>}></Route>
        <Route path='/projects/innovation/meet-rices-newest-neighbors/ion-feature-freeman' element={<Freeman/>}></Route>
        <Route path='/projects/innovation/meet-rices-newest-neighbors/ion-feature-jones' element={<Jones/>}></Route>
        <Route path='/projects/innovation/meet-rices-newest-neighbors/ion-feature-rush' element={<Rush/>}></Route>
        <Route path='/projects/innovation/meet-rices-newest-neighbors/ion-feature-vallie' element={<Vallie/>}></Route>
        <Route path='/projects/innovation/meet-rices-newest-neighbors/art-and-integration-houstons-tradition-of-art-challenging-the-paradigm' element={<AandEpage/>}></Route>
        <Route path='/projects/innovation/the-data-are-unclear-on-ions-gentrification' element={<MapPage/>}></Route>
      </Routes>
      <div className='footer'>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
