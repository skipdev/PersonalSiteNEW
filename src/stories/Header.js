import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './Button';
import './header.css';
import {Navbar} from "./Navbar";
import {Logo} from "./Logo";

export const Header = () => (
    <header>
        <div>
            <Logo/>
        </div>
        <div>
            <Navbar/>
        </div>
    </header>
);
