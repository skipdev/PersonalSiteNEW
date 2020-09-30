import React from 'react';
import './socialsbanner.css';

import FreshRelevanceLogo from '../../images/freshrelevance.png';
import RareloopLogo from '../../images/rareloop.png';
import ThreeSidedCubeLogo from '../../images/3sidedcube.jpg';

export const SocialsBanner = () => (
    <div className={'SocialsBanner'}>
        <div className={'SocialsBanner__flex_wrapper SocialsBanner__companies'}>
            <div className={'SocialsBanner__image_wrapper'}>
                <img src={FreshRelevanceLogo} alt={'Fresh Relevance Logo'}/>
            </div>
            <div className={'SocialsBanner__image_wrapper'}>
                <img src={RareloopLogo} alt={'Rareloop Logo'}/>
            </div>
            <div className={'SocialsBanner__image_wrapper'}>
                <img src={ThreeSidedCubeLogo} alt={'Three Sided Cube Logo'}/>
            </div>
        </div>
    </div>
);
