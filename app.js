#!/usr/bin/env node
const yargs = require('yargs');
yargs.command({
    command: "current",
    describe: "Текущая дата",
    handler({year, y, month, m, date, d}) {
        const currentDate = new Date();
        if (year || y) return console.log(currentDate.getFullYear());
        if (month || m) return console.log(currentDate.getMonth() + 1);
        if (date || d) return console.log(currentDate.getDate());
        console.log(String(currentDate));
    }
})
yargs.command({
    command: "add",
    describe: "Прибавить к текущей дате...",
    handler({year, y, month, m, date, d}) {
        const currentDate = new Date();
        if (year || y) {
            const thisYear = (y === undefined ? year : y);
            console.log(String(currentDate.getFullYear() + thisYear));
        }
        if (month || m) {
            const thisMonth = (m === undefined ? month : m);
            console.log(String(currentDate.getMonth() + thisMonth));
        }
        if (date || d) {
            const day = (d === undefined ? date : d);
            console.log(String(currentDate.getDate() + day));
        }
    }
})
yargs.command({
    command: "sub",
    describe: "Прибавить к текущей дате...",
    handler({year, y, month, m, date, d}) {
        const currentDate = new Date();
        if (year || y) {
            const thisYear = (y === undefined ? year : y);
            console.log(String(currentDate.getFullYear() - thisYear));
        }
        if (month || m) {
            const thisMonth = (m === undefined ? month : m);
            console.log(String(currentDate.getMonth() - thisMonth));
        }
        if (date || d) {
            const day = (d === undefined ? date : d);
            console.log(String(currentDate.getDate() - day));
        }
    }
})

yargs.parse();
