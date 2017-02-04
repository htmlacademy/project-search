const search = require(`./../lib/search`);
const path = require(`path`);
require(`should`);

describe(`Search for files and types`, () => {

  const testDir = path.join(__dirname, `data`);

  describe(`Find existing files`, () => {
    it(`All html files`, () => {
      return search.html(testDir).should.be.fulfilledWith(
        [`catalog.html`, `index.html`]
      );
    });

    it(`All js files`, () => {
      return search.js(testDir).should.be.fulfilledWith(
        [`js/some.js`]
      );
    });

    it(`All css files`, () => {
      return search.css(testDir).should.be.fulfilledWith(
        [`css/normalise.min.css`, `css/style.css`]
      );
    });

    it(`All images`, () => {
      return search.images(testDir).should.be.fulfilledWith(
        [`img/1.png`, `img/2.svg`, `img/3.jpg`, `img/4.gif`, `img/5.bmp`]
      );
    });

    it(`All files by extension`, () => {
      return search.type(testDir, `html`).should.be.fulfilledWith(
        [`catalog.html`, `index.html`]
      );
    });

    it(`.hidden file`, () => {
      return search.file(testDir, `.hidden`).should.be.fulfilledWith(`.hidden`);
    });

    search.dir(testDir).then((dirs) => console.log(dirs));
  });

  describe(`Find not existenting files`, () => {
    it(`Txt files`, () => {
      return search.type(testDir, `txt`).should.be.fulfilledWith([]);
    });

    it(`Doc file`, () => {
      return search.file(testDir, `doc`).should.be.fulfilledWith(null);
    });
  });

});
