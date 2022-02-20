module.exports = function filterArr(arr) {
	return arr.filter(item  => typeof item === 'number' && item % 2 === 0);
};