(function () {
    var speakWord = "Hello";

    var helloSpeaker = {
        speak: function (name) {
            console.log(speakWord + " " + name);
        }
    };

    window.helloSpeaker = helloSpeaker;

})();

(function () {
    var speakWord = "Goodbye";

    var byeSpeaker = {
        speak: function (name) {
            console.log(speakWord + " " + name);
        }
    };

    window.byeSpeaker = byeSpeaker;

})();

(function () {
    var names = ["John", "Jane", "Jim", "Jill", "Bob"];

    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();

        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();

(function () {
    var names = ["John", "Jane", "Jim", "Jill", "Bob"];
    var shortNames = [];
    var longNames = [];

    for (var i = 0; i < names.length; i++) {
        if (names[i].length <= 3) {
            shortNames.push(names[i]);
        } else {
            longNames.push(names[i]);
        }
    }

    console.log("Short names:", shortNames);
    console.log("Long names:", longNames);
})();
