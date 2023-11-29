module.exports = {
	theme: {
		colors: {
			white: '#ffffff',
			background: '#f2f3f5',
			'gray-line': '#dcdde8',
			text: '#666666',
			'text-highlight': '#b3b9ff',
			title: '#2e384d',
			red: '#BA4949',
			'red-dark': '#d13952',
			green: '#4DD82B',
			'green-dark': '#3FB023',
			blue: '#5965e0',
			'blue-dark': '#4953b8',
			'blue-twitter': '#2aa9e0',
		},
	},
	variants: {},
	plugins: [],
	purge: {
		enabled: process.env.NODE_ENV === 'production',
		content: [
			'components/**/*.vue',
			'layouts/**/*.vue',
			'pages/**/*.vue',
			'plugins/**/*.js',
			'nuxt.config.js',
			// TypeScript
			'plugins/**/*.ts',
			'nuxt.config.ts',
		],
	},
};