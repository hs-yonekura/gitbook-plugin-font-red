module.exports = {
  blocks: {
    fontred: {
      shortcuts: {
        parsers: ['markdown', 'asciidoc', 'restructuredtext'],
        start:   '[red]',
        end:     '[/red]'
      },
      process(content) {
        return '<span style="color:red">' + content.body + '</span>';
      }
    }
  }
}
