/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			boxShadow: {
				custom: "0px 0px 10px 50px rgba(255,255,255,0.2)", // Custom shadow
			},
			fontFamily: {
				custom: ['Montserrat', "sans-serif"], 
			},
		},
	},
	plugins: [],
};
