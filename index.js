const fs = require('fs')
var file = "./core.asar"

if(process.argv[2] == "restore") file = "./core-backup.asar"

var path = ""

if(process.platform == "darwin") {
    path = process.env.HOME + "/Library/Application\ Support/discord"
}

if(process.platform == "win32") {
    path = process.env.APPDATA + "/Local/Discord"
}

const folders = fs.readdirSync(path, {withFileTypes: true})
.filter(file => file.isDirectory() == true)
.map(file => file.name)

const array = []

folders.forEach(f => {
    const num = parseInt(f.replaceAll('.', '').replaceAll('app-', ''))
    if(isNaN(num)) return
    else array.push([num, f])
})

const folder = array.sort((a, b) => b[0] - a[0])[0][1]

check(path + '/' + folder + '/modules/')
function check(def) {
    const folders2 = fs.readdirSync(def, {withFileTypes: true})
    .filter(file => file.isDirectory() == true)
    .map(file => file.name)
    folders2.forEach(f => {
        if(f == 'discord_desktop_core') fs.writeFileSync(def + f + '/core.asar', fs.readFileSync(file))
        else if(f.includes('discord_desktop_core')) check(def + f + '/')
    })
}