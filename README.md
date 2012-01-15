# Magico

Auto-update for your CSS stylesheets without refreshing the browser

## Requirements

* Rails
* jQuery
* [WebSockets-compatible browser](http://caniuse.com/#search=Websocket)

## Usage

Add this line to your application's Gemfile:

    group :development do
      gem 'magico'
    end

Add this to your layout (after you load jQuery):

    <% if Rails.env.development? %>
      <%= javascript_include_tag 'magico' %>
    <% end %>

Start the server in your Rails app path:

    $ magico

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Added some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
