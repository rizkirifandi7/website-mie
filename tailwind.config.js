/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
		},
	},
	plugins: [
		require("tailwindcss-animate"),
		require("tailwindcss-filters"),
		function ({ addUtilities }) {
			addUtilities({
				".bg-navbar": {
					background: "rgba(255, 255, 255, 0.2)",
					boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
					backdropFilter: "blur(5px)",
					"-webkit-backdrop-filter": "blur(5px)",
					border: "1px solid rgba(255, 255, 255, 0.3)",
				},
				".text-outline-white": {
					textShadow:
						"-2px -2px 0px white, 2px -2px 0px white, -2px 2px 0px white, 2px 2px 0px white",
				},
				".text-outline-black": {
					textShadow:
						"-2px -2px 0px black, 2px -2px 0px black, -2px 2px 0px black, 2px 2px 0px black",
				},
			});
		},
	],
};

