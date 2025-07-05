class StringCalculator {
    Add(numbers) {
        if (numbers === "") return 0;
        const delimiters = /[,\n]/;
        const nums = numbers.split(delimiters).map(Number);
        return nums.reduce((sum, num) => sum + num, 0);
    }
}

module.exports = { StringCalculator };
