
import './tooltip.css'

import React, {useMemo} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Tooltip({ icon, text }) {

    const [hover, setHover] = React.useState(false);
    const [clicked, setClicked] = React.useState(false);

    const visible = useMemo (()=> hover || clicked, [hover, clicked]);

    return(
        <div className="tooltip"
             onMouseEnter={() => setHover(true)}
             onMouseLeave={() => setHover(false)}
             onClick={()=> setClicked(!clicked)}>
            <FontAwesomeIcon color={visible ? "#6c6c6c" : "#aeacac" } icon={icon} />
            {visible && <div className="tooltip-text">{text}</div>}
        </div>
    )
}

export default Tooltip;