import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to='/signup'>Signup</NavLink>
            <NavLink to='/signin'>Signin</NavLink>
            <NavLink to='/addcoffee'>Add Coffee</NavLink>
        </div>
    );
};

export default Header;