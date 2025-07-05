class StringCalculator {
    Add(numbers) {
        if (numbers === "") return 0;
        if (numbers.includes(",")) {
            const nums = numbers.split(",").map(Number);
            return nums[0] + nums[1];
        }
        return parseInt(numbers);
    }
}

module.exports = { StringCalculator };
