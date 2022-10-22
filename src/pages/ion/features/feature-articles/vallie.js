import React, {useEffect, useState} from 'react';
import Vallie from '../../../../components/ion/features/feature-articles/Vallie';
import '../../../../stylings/IonFeatures.css';


function features() {
  // React.useEffect(() => {
  //   document.title = "Brendalyn Vallie — meet Rice's newest neighbors";
  // });

  return (
    <div className='features'>
      <Vallie/>
    </div>
  );
}

export default features;
