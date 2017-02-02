const glob = require(`glob`);
const util = require(`util`);

/*
  Markup types
*/
const TYPE_HTML = `html`;

/*
  Style types
*/
const TYPE_CSS = `css`;
const TYPE_SASS = [`sass`, `scss`];
const TYPE_LESS = `less`;
const TYPE_POSTCSS = [`pcss`, `postcss`];

const TYPE_PREPROCESSOR = [].concat(TYPE_SASS, TYPE_LESS, TYPE_POSTCSS);
const TYPE_STYLES = [].concat(TYPE_CSS, TYPE_PREPROCESSOR);

/*
  Images types
*/
const TYPE_JPG = [`jpeg`, `jpg`];
const TYPE_BMP = `bmp`;
const TYPE_GIF = `gif`;
const TYPE_PNG = `png`;
const TYPE_SVG = `svg`;
const TYPE_WEBP = `webp`;

const TYPE_IMAGES = [].concat(TYPE_JPG, TYPE_BMP, TYPE_GIF, TYPE_PNG, TYPE_SVG, TYPE_WEBP);

/*
  Script types
*/
const TYPE_JS = `js`;

const searchFiles = (source, pattern) => {
  return new Promise((resolve, reject) => {
    glob(pattern || `*.*`, {
      matchBase: true,
      cwd: source,
      root: source,
      dot: true
    }, (err, files) => {
      if (err) {
        return reject(err);
      }
      return resolve(files.map((file) => file.replace(`${source}/`, ``)));
    });
  });
};

const searchFile = (source, file) => {
  return searchFiles(source, file).then((files) => (files.length > 0) ? files.shift() : null);
};

const searchType = (source, type) => {
  if (util.isArray(type)) {
    return searchFiles(source, `*.+(${type.join(`|`)})`);
  } else if (type) {
    return searchFiles(source, `*.${type}`);
  } else {
    return searchFiles(source);
  }
};

module.exports = {
  html: (source) => searchType(source, TYPE_HTML),
  css: (source) => searchType(source, TYPE_CSS),
  js: (source) => searchType(source, TYPE_JS),
  images: (source) => searchType(source, TYPE_IMAGES),
  styles: (source) => searchType(source, TYPE_STYLES),
  type: (source, type) => searchType(source, type),
  file: (source, file) => searchFile(source, file),
};
