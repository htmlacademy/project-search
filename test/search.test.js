const search = require(`./../lib/search`);
const path = require(`path`);
require(`should`);

describe(`Search for files and types`, () => {

  const testDir = path.join(__dirname, `data`);

  describe(`Find existing files`, () => {
    it(`All html files`, () => search.html(testDir).should.be.fulfilledWith([`catalog.html`, `index.html`]));

    it(`All js files`, () => search.js(testDir).should.be.fulfilledWith([`js/some.js`]));

    it(`All css files`, () => search.css(testDir).should.be.fulfilledWith([`css/normalise.min.css`, `css/style.css`]));

    it(`All images`, () => search.images(testDir).should.be.fulfilledWith([`img/1.png`, `img/2.svg`, `img/3.jpg`, `img/4.gif`, `img/5.bmp`]));

    it(`All files by extension`, () => search.type(testDir, `html`).should.be.fulfilledWith([`catalog.html`, `index.html`]));

    it(`.hidden file`, () => search.file(testDir, `.hidden`).should.be.fulfilledWith(`.hidden`));
  });

  describe(`Find not existenting files`, () => {
    it(`Txt files`, () => search.type(testDir, `txt`).should.be.fulfilledWith([]));

    it(`Doc file`, () => search.file(testDir, `doc`).should.be.fulfilledWith(null));
  });

});
