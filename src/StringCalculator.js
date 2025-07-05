class StringCalculator {
    Add(numbers) {
        if (numbers === "") return 0;

        let delimiter = /[,\n]/;

        if (numbers.startsWith("//")) {
            const delimiterLineEnd = numbers.indexOf('\n');
            const delimiterPart = numbers.substring(2, delimiterLineEnd);
            numbers = numbers.substring(delimiterLineEnd + 1);

            if (delimiterPart.startsWith("[")) {
                const delimiterMatches = [...delimiterPart.matchAll(/\[(.+?)\]/g)];
                const escaped = delimiterMatches.map(m =>
                    m[1].replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
                );
                delimiter = new RegExp(escaped.join("|"));
            } else {
                delimiter = new RegExp(`[${delimiterPart}]`);
            }
        }

        const nums = numbers.split(delimiter).map(Number);

        const negatives = nums.filter(n => n < 0);
        if (negatives.length > 0) {
            throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
        }

        const validNums = nums.filter(n => n <= 1000);
        return validNums.reduce((sum, num) => sum + num, 0);
    }
}



module.exports = { StringCalculator };
