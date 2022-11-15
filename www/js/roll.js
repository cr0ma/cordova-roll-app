(function($) {
    $.widget("custom.roll", {

        // init of options: should all contain a starting value.
        options: {
            // exp: $('input#input-roll').value(),
            exp: "",
            notation: RegExp(/^\s*(\d+)?\s*d\s*(\d+)\s*(.*?)\s*$/),
            modifiers: RegExp(/([+-]\s*\d+)/g),
            mods: [],
            match: "",
            rollexp: "",
            advantage: 0,
            rolled: 0,
            dice: 0,
            results: [],
            _faceToShow: "",
            score: 0,
        },

        // use this.options.? to access values
        _create: function() {
            if (typeof this.options.exp === 'string') {
                console.log(this.options.exp);
                this.options.match = this.options.exp.match(this.options.notation);
                if (this.options.match) {

                    console.log(this.options.match);
                    if (this.options.match[1]) {
                        this.options.rolled = parseInt(this.options.match[1]);
                    }

                    if (this.options.match[2]) {
                        this.options.dice = parseInt(this.options.match[2]);
                    }

                    if (this.options.match[3]) {
                        var mod = this.options.match[3].match(this.modifiers);
                        for (var i = 0; i < mod.length; i++) {
                            this.options.mods += parseInt(mod[i].replace(/\s/g, ''));
                        }
                    }
                } else {
                    parseInt(this.options.dice);
                }

                if (isNaN(this.options.dice)) {
                    // lmao what?
                }

                console.log(this.options.match);
                for (let i = 0; i < this.options.rolled; i++) {
                    if (this.options.dice !== 0) {
                        num = Math.floor(Math.random() * this.options.dice + 1);
                    } else {
                        num = 0;
                    }

                    this.options.results.push(num);
                }

                let s = 0;
                for ( let i = 0; i < this.options.results.length; i++) {
                    s += this.options.results[i];
                    this.options.score = s;
                }

                // this.options._faceToShow = "show-" + this.options.results[0];
                this.options._faceToShow = this.options.results[0];
            }
        },

        faceToShow: function() {
            console.log(this.options._faceToShow);
            return this.options._faceToShow;
        }
    });
}(jQuery));
