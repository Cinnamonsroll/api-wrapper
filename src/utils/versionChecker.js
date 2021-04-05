const pkg = require('../../package.json');
const npmReg = 'http://registry.npmjs.org/' + pkg.name;
const fetch = require('node-fetch');
const chalk = require('chalk');

const searchForVersion = async () => {
    try {
        return new Promise(resolve => {
            fetch(npmReg, {}).then(res => res.json()).then(data => {
                const liveVersion = data["dist-tags"].latest;
                const currentVersion = pkg.version;
                if(liveVersion !== currentVersion){
                    console.log(chalk.yellow(`\n============\n`) + chalk.greenBright(`[${pkg.name}]`) + `\nUpdate required!\nCurrent Version: ${currentVersion} New Version: ${liveVersion}\nUpdate by executing: npm i ${pkg.name}@${liveVersion}`+ chalk.yellow(`\n============\n`))
                }
            }).catch((e) => {
                throw new Error(e)
            })
        })
    } catch(e) {
        throw new Error(e)
    }
}

module.exports = searchForVersion