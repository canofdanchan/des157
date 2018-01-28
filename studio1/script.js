console.log("reading js");

"use strict";

document.f.onsubmit = processForm;
document.f.onreset = resetForm;

var horoscope = document.getElementById("horoscope");
var results = document.getElementById("results");

function processForm() {

    var sign = document.f.sign.value;
    var unit = document.f.unit.value;
    var noun = document.f.noun.value;
    var number = document.f.number.value;
    var adj1 = document.f.adj1.value;
    var verb = document.f.verb.value;
    var adj2 = document.f.adj2.value;

    horoscope.innerHTML = "<h2><span>" + sign + "</span></h2> Our stars work in mystical but necessary ways. For every <span>" + unit + "</span> of <span>" + noun + "</span> that you put out into the world, <span>" + number + "</span> more will come back to you, so be careful. If everything seems <span>" + adj1 + "</span> at this current moment in your life, remember that it won't last forever. Try to focus your energy on <span>" + verb + "</span> instead, while you let this pass. Your sign is known for being <span>" + adj2 + "</span>, a trait that will help guide you during these <span>" + adj1 + "</span> times.";

    results.setAttribute('class', 'show');
    return false;
}

function resetForm() {
    horoscope.html = "";
    results.setAttribute('class', 'hide');
}
