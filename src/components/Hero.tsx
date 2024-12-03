import React, { useContext } from "react";
import { characters } from "../utils/constants";
import { SWContext } from "../utils/context";

const Hero = () => {
    const {hero} = useContext(SWContext)
    return (
        <section className="float-start me-3 w-25">
            <img className="w-100" src={characters[hero].img} alt={characters[hero].name} />
        </section>
    );
};

export default Hero;
