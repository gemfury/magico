/*globals console jQuery */

/* Magico: CSS Autorefresh server */
Magico = {
  connect: function() {
    var klass  = window.WebSocket || window.MozWebSocket;
    if(!klass) {
      console.log('Magico is not compatible with your browser');
    } else {
      var socket = new klass('ws://' + window.location.hostname + ':8787/');
      socket.onopen = function () {
        console.log("Connected to Magico server!");
      };

      socket.onmessage = function(message) {
        var files = message.data.split(','); // TODO: Use JSON
        var re = "(" + files.join('|') + ")(\.self)?\.css";
        Magico.reloadStylesheets(new RegExp(re));
      };
    }
  },

  reloadStylesheets: function(filter) {
    var assetId = new Date().getTime();

    if(!filter) {
      console.log("Reloading styles @ " + assetId);
    }

    jQuery('link').each(function() {
      var elem = $(this);
      if(elem.attr('rel') === 'stylesheet') {
        // Update the href with a new timestamp
        var href = elem.attr('href');
        if(!filter || href.match(filter)) {
          elem.attr('href', href.replace(/\d+$/, assetId));
          if(filter) console.log("Updated " + href);
        }
      }
    });
  }
};

/* Connect to Magico: CSS Autorefresh server */
Magico.connect();
