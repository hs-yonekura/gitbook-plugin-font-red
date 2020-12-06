module.exports = {
  blocks: {
    fontred: {
      shortcuts: {
        parsers: ['markdown', 'asciidoc', 'restructuredtext'],
        start:   '@',
        end:     '@'
      },
      process(content) {
        return '<span style="color:red">' + content.body + '</span>';
      }
    }
  }
}
