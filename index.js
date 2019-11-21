module.exports = {
  blocks: {
    fontred: {
      shortcuts: {
        parsers: ['markdown', 'asciidoc', 'restructuredtext'],
        start:   '@',
        end:     '@'
      },
      process(content) {
        return '<font color="red">' + content.body + '</font>';
      }
    }
  }
}
