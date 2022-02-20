const filterArr = require('./filterArr');

describe('Filter array', () => {
	const testCase = [
		{
			in: [0, 1, 2, 3, 4, 6, 7],
			expected: [0, 2, 4, 6]
		},
		{
			in: [false, true, false, false, true],
			expected: [],
		},
		{
			in: ['2', '8', '4', 10, true, null],
			expected: [10]
		}
	];
	testCase.forEach(test => {
		it(`Filter array in : ${test.in} expected ${test.expected}`, () => {
			const result = filterArr(test.in);
			expect(result).toEqual(test.expected);
		})
	})
});