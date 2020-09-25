import React from 'react';
import './homepage.css';
import {Navbar} from "../Navbar/Navbar";
import {Intro} from "../Intro/Intro";
import {MultipleLogoBanner} from "../MultipleLogoBanner/MultipleLogoBanner";
import {WhiteTransition} from "../WhiteTransition/WhiteTransition";
import {BlueBlock} from "../BlueBlock/BlueBlock";
import {Card} from "../Card/Card";
import {ThreeCards} from "../ThreeCards/ThreeCards";
import {SingleText} from "../SingleText/SingleText";
import {ReactComponent as ReactLogo} from '../../icons/react.svg';
import {ReactComponent as JSLogo} from '../../icons/javascript.svg';
import {ReactComponent as HTMLLogo} from '../../icons/html5.svg';

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
                        <SingleText color={'white'} text={'Specialities'} align={'right'} line={true}/>
                        <ThreeCards
                            card1={<Card color={'white'} icon={<ReactLogo/>} label={'React.js'} description={'1 year'}/>}
                            card2={<Card color={'white'} icon={<JSLogo/>} label={'JavaScript'} description={'4 years'}/>}
                            card3={<Card color={'white'} icon={<HTMLLogo/>} label={'HTML / CSS'} description={'5+ years'}/>}
                        />
                    </>
                }/>
            </div>
            <div className={'homepage__bluewhitetransition'}>
                <WhiteTransition upsideDown={true}/>
            </div>
        </div>
    );
};