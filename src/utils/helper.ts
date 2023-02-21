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

const createEnvSnippet = (fileName: string) => {
  const scriptChalk = chalk.bgBlueBright.bold;
  return `${scriptChalk(` cp .env.example ${fileName} `)}`;
};

export const envFileNotFoundError = (key: CommonEnvKeys): string => {
  const fileNameMessage = `${chalk.yellowBright(
    EnvironmentFile.DEFAULT
  )} or ${chalk.yellowBright(EnvironmentFile[key])} is required`;
  const envNotFoundMessage = chalk.red.bold('Environment file not found!!');
  const divider = HR('red', '-', 40);
  return `
    \r${divider}\n
    \r${envNotFoundMessage}\n
    \r${fileNameMessage}\n
    \rTry the following:\n
    \r${createEnvSnippet(EnvironmentFile[key])}\n
    \r${createEnvSnippet(EnvironmentFile.DEFAULT)}\n
    \r${divider}
  `;
};
