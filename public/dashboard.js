function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

readTextFile("asset-manifest.json", function(text) {
    var data = JSON.parse(text);
    document.getElementById("main").remove();
    var script = document.createElement("script");
    script.src = data["main.js"];
    document.getElementById("container").appendChild(script);
});