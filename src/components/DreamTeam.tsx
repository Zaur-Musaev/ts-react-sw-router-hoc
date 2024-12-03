import React, { useContext } from "react";
import { friends } from "../utils/constants";
import Friend from "./Friend";
import { SWContext } from "../utils/context";

const DreamTeam = () => {

    const {hero} = useContext(SWContext)
    return (
        <section className="float-end w-50 mx-1 row border">
            <h2 className="col-12 text-center">Dream Team</h2>
            {friends.filter(f => f !== hero).map((item, index) => <Friend key={index} hero={item} number={index + 1} />)}
        </section>
    );
};

export default DreamTeam;
