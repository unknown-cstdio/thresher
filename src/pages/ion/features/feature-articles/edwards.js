import React, {useEffect, useState} from 'react';
import Edwards from '../../../../components/ion/features/feature-articles/Edwards';
import '../../../../stylings/IonFeatures.css';


function features() {

  // React.useEffect(() => {
  //   document.title = "Lana Edwards — meet Rice's newest neighbors";
  // });

  return (
    <div className='features'>
      <Edwards/>
    </div>
  );
}

export default features;
