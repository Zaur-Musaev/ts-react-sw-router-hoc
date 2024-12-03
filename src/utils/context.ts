import React from "react";
import { defaultHero } from "./constants";


export const SWContext = React.createContext(
    {
        hero: defaultHero,
        changeHero: (hero: string) => {},      
    }
)