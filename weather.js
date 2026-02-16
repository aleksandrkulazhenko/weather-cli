#!/usr/bin/env node
import axios from "axios";
import { getArgs } from "./helper/args.js";
import { getWeather } from "./service/api.service.js";
import { printHelp, printError, printSuccess, logWeather } from "./service/log.service.js";
import { getKey, saveKeyValue, TOKEN_DICTIONARY } from "./service/storage.service.js";

const saveToken = async (token) => {
    if (!token.length) {
        printError('Не передан токен')
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token);
        printSuccess('Токен сохранен');
    } catch (error) {
        printError(error.message);
    }
};

const saveCity = async (city) => {
    if (!city.length) {
        printError('Не передан город')
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.city, city);
        printSuccess('Город сохранен');
    } catch (error) {
        printError(error.message);
    }
}

const getForecast = async () => {
    try {
        const city = await getKey(TOKEN_DICTIONARY.city) ?? process.env.CITY
        const weather = await getWeather(city);
        logWeather(weather);
    } catch (error) {
        if (error?.response?.status == 400) {
            printError('Неверно указан город!')
        } else if (error?.response?.status == 401) {
            printError('Неверно указан токен!')
        } else {
            printError(error.message)
        }
    }

}
const initCLI = () => {
    const args = getArgs(process.argv);
    if (args.h) {
        return printHelp();
    }
    if (args.s) {
        // Сохранение города
        return saveCity(args.s)
    }
    if (args.t) {
        // Сохранение токена
        return saveToken(args.t);
    }
    return getForecast();
    // Вывод погоды
};

initCLI();