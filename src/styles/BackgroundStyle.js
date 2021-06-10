import { createGlobalStyle } from "styled-components";

const BackgroundStyle = createGlobalStyle`
	body {
		background-color: var(--primary-color); 
	}

	video {
		display: none;
	}
`;

export default BackgroundStyle;
