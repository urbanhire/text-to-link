// Demo install
// webpack -w ./demo.js --devtool source-map

window.textTolink = require('../index');


window.dysplayDemo = (raw, formatted) => {
  // const container = document.getElementById(id);
  document.write(`<h4>Raw</h4><p>${raw}</p>`);
  document.write(`<h4>Formatted:</h4><p>${formatted}</p>`);

  return;
  let html = `<p>Raw:<BR>${raw}</p>`;
  html += `<p>Formatted:<BR>${formatted}</p>`;
};


