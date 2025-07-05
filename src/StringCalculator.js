class StringCalculator {
    Add(numbers) {
        if (numbers === "") return 0;

        let delimiter = /[,\n]/;

        if (numbers.startsWith("//")) {
            const delimiterLineEnd = numbers.indexOf('\n');
            const delimiterString = numbers.substring(2, delimiterLineEnd);
            delimiter = new RegExp(`[${delimiterString}]`);
            numbers = numbers.substring(delimiterLineEnd + 1);
        }

        const nums = numbers.split(delimiter).map(Number);
        return nums.reduce((sum, num) => sum + num, 0);
    }
}


module.exports = { StringCalculator };
