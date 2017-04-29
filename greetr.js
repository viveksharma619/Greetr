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
        fullname: function(){
            return this.firstName + ' ' + this.lastName;
        },
        validate: function(){
            if(supportedLanguages.indexOf(this.language) === -1){
                throw 'Language not supported';
            }
        },
        greeting: function(){
            return greetings[this.language] + ' ' + this.firstName + ' ' + this.lastName;
        },
        formalGreeting: function(){
            return formalGreetings[this.language] + ' ' + this.fullname();
        },
        greet: function(formal){
            var msg;
            if(formal){
                msg = this.formalGreeting();
            }
            else{
                msg = this.greeting();
            }
            if(console){
                console.log(msg);
            }
            //makes method chainable
            return this;
        },
        log: function(){
            if(console){
                console.log(logMessages[this.language]+ ':' + this.fullname());
            }
            //makes method chainable
            return this;
        },
        setLang: function(lang){
            this.language = lang;
            this.validate();
            return this;
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