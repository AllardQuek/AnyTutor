import { createGlobalStyle } from "styled-components";

const NavbarStyle = createGlobalStyle`
	.navbar {	
		/* Reset bg to transparent for seamless experience */
		background-color: transparent; 
	}

	.navbar-name, .navbar-logo, .nav-links {
		color: var(--white-color);
	}

	.nav-item > a {
		font-weight: 700;
	}
`;

export default NavbarStyle;
