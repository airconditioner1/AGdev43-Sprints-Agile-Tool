import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<NavLink to="/about" activeStyle>
			Question 1
		</NavLink>
		<NavLink to="/contact" activeStyle>
			Question 2
		</NavLink>
		<NavLink to="/blogs" activeStyle>
			Question 3
		</NavLink>
		<NavLink to="/sign-up" activeStyle>
			Question 4
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
