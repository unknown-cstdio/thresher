import React, {useEffect, useState} from 'react';
import Doshi from '../../../../components/ion/features/feature-articles/Doshi';
import '../../../../stylings/IonFeatures.css';


function features() {
  // React.useEffect(() => {
  //   document.title = "Deepak Doshi — meet Rice's newest neighbors";
  // });
  
  return (
    <div className='features'>
      <Doshi/>
    </div>
  );
}

export default features;
