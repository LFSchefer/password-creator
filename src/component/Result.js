import * as React from "react"
import "./Result.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faCheck } from '@fortawesome/free-solid-svg-icons';

function Result(props) {

  return (
    <>
         {props.password.ready && <div className="password">
        <h3 id="final">{props.password.value}</h3>
        {!props.isCopyed &&
        <FontAwesomeIcon className="copy" icon={faCopy} size="xl" onClick={props.handleClick} />
        }
        { props.isCopyed &&
        <FontAwesomeIcon className="copyed" icon={faCheck} size="xl" style={{color: "#3ae524"}} />
        }
      </div>}
    </>
  )
}

export { Result };
