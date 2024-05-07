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
