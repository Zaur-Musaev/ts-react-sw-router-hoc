import { navItems } from "../utils/constants";
import NavItem from "./NavItem";

const Navigation = () => {
    return (
        <nav className="fixed-top mt-2 ms-4">
            <ul className="nav">
                {navItems.map((item, index) => <NavItem key={index} item={item}/>)}
            </ul>
        </nav>
    );
};

export default Navigation;
