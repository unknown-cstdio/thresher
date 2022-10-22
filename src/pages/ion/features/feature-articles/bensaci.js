import React, {useEffect, useState} from 'react';
import Bensaci from '../../../../components/ion/features/feature-articles/Bensaci';
import '../../../../stylings/IonFeatures.css';


function features() {
  // React.useEffect(() => {
  //   document.title = "Marie Bensaci — meet Rice's newest neighbors";
  // });

  return (
    <div className='features'>
      <Bensaci/>
    </div>
  );
}

export default features;
