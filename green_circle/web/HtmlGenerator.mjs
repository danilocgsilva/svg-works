export default class HtmlGenerator
{
    constructor() {
        this._h1 = null
        this._title = "Document"
    }

    set h1(h1Text) {
        this._h1 = h1Text
    }

    set title(title) {
        this._title = title
    }
    
    generateContent() {
        
        const topContent = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${this._title}</title>
        </head>
        <body>`

        const bottomContent = `</body>
        </html>`

        let htmlContent = ""
        htmlContent += topContent
        if (this._h1) {
            htmlContent += `<h1>${this._h1}</h1>`
        }
        htmlContent += bottomContent
        return htmlContent
    }
}


