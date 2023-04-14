import React, { useState } from 'react';
import { gatRandomPropertyFromObj } from '../../utils/get-random-property-from-object';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SHOW_DELAY_MS } from '../../const';


function RandomizeEachClick({svgIcons}: any) {
  const [eachIcon, setEachIcon] = useState(gatRandomPropertyFromObj(svgIcons));

  const randomizeHandle = () => {
    setTimeout(() => {
      setEachIcon(gatRandomPropertyFromObj(svgIcons));
    }, SHOW_DELAY_MS);
  }

  return (
    <>
      Each click with delay 3s set Random Icon :
      <FontAwesomeIcon icon={eachIcon} />
      <button onClick={randomizeHandle}>Click me to randomize icon</button>
    </>
  );
}

export default RandomizeEachClick;
