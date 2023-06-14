function* stepGenerator() {
    let previousResult = 1;
    while (true) {
        const input = prompt(`Previous result: ${previousResult}. Enter a new number:`);

        if (!Number.isNaN(Number(input))) {
            const number = Number(input);
            previousResult += number;

            if (previousResult > 10000) {
                previousResult = 1;
            }

            yield previousResult;
        } else {
            console.log('Invalid number!');
        }
    }
}
const generator = stepGenerator();

while (true) {
    const result = generator.next().value;
    console.log(`Previous result: ${result}. Enter a new number:`);
}
