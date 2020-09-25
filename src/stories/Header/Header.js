import React from 'react';
import './header.css';
import {Navbar} from "../Navbar/Navbar";
import {Logo} from "../Logo/Logo";

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
