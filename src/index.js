// for example
import * as main from 'serverspec-generator';
import * as Vue from 'vue';

const $ = require('jquery');
window.jQuery = $;
window.$ = $;
const ___ = require('bootstrap');


const app = new main.App([], main.Info.value);
console.log(app);

$(document).on('click', '#save-btn', () => {
  const file = new File([app.rubyCode], 'generated_spec.rb');
  const url = window.URL.createObjectURL(file);
  const a = document.createElement('a');
  a.href = url;
  a.setAttribute('download', file.name);
  document.body.appendChild(a);
  a.click();
});

document.querySelector("#vue-main").appendChild(app.$el);
