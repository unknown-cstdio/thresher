import React, {useEffect, useState} from 'react';
import Rush from '../../../../components/ion/features/feature-articles/Rush';
import '../../../../stylings/IonFeatures.css';


function features() {
  // React.useEffect(() => {
  //   document.title = "Frank Rush — meet Rice's newest neighbors";
  // });

  return (
    <div className='features'>
      <Rush/>
    </div>
  );
}

export default features;
