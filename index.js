var cheerio = require('cheerio');
var re = /(^@|\s@).*?(@$|@\s)/g;

function replacer($, text) {
  if ($(text).children().length) {
    $(text).children().each(function (itm) {
      return replacer($, $(this));
    });
  }
  else {
    var value = $(text).text();
    value = value.replace(re, '<font color="red">$2</font>');
    return $(text).text(value);
  }
}

function f(body) {
  var $ = cheerio.load(body);
  var bb = $("*").each(function (itm) {
    return replacer($, $(this));
  });
  return $.html(bb);
}

module.exports = {
  hooks: {
    page: function (page) {
      page.content = f(page.content).replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"');
      return page;
    }
  }
}
