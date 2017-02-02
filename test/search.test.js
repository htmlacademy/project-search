const search = require(`./../lib/search`);
const path = require(`path`);
require(`should`);

describe(`Search for files and types`, () => {

  const testDir = path.join(__dirname, `data`);

  describe(`Find existing files`, () => {
    it(`All html files`, () => search.html(testDir).should.be.fulfilledWith([`catalog.html`, `index.html`]));

    it(`All js file`, () => search.js(testDir).should.be.fulfilledWith([`js/some.js`]));

    it(`.hidden file`, () => search.file(testDir, `.hidden`).should.be.fulfilledWith(`.hidden`));

    it(`All images`, () => search.images(testDir).should.be.fulfilledWith(
      [`img/1.png`, `img/2.svg`, `img/3.jpg`, `img/4.gif`, `img/5.bmp`]
    ));
  });

});
