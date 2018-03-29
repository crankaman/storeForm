var expect = require("chai").expect;
var tools = require("../lib/tools");

describe("Test Tools", function(){
    describe("printName()", function() {
        it("should print the last name first", function(){
            var results = tools.printName({ first: "Alex", last: "Banks"});
            expect(results).toequal("Banks, Alex");
        });
    });
    describe("loadWiki()", function(){

        this.timeout(5000); // Custom Timeout for Test

        it("Load wiki page", function(done) {
            tools.loadWiki({ first: "Abraham", last: "Lincoln"}, function(html) {
                expect(html).to.be.ok;
                done();
            });
        });
    });
});
