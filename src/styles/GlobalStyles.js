import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    /* SINGLE Theme Styles */
    :root {
        --primary-color: #007bff;
        --primary-color-light: #057FFF;
        --secondary-color: #6c757d;
        --background-dark-color: #10121A;
        --background-dark-grey: #191D2B;
        --border-color: #2e344e;
        --background-light-color: #F1F1F1;
        --background-light-color-2: rgba(3,127,255,.3);
        --white-color: #FFF;
        --font-light-color: #a4acc4;
        --font-dark-color: #313131;
        --font-dark-color-2: #151515;
        --sidebar-dark-color: #191D2B;
        --scrollbar-bg-color: #383838;
        --scrollbar-thump-color: #6b6b6b;
        --scrollbar-track-color: #383838;
    }

	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		font-family: 'Roboto', sans-serif;
		color: var(--white-color);
	}
	

	.App {
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.home {
		display: flex;
		height: 90vh;
		align-items: center;
		justify-content: center;
		font-size: 3rem;
	}

	video {
		object-fit: cover;
		width: 100%;
		height: 100%;
		position: fixed;
		z-index: -1;
		box-shadow:  inset 0 0 0 1000px rgb(0 0 0 / 20%);
	}
`;

export default GlobalStyles;
