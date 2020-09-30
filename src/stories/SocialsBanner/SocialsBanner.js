import React from 'react';
import './socialsbanner.css';
import {ReactComponent as Twitter} from '../../icons/twitter.svg';
import {ReactComponent as Github} from '../../icons/github.svg';
import {ReactComponent as Behance} from '../../icons/behance.svg';
import {ReactComponent as Messenger} from '../../icons/messenger.svg';
// email
// linkedin

export const SocialsBanner = () => (
    <div className={'SocialsBanner'}>
        <div className={'SocialsBanner__flex_wrapper SocialsBanner__companies'}>
            <div className={'SocialsBanner__image_wrapper'}>
                <Github/>
            </div>
            <div className={'SocialsBanner__image_wrapper'}>
                <Behance/>
            </div>
            <div className={'SocialsBanner__image_wrapper'}>
                <Twitter/>
            </div>
            <div className={'SocialsBanner__image_wrapper'}>
                <Messenger/>
            </div>
            <div className={'SocialsBanner__image_wrapper'}>
                <Messenger/>
            </div>
        </div>
    </div>
);
