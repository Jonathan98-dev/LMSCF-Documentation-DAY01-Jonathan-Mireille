
/*            

* This is the file which will call

* our javascript file that need to be tested.

* Each describe block is equivalent to one test case    

*    

*/   


// describe your code
describe("MySum", function() {

    //what it should do

    it("should Return 5 for numbers 3 and 2", function() {

        //expect something

        expect(mysum(3, 2))

            .toEqual(5);

    });

    //what it should do

    it("should Return 9.6 for numbers 5.5 and 4.1", function() {

        //expect something

        expect(mysum(5.5, 4.1))

            .toEqual(9.6);

    });

});

//describe

describe("insure", function() {

	it("should Return 14 for a = 20 and b = 100", function() {

		expect(insure(20, 100))
 
			.toEqual(142);
	});
});



/*

Note how describe - it() argument reads like a sentence.

*/