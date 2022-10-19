import useThemeSwitcher from './useThemeSwitcher';
import { FaSun, FaMoon } from "react-icons/fa";
//import { useState } from "react";
import React from 'react';
const Toggle = () => {

    const [activeTheme, setTheme] = useThemeSwitcher();

    return (
        <div onClick={() => setTheme(activeTheme)}>
            {activeTheme === 'light' ? (<FaSun size={25} style={{ color: '#fff' }} />) : (<FaMoon size={25} style={{ color: '#fff' }} />)}

        </div>
    );
}
export default Toggle 