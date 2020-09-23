import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './Button';
import './footer.css';
import {Navbar} from "./Navbar";
import {Logo} from "./Logo";

export const Footer = () => (
    <footer>
        <div>
            <Logo/>
        </div>
        <div>
            <Navbar/>
        </div>
    </footer>
);
