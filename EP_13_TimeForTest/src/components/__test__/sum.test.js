import {sum} from "../sum"
test("Sum function should cal Sum of two function", 
    () => {
        const result=sum(3,5);
        expect(result).toBe(8) //assertion
    });
