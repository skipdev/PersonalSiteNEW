import React from 'react';
import FreshRelevanceLogo from '../freshrelevance.png';
import RareloopLogo from '../rareloop.png';
import ThreeSidedCubeLogo from '../3sidedcube.jpg';
import './companies.css';

export const Companies = () => (
    <div className={'companies'}>
        <div>
            {FreshRelevanceLogo}
        </div>
        <div>
            {RareloopLogo}
        </div>
        <div>
            {ThreeSidedCubeLogo}
        </div>
    </div>
);
