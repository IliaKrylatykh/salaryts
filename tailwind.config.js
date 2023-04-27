/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			height: {
				'1/10-screen': '10vh',
				'9/10-screen': '90vh',
			},
			width: {
				'2.5/10-screen': '25vh',
				'7/10-screen': '70vh',
			},
		},
	},
	plugins: [],
}
