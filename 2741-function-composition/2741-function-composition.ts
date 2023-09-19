type F = (x: number) => number;

function compose(functions: F[]): F {
    return (x: number) => {
        let result: number = x;
        for (let i = functions.length - 1; i >= 0; i--) {
            result = functions[i](result);
        }
        return result;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */