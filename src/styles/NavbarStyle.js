import { createGlobalStyle } from "styled-components";

const NavbarStyle = createGlobalStyle`
	.navbar-name, .navbar-logo, .nav-links {
		color: var(--white-color);
	}

	.nav-item > a {
		font-weight: 700;
	}
`;

export default NavbarStyle;
