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
const TYPE_STYLES = [TYPE_CSS, `sass`, `scss`, `less`, `pcss`, `postcss`];

/*
  Images types
*/
const TYPE_IMAGES = [`jpeg`, `jpg`, `gif`, `png`, `bmp`, `svg`, `webp`];

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
