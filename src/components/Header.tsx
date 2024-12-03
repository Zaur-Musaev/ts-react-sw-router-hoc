import React, { useContext } from "react";
import Navigation from "./Navigation";
import { SWContext } from "../utils/context";
import { characters } from "../utils/constants";


const Header = () => {
    const {hero} = useContext(SWContext);
    return (
        <header>
            <Navigation />
            <h1 className="text-center">{characters[hero].name}</h1>
        </header>
    );
};

export default Header;
