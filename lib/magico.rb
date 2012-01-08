module Magico
  require 'magico/version'

  if ::Rails.version < "3.1"
    raise StandardError, "Magico needs Rails 3.1 or later"
  else
    Engine = Class.new(::Rails::Engine)
  end
end
