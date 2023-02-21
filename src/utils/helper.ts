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

export const envFileNotFoundError = (key: CommonEnvKeys) => {
  const fileNameMessage = `${chalk.yellowBright(
    EnvironmentFile.DEFAULT
  )} and ${chalk.yellowBright(EnvironmentFile[key])} files not found`;
  return `
    \r${HR('red', '-', 50)}\n
    \r${fileNameMessage}\n
    \rOne of them is required\n
    \rTry ${chalk.bgCyan.bold('cp .env.example .env')}\n
    \r${HR('red', '-', 50)}
  `;
};
