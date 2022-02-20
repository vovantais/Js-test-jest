const reversStr = require('./script');

test('Check revers string 1', () => {
	expect(reversStr('hello world!')).toBe('!dlrow olleh');
});

describe('Check revers string 2 ', () => {
	const testCase = [
		{
			current: 'hello',
			expected: 'olleh'
		},
		{
			current: 'la-la xaz',
			expected: 'zax al-al'
		},
		{
			current: '-13/3.,',
			expected: ',.3/31-'
		}
	];
	testCase.forEach(test => {
		it(`Current string : ${test.current} expected ${test.expected}`, () => {
			expect(reversStr(test.current)).toBe(test.expected);
		})
	})
});