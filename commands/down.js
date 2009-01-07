// TODO take url and strip http, slashes etc

CmdUtils.CreateCommand({
  homepage: "http://ubiquity.chrononaut.net/",
  author: { name: "Bjørn Arild Mæland", email: "bjorn.maeland@gmail.com" },
  contributors: [ "Bjørn Arild Mæland" ],
  license: "MIT",

  name: "down",
  takes: { "site": noun_arb_text },

  execute: function(directObject) {
    var site = directObject.text;
    //var document = context.focusedWindow.document;
    //var selected_text = document.getSelection();
    Utils.openUrlInBrowser("http://downforeveryoneorjustme.com/" + site);
  },

  preview: function(pblock, directObject) {
    var site = directObject.text;
    if (site.length < 4) { return; }
    jQuery(pblock).load("http://downforeveryoneorjustme.com/" + site);
  }
});
