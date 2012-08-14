# -*- encoding: utf-8 -*-
require File.expand_path('../lib/magico/version', __FILE__)

Gem::Specification.new do |gem|
  gem.authors       = ["Michael Rykov"]
  gem.email         = ["michael@gemfury.com"]
  gem.description   = %q{Live stylesheet updates for Rails}
  gem.summary       = %q{Instantly autoupdate stylesheets}
  gem.homepage      = "https://www.github.com/gemfury/magico"

  gem.executables   = `git ls-files -- bin/*`.split("\n").map{ |f| File.basename(f) }
  gem.files         = `git ls-files`.split("\n")
  gem.test_files    = `git ls-files -- {test,spec,features}/*`.split("\n")
  gem.name          = "magico"
  gem.require_paths = ["lib"]
  gem.version       = Magico::VERSION

  gem.add_runtime_dependency 'eventmachine', '>= 0.12.0'
  gem.add_runtime_dependency 'em-websocket', '~> 0.3.0'
  gem.add_runtime_dependency 'listen', '~> 0.4.0'
end
