import React from 'react';
import './homepage.css';
import {Navbar} from "../Navbar/Navbar";
import {Intro} from "../Intro/Intro";
import {MultipleLogoBanner} from "../MultipleLogoBanner/MultipleLogoBanner";
import {WhiteTransition} from "../WhiteTransition/WhiteTransition";
import {BlueBlock} from "../BlueBlock/BlueBlock";
import {Card} from "../Card/Card";
import {ThreeCards} from "../ThreeCards/ThreeCards";
import {ReactComponent as ReactLogo} from '../../icons/react.svg';
import {ReactComponent as JSLogo} from '../../icons/javascript.svg';
import {ReactComponent as HTMLLogo} from '../../icons/html5.svg';
import {ImgWithText} from "../ImgWithText/ImgWithText";
import ProfilePic from "../../images/profile.jpg";
import {Button} from "../Button/Button";
import {SocialsBanner} from "../SocialsBanner/SocialsBanner";

export const Homepage = () => {
    return (
        <div
            className={['homepage'].join(' ')}
        >
            <div className={'homepage__navbar'}>
                <Navbar/>
            </div>
            <div className={'homepage__intro'}>
                <Intro/>
            </div>
            <div className={'homepage__mlb'}>
                <MultipleLogoBanner type={'brands'}/>
            </div>
            <div className={'homepage__whitebluetransition'}>
                <WhiteTransition/>
            </div>
            <div className={'homepage__blueblock'}>
                <BlueBlock children={
                    <>
                        <ThreeCards
                            card1={<Card
                                color={'white'}
                                icon={<ReactLogo/>}
                                label={'React.js'}
                                description={'1 year'}/>}
                            card2={<Card
                                color={'white'}
                                icon={<JSLogo/>}
                                label={'JavaScript'}
                                description={'4 years'}/>}
                            card3={<Card
                                color={'white'}
                                icon={<HTMLLogo/>}
                                label={'HTML / CSS'}
                                description={'5+ years'}/>}
                        />
                    </>
                }/>
            </div>
            <div className={'homepage__bluewhitetransition'}>
                <WhiteTransition upsideDown={true}/>
            </div>
            <div className={'homepage__aboutme'}>
                <ImgWithText
                    txtColor={'white'}
                    imgAlign={'left'}
                    img={<img src={ProfilePic} alt={'random'}/>}
                    text={<div>
                        <span className={'medium-text'}>About Me</span>
                        <br/>
                        <span className={'xxs-text'}>Find more on the about me page!</span>
                        <Button label={'About Me'} type={"secondary"}/>
                    </div>}
                />
            </div>
            <div className={'homepage__socialbanner'}>
                <SocialsBanner/>
            </div>
            <div className={'homepage__transition2'}/>
        </div>
    );
};