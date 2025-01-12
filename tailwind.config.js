/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			boxShadow: {
				custom: "0px 0px 10px 50px rgba(255,255,255,0.2)", // Custom shadow
			},
			fontFamily: {
				custom: ["Montserrat", "sans-serif"],
			},
			backgroundImage: {
				home: "url('./assets/home/background-home-mobile.jpg')",
				homeSm: "url('./assets/home/background-home-tablet.jpg')",
				homeLg: "url('./assets/home/background-home-desktop.jpg')",
				destination: "url('./assets/destination/background-destination-mobile.jpg')",
				destinationSm: "url('./assets/destination/background-destination-tablet.jpg')",
				destinationLg: "url('./assets/destination/background-destination-desktop.jpg')",
				crew: "url('./assets/crew/background-crew-mobile.jpg')",
				crewSm: "url('./assets/crew/background-crew-tablet.jpg')",
				crewLg: "url('./assets/crew/background-crew-desktop.jpg')",
				technology: "url('./assets/technology/background-technology-mobile.jpg')",
				technologySm: "url('./assets/technology/background-technology-tablet.jpg')",
				technologyLg: "url('./assets/technology/background-technology-desktop.jpg')",
			},
		},
	},
	plugins: [],
};
