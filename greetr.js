(function(global, $){
    "use strict";
    var versionNumber = '1.0.0';
    var supportedLanguages = ['es','en'];

    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };

    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };

    var logMessages = {
        en: 'Logged In',
        es: 'Inició sesión'
    }

    var Greetr = function(firstName, lastName, language){
        return new Greetr.init(firstName, lastName, language);
    }
    
    Greetr.prototype = {
        fullname : function(){
            return this.firstName + ' ' + this.lastName;
        }
    };

    Greetr.init =  function(firstName, lastName, language){
        var self = this;
        self.firstName = firstName || 'John';
        self.lastName = lastName || 'Doe';
        self.language = language || 'en';
    }

    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr;
}
(window, jQuery));