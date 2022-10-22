import React, {useEffect, useState} from 'react';
import Freeman from '../../../../components/ion/features/feature-articles/Freeman';
import '../../../../stylings/IonFeatures.css';


function features() {
  // React.useEffect(() => {
  //   document.title = "Clarice Freeman — meet Rice's newest neighbors";
  // });

  return (
    <div className='features'>
      <Freeman/>
    </div>
  );
}

export default features;
