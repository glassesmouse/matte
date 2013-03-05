/*global require,exports,describe,it,expect */
var Montage = require("montage").Montage;
var TestPageLoader = require("montage-testing/testpageloader").TestPageLoader;

TestPageLoader.queueTest("dynamic-text-test", function(testPage) {
    var test;
    beforeEach(function() {
        test = testPage.test;
    });

    describe("test/dynamic-text/dynamic-text-spec", function() {

        describe("DynamicText", function() {
            it("wipes out it's content in initialization", function() {
                expect(testPage.getElementById("bar")).toBeNull();
            });
        });

        describe("DynamicText using plain text", function() {
            it("can be created", function() {
                expect(test.plainText).toBeDefined();
            });
            it("value can be set", function() {
                test.plainText.value = "foo";
                testPage.waitForDraw();
                runs(function() {
                    expect(test.plainText.element.textContent).toEqual("foo");
                })
            });
            it("value can be reset", function() {
                test.plainText.value = "";
                testPage.waitForDraw();
                runs(function() {
                    expect(test.plainText.element.textContent).toEqual("");
                })
            });
        });

    });

});