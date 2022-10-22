import React, {useEffect, useState} from 'react';
import Jones from '../../../../components/ion/features/feature-articles/Jones';
import '../../../../stylings/IonFeatures.css';


function features() {
  // React.useEffect(() => {
  //   document.title = "Benard Jones — meet Rice's newest neighbors";
  // });

  return (
    <div className='features'>
      <Jones/>
    </div>
  );
}

export default features;
