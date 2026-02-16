import chalk from 'chalk'
import dedent from 'dedent-js';

const printError = (err) => {
    console.log(chalk.bgRed('  ERROR   ') + err);
};

const printSuccess = (msg) => {
    console.log(chalk.bgGreen('  SUCCESS   ') + msg);
};

const printHelp = () => {
    console.log(
        dedent`${chalk.underline(chalk.bgYellow('  HELP  '))}
        Без параметров -> вывод погоды
        -s [CITY] -> установка города
        -h -> вывод помощи
        -t [APIKEY] -> сохранение токена
        `);
};

export { printError, printSuccess, printHelp };