import { createGlobalStyle } from "styled-components";

const BackgroundStyle = createGlobalStyle`
	* {
		background-color: var(--background-dark-color); 
	}
	
	video {
		display: none;
	}
`;

export default BackgroundStyle;
