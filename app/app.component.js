(function(app) {
    
  app.AppComponent =
    ng.core.Component({
      selector: '.my-app',
      templateUrl: '/app/header.html',
      styles: ['h1 {color:red}']
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));