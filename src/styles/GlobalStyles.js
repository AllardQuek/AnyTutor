import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    .light-theme {
        --primary-color: #F6F9FD;
        --primary-color-light: #F78104;
        --secondary-color: #6c757d;
        --background-dark-color: #10121A;
        --background-dark-grey: #B0B9CA;
        --border-color: #2e344e;
        --background-light-color: #f9f9f0;
		--hover-color: #FAAB36;
        --white-color: #FFF;
		--logo-color: #6ba2d6;
		--error-color: #FD5901;
        --font-light-color: #677897;
		--font-nav-color: #6B8CAE;
		--font-nav-color-2: #0663a3;
        --font-dark-color: #151515;
        --sidebar-dark-color: #191D2B;
        --scrollbar-bg-color: #383838;
        --scrollbar-thump-color: #6b6b6b;
        --scrollbar-track-color: #383838;
        --original-scatterbox-color: #6366F1;
    }

	.dark-theme{
        --primary-color: #102131;
        --primary-color-light: #057FFF;
        --secondary-color: #6c757d;
        --background-dark-color: #10121A;
        --background-dark-grey: #191D2B;
        --border-color: #2e344e;
        --background-light-color: #F1F1F1;
        --background-light-color-2: rgba(3,127,255,.3);
		--hover-color: #FAAB36;
        --white-color: #FFF;
        --font-light-color: #FFF;
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
		background-color: var(----primary-color);
	}

	body {
		color: var(--font-light-color);
	}

	a {
		color:var(--hover-color);
	}

	.App {
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		line-height: 1.6;
		transition: all 1s ease;
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
