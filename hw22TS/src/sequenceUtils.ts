export const generateFibonacci = (limit: number): number[] => {
    const result: number[] = []
    function helper(a: number, b: number): void {
        if (a > limit) return;
        result.push(a)
        helper(b, a + b)
    }
    helper(0, 1)
    return result
}

export const generatePrimeNumbers = (limit: number): number[] => {
    const result: number[] = []
    for (let number = 3; number < limit; number++) {
        let element = true;

        for (let i = 3; i < Math.sqrt(number); i++) {
            if (number % i === 0) {
                element = false
                break;
            }
        }
        if (element) {
            result.push(number)
        }
    }
    return result;
}