import { formatCurrency } from "../../scripts/utils/money.js";


//------- deacribe(description, specDefinitions)
//create a group of specs (often called a suite).
//calls to describe can be nested within other calls to compose your suite as a tree

//------- it(description, testFunction, timeout)
//Define a single spec. A spec should contain one or more expectations that test the state of the code
//A spec whose expectations all succeed will be passing and a spec with any failure will fail. The name it is a
//  pronoun for the test target, not an abbreviation of anything. it makes the spec more readable by connecting the
//  function name it and the argument description as a complete sentence

describe('test suite: formatCurrency', () => {
    it('converts cents into dollars', () => {
        expect(formatCurrency(2095)).toEqual('20.95');
    });

    it('work with 0', () => {
        expect(formatCurrency(0)).toEqual('0.00');     
    });

    it('rounds up to the nearest cent', () => {
        expect(formatCurrency(2000.5)).toEqual('20.01');
    })
}); 