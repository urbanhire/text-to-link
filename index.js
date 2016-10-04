'use strict'

const pattern = /(^|[\s\n]|<[A-Za-z]*\/?>)((?:https?|ftp):\/\/[\-A-Z0-9+\u0026\u2019@#\/%?=()~_|!:,.]*[\-A-Z0-9+\u0026@#\/%=~()_|])/gi

module.exports = (content, opts = {}) => {
  const attrs = Object.keys(opts).map(key => key === 'callback' ? '' : ` ${key}="${opts[key]}"`).join('')

  return content.replace(pattern, (match, space, url) =>
    opts.callback ? opts.callback(url) : `${space}<a href="${url}"${attrs}>${url}</a>`
  )
}
