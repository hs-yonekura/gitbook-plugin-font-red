var cheerio = require('cheerio');
var re = /(^@|\s@).*?(@$|@\s)/;

module.exports = {
  hooks: {
    page: function (page) {
      let $ = cheerio.load(page.content);
      $(*).each(function (index, a) {
        var a = $(a);
        var text = a.text();
        if (re.test(text)) {
          text = text.replace(/(^@|\s@)(.*?)(@$|@\s)/, '<font color="red">$2</font>');
          $(a).text(text);
        }
      }
    }
  }
}
