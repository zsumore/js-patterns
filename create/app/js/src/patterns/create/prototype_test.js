"use strict";

describe("prototype suite", function () {
    var mondeo;
    var civic;
    var temp;

    beforeEach(function () {
        console.info("----------------------------START------------------------------");
        civic = new Car("Honda Civic", 2009, 20000);
        mondeo = new Car("Ford Mondeo", 2010, 5000);
        temp = new Car("Ford Mondeo", 2010, 5000);
    });

    afterEach(function () {
        civic = null;
        mondeo = null;
        console.info("-----------------------------END-------------------------------");
    });

    it("contains spec with an expectation", function () {

        expect(civic.model).toEqual("Honda Civic");
        expect(civic.year).toEqual(2009);
        expect(civic.miles).toEqual(20000);
        expect(civic['miles']).toBe(20000);

        expect(temp).toEqual(mondeo);
        console.info(civic.toString());
    });

});

describe("Included matchers:", function () {

    it("The 'toBe' matcher compares with ===", function () {
        var a = 12;
        var b = null;

        expect(a).toBe(12);
        expect(b).toBe(null);
    });
});

describe("The 'toEqual' matcher", function () {

    it("works for simple literals and variables", function () {
        var a = 12;
        expect(a).toEqual(12);
    });

    it("should work for objects", function () {
        var foo = {
            a: 12,
            b: 34
        };
        var bar = {
            a: 12,
            b: 34
        };

        
        expect(foo).toEqual(bar);
        expect(foo).not.toBe(bar);
    });
});

describe("", function () {
    it("should behave...", function () {
    });
});




