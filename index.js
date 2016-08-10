'use strict'

module.exports = (content, opt) => {
  let callback
  let key
  let linkAttributes
  let option
  let options
  let pattern
  let value

  options = opt
  pattern = /(^|[\s\n]|<[A-Za-z]*\/?>)((?:https?|ftp):\/\/[\-A-Z0-9+\u0026\u2019@#\/%?=()~_|!:,.]*[\-A-Z0-9+\u0026@#\/%=~()_|])/gi

  if (!(options.length > 0)) {
    return content.replace(pattern, "$1<a href='$2'>$2</a>")
  }

  option = options[0]
  callback = option['callback']
  linkAttributes = ((() => {
    let results

    results = []
    for (key in option) {
      value = option[key]
      if (key !== 'callback') {
        results.push(' ' + key + '="' + value + '"')
      }
    }
    return results
  })()).join('')

  return content.replace(pattern, (match, space, url) => {
    var link
    link = (typeof callback === 'function' ? callback(url) : void 0) || ('<a href="' + url + '"' + linkAttributes + '>' + url + '</a>')
    return '' + space + link
  })
}
