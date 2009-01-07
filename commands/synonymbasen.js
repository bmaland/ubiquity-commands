makeSearchCommand({
  homepage: "http://ubiquity.chrononaut.net/",
  author: { name: "Bjørn Arild Mæland", email: "bjorn.maeland@gmail.com" },
  contributors: [ "Bjørn Arild Mæland" ],
  license: "MIT",
  name: "Synonymbasen",
  url: "http://synonymbasen.net/",
  icon: "http://synonymbasen.net/favicon.ico",
  description: "Finn nynorsksynonym for bokmålsord.",

  preview: function(pblock, directObject) {
    var searchTerm = directObject.text;
    var pTemplate = "Søker Synonymbasen for <b>${query}</b>";
    var pData = {query: searchTerm};
    pblock.innerHTML = CmdUtils.renderTemplate(pTemplate, pData);

    var url = "http://synonymbasen.net/api/json/search/bm/" + searchTerm;

    jQuery.getJSON(url, function(data) {
      var numToDisplay = 10;
      var results = data.results.splice(0, numToDisplay);
      var template = '{for result in results}'
          + '<div class="gresult"><div>'
          + '<strong>${result.word}</strong> '
          + '</div><xul:description class="gresult-content">'
          + '${result.synonyms}'
          //+ '{for synonym in result.synonyms}${synonym}{/for}'
          + '</xul:description></div>'
          + '{/for}';
      pblock.innerHTML = CmdUtils.renderTemplate(template, {results: results});
    });
  }
});
