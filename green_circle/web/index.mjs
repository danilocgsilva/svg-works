import http from "http"
import HtmlGenerator from "./HtmlGenerator.mjs";

const htmlGenerator = new HtmlGenerator();
htmlGenerator.h1 = "The content title shown to user"
htmlGenerator.title = "The Document Title"

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(
        htmlGenerator.generateContent()
    );
}).listen(3000, "0.0.0.0");