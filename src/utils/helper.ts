import chalk from 'chalk';
import { EnvironmentFile } from '../enums/environment.enum';
import { type CommonEnvKeys } from '@/types/environment.type';

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
  const divider = HR('red', '~', 40);
  const envFile = EnvironmentFile[key];
  const defaultEnvFile = EnvironmentFile.DEFAULT;
  const envNotFoundMessage = chalk.red.bold('Environment file not found!!');
  const fileNotFoundMessage = `${chalk.greenBright(
    defaultEnvFile
  )} or ${chalk.greenBright(envFile)} is required`;
  return `
    \r${divider}\n
    \r${envNotFoundMessage}\n
    \r${divider}\n
    \r${fileNotFoundMessage}\n
    \r${chalk.bold('Try one of the following')}:\n
    \r${envScriptChalk(envFile)}\n
    \r${envScriptChalk(defaultEnvFile)}\n
    \r${divider}
  `;
};
