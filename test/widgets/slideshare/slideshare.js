var expect = require("expect.js");
var render = require("../../support").widgets.render;
var read = require("../../support").utils.read;

describe("Slideshare", function() {
  describe("Slideshare", function() {
    it("embeds the presentation", function() {
      expect(render("slideshare/123")).to.eql(read("test/widgets/slideshare/slideshare.html"));
    });

    describe("aspect", function() {
      it("default [sd]", function() {
        expect(render("slideshare/123")).to.contain('data-aspect-ratio="sd"');
      });

      it("custom", function() {
        expect(render("slideshare/123?aspect=other")).to.contain('data-aspect-ratio="other"');
      });
    });
  });
});
