var path = require("path");
var util = require('util');
var v8 = require("v8");
var readline = require("readline");

console.log(__dirname);
console.log(path.basename(__filename));

// process.argv = speichert an Modul übergebene Argumente als Array

process.stdout.write();

process.stdin.on("data", function(data) { 
   Array.push(data.toString().trim());
   process.exit();
});

process.on("exit", function () {});

process.exit();

// #####

var waitTime = 3000;

console.log("Wait for it ...");

setTimeout(function() {
    console.log("done");
}, waitTime);

// #######

// erstellt Verzeichnispfade
var dirTemp = path.join(__dirname, "templates");

// Ereignisse mit Datum und Uhrzeit loggen
util.log(v8.getHeapStatistics);

// #######

//event-emitter
var events = require("events");
var emitter = new events.EventEmitter();

emitter.on("customEvent", function(message, status) {
  console.log(`${status}: ${message}`);
});

emitter.emit('customEvent', "Hello World", 200);

// Vererbung

util.inherits(Object, Inheritance);

//Listener
bla.on('customEvent');

//Event-Emitter
bla.emit('customEvent', something);

//Module exportieren 
module.exports = Person;
//Module importieren
var Person = require = ("./lib/Person.js");

//Kommandozeilen Programme ausführen
//Am besten für begrenzte, abgeschlossene Prozesse
var exec = require('child_process').exec;
exec.("explorer .", function (err, stdout) {

    if (err) {
        throw err;
    }

    console.log("Listening Finished");
    console.log(stdout);
});

// Spawn
// Für offene, andauernde Prozesse
var spawn = require('child_process').spawn;
var cp = spawn("node", )

// Filesystem-Module fs
var fs = require('fs');
// Dateiordner synchron einlesen
var files = fs.readdirSync('./lib');
// Dateiordner asynchron einlesen
fs.readdir('./lib', function(err, files) {
  if (err) {
      throw err;
  }
  
  console.log(files);
   
});

// Dateiinhalte lesen
var fs = require('fs');
var contents = fs.readFileSync("./lib/test.txt", "UTF-8");
fs.readFile("file.js", "UTF-8");

// Dateiinhalte schreiben
var fs = require('fs');
var filename = "sample.md";
var md = `

Text

`;

fs.write(filename, md.trim(), function(err) {
    if(err) {
        throw err;
    }
    console.log(`${filename} created`);
});

// Inhalte an bestehende Dateien anheften
fs.appendFile(filename, " neuer Text");

// Auf Existenz von Dateien und Ordnern prüfen
if (fs.existsSync(folder)) {
    console.log("exits");
} else {
    fs.mkdir(folder);
};

// Synchrone Prozesse Error-Handling
try {
  fs.unlinkSync("./lib/config.json"); // unlink löscht Datei
} catch {
    console.log(err);
}

// "throw err" stop das laufende Programm
// "console.log(err)" gibt nur Message auf Konsole aus. Programm läuft weiter

// Lösche nicht-leere Verzeichnisse
fs.readdirSync("./logs").forEach(function(fileName) {
    fs.unlinkSync("./logs/" + fileName);
});

// Streams lesen
var stream = fs.createReadStream("./chat.log", "UTF-8");
var data = "";

stream.once("data", function() {
    console.log("\n\n\n");
    console.log("Started Reading File");
    console.log("\n\n\n");
});

stream.on("data", function(chunk) {
  process.stdout.write(`  chunk: ${chunk.length} | `);

  data += chunk;
});

stream.on("end", function() {
    console.log("\n\n\n");
    console.log(`Finished Reading File ${data.length}`);
    console.log("\n\n\n");
});

// Stream schreiben
var stream = fs.createWriteStream(fileName);
stream.write(`Header\n\n`);
stream.write(`* ${randomInputData.trim()}\n`);


//#############

// https-module requests 
var https = require('https');
var fs = require("fs");

var options = {
    host: "en.wikipedia.org",
    port: 443,
    path: "/wiki/George_Washington",
    method: "GET"
};

var req = https.request(options, function(res) {
    
    var responseBody = "";
    console.log("Request started");
    console.log(`Server Status: ${request.StatusCode}`);
    console.log("Response Headers: %j, res.headers");

    res.setEncoding("UTF-8");

    res.once("data", function(chunk) {
        console.log(chunk);
    });

    res.on("data", function(chunk) {
        console.log(`--chunk-- ${chunk.length}`);
        responseBody += chunk;
    });

    res.on("end", function() {
        fs.writeFile("george-washington.html", responseBody, function(err) {
            if (err) {
                throw err;
            } else {
                console.log("File Downloaded");
            };
        });
    });
});

req.on("error", function() {
    console.log(`problem with request: ${err.message}`);
});

req.end();

// http create webserver (ohne Zertifikat)
var http = require("http");
var server = http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hello World");
});

server.listen(3000);
console.log("Server listening on port 3000");

