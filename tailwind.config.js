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
				home: "url('./home/background-home-mobile.jpg')",
				homeSm: "url('./home/background-home-tablet.jpg')",
				homeLg: "url('./home/background-home-desktop.jpg')",
				destination: "url('./destination/background-destination-mobile.jpg')",
				destinationSm: "url('./destination/background-destination-tablet.jpg')",
				destinationLg: "url('./destination/background-destination-desktop.jpg')",
				crew: "url('./crew/background-crew-mobile.jpg')",
				crewSm: "url('./crew/background-crew-tablet.jpg')",
				crewLg: "url('./crew/background-crew-desktop.jpg')",
				technology: "url('./technology/background-technology-mobile.jpg')",
				technologySm: "url('./technology/background-technology-tablet.jpg')",
				technologyLg: "url('./technology/background-technology-desktop.jpg')",
			},
		},
	},
	plugins: [],
};
