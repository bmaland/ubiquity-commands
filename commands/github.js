makeSearchCommand({
  homepage: "http://ubiquity.chrononaut.net/",
  author: { name: "Bjørn Arild Mæland", email: "bjorn.maeland@gmail.com"},
  license: "MIT",
  name: "GitHub",
  url: "http://github.com/search?q={QUERY}",
  icon: "http://github.com/favicon.ico",
  description: "Searches GitHub for your words.",
  preview: function(pblock, directObject) {
    var searchTerm = directObject.text;
    var pTemplate = "Searches GitHub for <b>${query}</b>";
    var pData = {query: searchTerm};
    pblock.innerHTML = CmdUtils.renderTemplate(pTemplate, pData);

    var url = "http://github.com/api/v1/json/search/" + searchTerm;

    jQuery.getJSON(url, function(data) {
      var numToDisplay = 3;
      var repos = data.repositories.splice(0, numToDisplay);
      var template = '{for repo in repos}'
                   + '<div class="gresult">'
                   + '<div><strong><a href="${repo.url}">${repo.name}</a></strong></div>'
                   + '<xul:description class="gresult-content">${repo.description}</xul:description>'
                   + '</div>'
                   + '{/for}';
      pblock.innerHTML = CmdUtils.renderTemplate(template, {repos: repos});
    });
  }
});
