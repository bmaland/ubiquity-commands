desc "Combines all the commands' js into a single file"
task :combine_js do
  `cat commands/*.js > ubiquity.js`
end

task :publish => [ :combine_js ] do
  `scp ubiquity.js chrononaut.net:/var/www/ubiquity.chrononaut.net/`
  `scp commands/*.js chrononaut.net:/var/www/ubiquity.chrononaut.net/commands/`
end

task :default => :publish
