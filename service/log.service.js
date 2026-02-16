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

const logWeather = (response) => {
    console.log(
        dedent`${chalk.underline(chalk.bgGreenBright('  WEATHER  '))} Погода в городе ${response.location.name}
        ${response.current.condition.text}
        Температура: ${response.current.temp_c} (ощущается как ${response.current.feelslike_c})
        Влажность: ${response.current.humidity}%
        Скорость ветра: ${response.current.wind_kph} км/ч
        `);
}

export { printError, printSuccess, printHelp, logWeather };