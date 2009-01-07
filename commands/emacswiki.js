CmdUtils.CreateCommand({
    name: "emacs",
    takes: {"function": noun_arb_text},
    icon: "http://www.emacswiki.org/emacs_rss.png",
    homepage: "http://ubiquity.chrononaut.net/",
    author: {name: "Bjørn Arild Mæland", email: "bjorn.maeland@gmail.com"},
    license: "MIT",
    description: "Search the EmacsWiki",

    execute: function(directObject) {
        var url = "http://www.google.com/cse?cx=004774160799092323420%3A6-ff2s0o6yi&q={QUERY}&sa=Search";
        var urlString = url.replace("{QUERY}", directObject.text);
        Utils.openUrlInBrowser(urlString);
    },

    preview: function(pblock, directObject) {
        searchText = jQuery.trim(directObject.text);
        if(searchText.length <= 0) {
            pblock.innerHTML = "Search the EmacsWiki";
            return;
        }
        var previewTemplate = "Search on EmacsWiki: ${query}";
        var previewData = {query: searchText};
        pblock.innerHTML = CmdUtils.renderTemplate(previewTemplate, previewData);
    }
});
