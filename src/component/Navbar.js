import * as React from "react"
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

export default function Navbar(props) {
  return (
    <>
    <div className="navbar">
      <h3>Password creator</h3>
      <div className="lock-logo">
        <FontAwesomeIcon icon={faLock} />
      </div>
    </div>
    </>
  )
}
