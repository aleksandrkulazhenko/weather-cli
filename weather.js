#!/usr/bin/env node
import { getArgs } from "./helper/args.js";
import { printHelp, printError, printSuccess } from "./service/logService.js";
import { saveKeyValue } from "./service/storageService.js";

const saveToken = async (token) => {
    try {
        await saveKeyValue('token', args.t);
        printSuccess('Токен сохранен');
    } catch (error) {
        printError(error.message);
    }
};
const initCLI = () => {
    const args = getArgs(process.argv);
    console.log(args);
    if (args.h) {
        printHelp();
    }
    if (args.s) {
        // Сохранение города
    }
    if (args.t) {
        // Сохранение токена
        return saveToken(args.t);
    }
    // Вывод погоды
};

initCLI();