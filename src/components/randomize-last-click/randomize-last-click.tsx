import React, { useEffect, useState } from 'react';
import { gatRandomPropertyFromObj } from '../../utils/get-random-property-from-object';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SHOW_DELAY_MS } from '../../const';


function RandomizeLastClick({svgIcons}: any) {
  const [onlyLastIcon, setOnlyLastIcon] = useState(gatRandomPropertyFromObj(svgIcons));
  const [onlyLastIconClickCount, setOnlyLastIconClickCount] = useState(0)

  useEffect(() => {
    if (onlyLastIconClickCount === 0) {return}
    const timeout = setTimeout(() => {
      setOnlyLastIcon(gatRandomPropertyFromObj(svgIcons));
    }, SHOW_DELAY_MS);

    return () => clearTimeout(timeout);
  }, [onlyLastIconClickCount]);

  const buttonClickHandle = () => {
    setOnlyLastIconClickCount((prev) => prev + 1)
  } 

  return (
    <>
      Only last click with delay 3s set Random Icon :
      <FontAwesomeIcon icon={onlyLastIcon} />
      <button onClick={buttonClickHandle}>{`Click me to randomize icon (clicks: ${onlyLastIconClickCount})`}</button>
    </>
  );
}

export default RandomizeLastClick;
