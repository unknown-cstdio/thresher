import React, {useEffect, useState} from 'react';
import Banner from '../../../components/ion/features/Banner';
import Portraits from '../../../components/ion/features/Portraits';
import '../../../stylings/IonFeatures.css';


function features() {
  // React.useEffect(() => {
  //   document.title = "Meet Rice's newest neighbors";
  // });

  return (
    <div className='features'>
      <Banner/>
      <Portraits/>
      <div id="author" className='gray'>Design by Michael Mitchell.</div>
    </div>

  );
}

export default features;
