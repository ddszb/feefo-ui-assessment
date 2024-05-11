import './contact-card.css'
import React, {useState} from "react";
import {faEnvelope, faEnvelopeOpenText} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function ContactCard({name, email} ) {
    const [hover, setHover] = useState(false);

    return (
    <div className="contact-card">
        <div className="contact-title">YOUR FEEFO SUPPORT CONTACT</div>
        <div className="contact-info-row">
            <div className="yellow-square">S</div>
            <div className="support">
                <span>Support</span>
                <div className="contact-info">
                    <FontAwesomeIcon className="mail-icon" icon={hover ? faEnvelopeOpenText : faEnvelope} />
                    <a href={`mailto:${email}`}
                       onMouseEnter={()=> setHover(true)}
                       onMouseLeave={()=> setHover(false)}>{email}
                    </a>
                    <span>
                        {name}
                    </span>
                </div>
            </div>
        </div>
    </div>
    );
}

export default ContactCard;
