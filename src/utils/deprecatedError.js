const chalk = require('chalk');
const name = chalk.redBright(`[${require('../../package.json').name} | Deprecation]`);

const deprecation = (funName, reason) => {
    let endReason = reason;
    if(!endReason) endReason = `No reason provided!`;

    return console.warn(name, chalk.yellowBright(funName), chalk.yellow(`will be deprecated soon, Reason:`), chalk.yellowBright(endReason));
}

module.exports = deprecation;