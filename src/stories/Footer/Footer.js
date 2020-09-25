import React from 'react';
import './footer.css';
import {Navbar} from "../Navbar/Navbar";
import {Logo} from "../Logo/Logo";

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
