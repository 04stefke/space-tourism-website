/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			boxShadow: {
				custom: "0px 0px 15px 20px rgba(0,0,0,0.75)", // Custom shadow
			},
		},
	},
	plugins: [],
};
