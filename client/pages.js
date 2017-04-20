module.exports = {
	'main': {
		link: '/main',
		title: "Main Menu",
		name: "main",
		buttons: [
			'test',
			'test space',
			'input field',
			'address',
			'test',
			'Communication',
		],
	},
	'test space': {
		back: '/main',
		link: '/test space', 
		name: 'test space', 
		title: 'Test Space',
		varButtons: [
			'main',
			'input field',
		],
		titleVar: 2,
	},
	'test': {
		back: '/main',
		link: '/test', 
		name: 'test', 
		title: 'test',
	},
	'input field': {
		back: '/main',
		link: '/input field',
		name: 'input field',
		title: 'Input Field',
		input: 'test input',
	},
	'address': {
		back: '/main',
		link: '/address',
		name: 'address',
		title: 'Address',
		address: '000.000.000.000',
	},
	'Communication': {
		back: '/main',
		link: '/Communication',
		name: 'Communication',
		title: 'Communication Options',
		buttons: [
			'main',
			'input field',
		],
	},
};
