'use strict'

const pattern = /(^|[\s\n]|<[A-Za-z]*\/?>)((?:https?|ftp):\/\/[\-A-Z0-9+\u0026\u2019@#\/%?=()~_|!:,.]*[\-A-Z0-9+\u0026@#\/%=~()_|])/gi

function getAttrs(key) {
	return key === 'callback' ? '' : ` ${key}="${this[key]}"`
}
function replacer(match, space, url) {
	return this.callback ? this.callback(url) : `${space}<a href="${url}"${this.attrs}>${url}</a>`
}

module.exports = (content, opts = {}) => {
  opts.attrs = Object.keys(opts).map(getAttrs, opts).join('')
  return content.replace(pattern, replacer.bind(opts))
}
