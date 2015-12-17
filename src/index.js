// for example
import * as main from 'serverspec-generator';
import * as Vue from 'vue';
const dialog = remote.require('electron').dialog;
const fs = remote.require('fs');

const $ = require('jquery');
window.jQuery = $;
window.$ = $;
require('bootstrap');


const vueApp = new main.App([], main.Info.value);
console.log(vueApp);

$(document).on('click', '#save-btn', () => {
  dialog.showSaveDialog((fname) => {
    if (!fname) { return; } // cancel
    const code = vueApp.rubyCode + "\n";
    fs.writeFile(fname, code, (err) => {
      if (err) {throw err;}
      alert('Saved!');
    });
  });
});

document.querySelector("#vue-main").appendChild(vueApp.$el);
