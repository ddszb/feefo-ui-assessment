import React from 'react';

import './account-overview.css';
import ContactCard from "../contact-card/contact-card";
import SalesBox from "../sales-box/sales-box";

export const AccountOverview = ({data}) => {
    return (
        <div className="account-overview">
            <div className="header">
                <div className="title">Account Overview</div>
                { data && <ContactCard name={data.supportContact.name} email={data.supportContact.email}/> }
            </div>
            <SalesBox data={data ? data.salesOverview : null}/>
        </div>
    );
}

export default AccountOverview;