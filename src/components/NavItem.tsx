import React, { useContext } from "react";

import { Item } from "../utils/types";
import { NavLink } from "react-router-dom";
import { SWContext } from "../utils/context";

interface NavItemProps {
  item: Item;
}
const NavItem = ({ item }: NavItemProps) => {
  const {hero} = useContext(SWContext)
  return (
    <li > 
      <NavLink className="nav-item btn btn-danger mx-1" to={`/${item.route}/${hero}`}>{item.title}</NavLink>
    </li>
  );
};

export default NavItem;
