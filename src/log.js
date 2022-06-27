import chalk from 'chalk';
import util from 'util'

export const stats = (string) => {
    console.log(chalk.bgYellow.bold.black(util.inspect(string, {colors:true, depth:null})))
};

export const errors = (string) => {
    console.log(chalk.bold.red(util.inspect(string, {colors:true, depth:null})))
};
export const response = (string) => {
    console.log(chalk.green(util.inspect(string, {colors:true, depth:null})))
};