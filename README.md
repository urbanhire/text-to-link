# text-to-link

text-to-link is a small JavaScript and npm module that takes a string of text, finds URLs within it, and hyperlinks them.

#### [DEMO](https://webdeveloper.pro/demo/text-to-link/demo/demo.html)

### Basic Usage

text-to-link adds an autoLink() method to JavaScript's String prototype,
so you can use it on any JavaScript string. Take a look at the tests,
but essentially, after including either autolink.js or autolink-min.js
to your page, it works like this:

```javascript
// Input
let textTolink = require('text-to-link')
textTolink("This is a link to Google http://google.com")

// Output
"This is a link to Google <a href='http://google.com'>http://google.com</a>"
```

### Additional Options

You can pass any additional HTML attributes to the anchor tag with a JavaScript object, like this:

```javascript
// Input
let textTolink = require('text-to-link')
textTolink("This is a link to Google http://google.com", { target: "_blank", rel: "nofollow", id: "1" })

// Output
"This is a link to Google <a href='http://google.com' target='_blank' rel='nofollow' id='1'>http://google.com</a>"
```

#### Callback

Callback option can be used to redefine how links will be rendered.

```javascript
// Input
let textTolink = require('text-to-link')
textTolink("This is a link to Google http://google.com", {
  callback: function(url) {
    return /\.(gif|png|jpe?g)$/i.test(url) ? '<img src="' + url + '">' : null;
  }
})


// Output
"This is a link to image <img src='http://example.com/logo.png'>"
```
