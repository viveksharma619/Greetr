;(function(global, $){
    "use strict";
    var versionNumber = '1.0.0';
    var supportedLanguages = ['es','en'];
    //hidden within IIFE and not directly accessible

    //greeting  
    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };
    //formal greeting
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };
    // log messages according to languages
    var logMessages = {
        en: 'Logged In',
        es: 'Inició sesión'
    }
    // a new object
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
        },
        HTMLGreeting: function(selector, formal){
            if(!$){
                throw 'jQuery instance not found!';
            }

            if(!selector){
                throw 'Missing jQuery selector';
            }
            var msg;
            if(formal){
                msg = this.formalGreeting();
            }
            else{
                msg = this.greeting();
            }
            $(selector).html(msg);

            //method chaing
            return this;
        }
    };

    Greetr.init =  function(firstName, lastName, language){
        var self = this;
        self.firstName = firstName || 'John';
        self.lastName = lastName || 'Doe';
        self.language = language || 'en';

        self.validate();
    }
    // trick borrowed from Jquery
    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr;
}
(window, jQuery));