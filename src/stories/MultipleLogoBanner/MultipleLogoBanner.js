import React from 'react';
import './multiplelogobanner.css';
import PropTypes from "prop-types";

import FreshRelevanceLogo from '../../images/freshrelevance.png';
import RareloopLogo from '../../images/rareloop.png';
import ThreeSidedCubeLogo from '../../images/3sidedcube.jpg';

import ThorntonsLogo from '../../images/thorntons.png';
import LloydsPharmacyLogo from '../../images/lloydspharmacy.png';
import AnnSummersLogo from '../../images/annsummers.png';
import FatFaceLogo from '../../images/fatface.png';
import MoltonBrownLogo from '../../images/moltonbrown.png';
import RipCurlLogo from '../../images/ripcurl.png';
import WhiteStuffLogo from '../../images/whitestuff.png';

export const MultipleLogoBanner = ({type, ...props}) => (
    <div className={'MultipleLogoBanner'}>
        {type === 'companies' ?
            (<div className={'MultipleLogoBanner__flex_wrapper MultipleLogoBanner__companies'}>
                <div className={'MultipleLogoBanner__image_wrapper'}>
                    <img src={FreshRelevanceLogo} alt={'Fresh Relevance Logo'}/>
                </div>
                <div className={'MultipleLogoBanner__image_wrapper'}>
                    <img src={RareloopLogo} alt={'Rareloop Logo'}/>
                </div>
                <div className={'MultipleLogoBanner__image_wrapper'}>
                    <img src={ThreeSidedCubeLogo} alt={'Three Sided Cube Logo'}/>
                </div>
            </div>)
            :
            (<div className={'MultipleLogoBanner__flex_wrapper MultipleLogoBanner__brands'}>
                <div className={'MultipleLogoBanner__image_wrapper'}>
                    <img src={ThorntonsLogo} alt={'Thorntons Logo'}/>
                </div>
                <div className={'MultipleLogoBanner__image_wrapper'}>
                    <img src={LloydsPharmacyLogo} alt={'Lloyds Pharmacy Logo'}/>
                </div>
                <div className={'MultipleLogoBanner__image_wrapper'}>
                    <img src={AnnSummersLogo} alt={'Ann Summers Logo'}/>
                </div>
                <div className={'MultipleLogoBanner__image_wrapper'}>
                    <img src={FatFaceLogo} alt={'FatFace Logo'}/>
                </div>
                <div className={'MultipleLogoBanner__image_wrapper'}>
                    <img src={MoltonBrownLogo} alt={'Molton Brown Logo'}/>
                </div>
                <div className={'MultipleLogoBanner__image_wrapper'}>
                    <img src={RipCurlLogo} alt={'Rip Curl Logo'}/>
                </div>
                <div className={'MultipleLogoBanner__image_wrapper'}>
                    <img src={WhiteStuffLogo} alt={'White Stuff Logo'}/>
                </div>
            </div>)
        }
    </div>
);

MultipleLogoBanner.propTypes = {
    /**
     * Show companies or brands?
     */
    type: PropTypes.oneOf(['companies', 'brands'])
};

MultipleLogoBanner.defaultProps = {
    type: 'companies',
};

