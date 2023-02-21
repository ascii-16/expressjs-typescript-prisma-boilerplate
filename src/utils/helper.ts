import chalk from 'chalk';
import { type CommonEnvKeys, EnvironmentFile } from './enums/environment.enum';

export type ChalkColor = typeof chalk.Color;

export const HR = (
  color: ChalkColor = 'white',
  char: string = '-',
  length: number = 60
): string => {
  return chalk[color](char.repeat(length));
};

const envScriptChalk = (fileName: string) => {
  const scriptChalk = chalk.bgBlueBright.bold;
  return `${scriptChalk(` cp .env.example ${fileName} `)}`;
};

export const envFileNotFoundError = (key: CommonEnvKeys): string => {
  const divider = HR('red', '-', 40);
  const envNotFoundMessage = chalk.red.bold('Environment file not found!!');
  const fileNotFoundMessage = `${chalk.yellowBright(
    EnvironmentFile.DEFAULT
  )} or ${chalk.yellowBright(EnvironmentFile[key])} is required`;
  return `
    \r${divider}\n
    \r${envNotFoundMessage}\n
    \r${fileNotFoundMessage}\n
    \rTry the following:\n
    \r${envScriptChalk(EnvironmentFile[key])}\n
    \r${envScriptChalk(EnvironmentFile.DEFAULT)}\n
    \r${divider}
  `;
};
