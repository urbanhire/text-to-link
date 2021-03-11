'use strict'

/**
 * Converts raw links to clickable links in content
 * 
 * @param {string} content 
 * @param {{ callback: function, target: string }} [options]
 * @returns {string}
 */
module.exports = (content, options) => {
  let callback
  let key
  let linkAttributes
  let pattern
  let value

  pattern = /(^|[\s\n]|<[A-Za-z]*\/?>)((?:https?|ftp):\/\/[\-A-Z0-9+\u0026\u2019@#\/%?=()~_|!:,.]*[\-A-Z0-9+\u0026@#\/%=~()_|])/gi

  let optionsExists = false
  for (let i in options) {
    optionsExists = true
    break
  }
  if (!optionsExists) {
    return content.replace(pattern, "$1<a href='$2'>$2</a>")
  }

  callback = options['callback']
  linkAttributes = ((() => {
    let results

    results = []
    for (key in options) {
      value = options[key]
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
