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

        const negatives = nums.filter(n => n < 0);
        if (negatives.length > 0) {
            throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
        }

        return nums.reduce((sum, num) => sum + num, 0);
    }
}



module.exports = { StringCalculator };
