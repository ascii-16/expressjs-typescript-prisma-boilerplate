# Express + Typescript + Prisma boilerplate

## Stack

[![My Tech Stack](https://github-readme-tech-stack.vercel.app/api/cards?fontWeight=normal&align=left&titleAlign=center&lineCount=4&theme=github_dark&hideTitle=true&line1=node.js,node.js,ddbfef;typescript,typescript,543e05;&line3=eslint,eslint,3663f5;prettier,prettier,2ef01c;husky,husky,9d8ed0;commitlint,commitlint,b2f3e7;&line2=express,express,bd3ea6;prisma,prisma,09acb9;&line4=jest,jest,de5bd6;supertest,supertest,cb1288;swagger,swagger,172770;)](https://github-readme-tech-stack.vercel.app/api/cards?align=center&titleAlign=center&lineCount=4&theme=github_dark&hideTitle=true&line1=node.js,node.js,ddbfef;typescript,typescript,543e05;&line3=eslint,eslint,3663f5;prettier,prettier,2ef01c;husky,husky,9d8ed0;commitlint,commitlint,b2f3e7;&line2=express,express,bd3ea6;prisma,prisma,09acb9;&line4=jest,jest,de5bd6;supertest,supertest,cb1288;swagger,swagger,172770;)

<details>
  <summary>Stack info</summary>
| Feature              | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Node.js              | `Node.js` is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a web browser. It is commonly used for building server-side applications, and provides a powerful set of features and modules for working with the file system, networking, and other aspects of system-level programming.                                                                                                                                                                                                                                                                                                                           |
| Express              | `Express` is a popular and flexible Node.js web application framework used for building web applications, APIs, and microservices. It provides a simple and intuitive API for handling HTTP requests and responses, and can be easily extended with middleware and other third-party modules.                                                                                                                                                                                                                                                                                                                |
| TypeScript           | `TypeScript` is a strongly-typed superset of JavaScript that adds features such as static type checking, interfaces, and classes to the language. It can help catch common programming errors early in the development process, and provides better code documentation and editor support than plain JavaScript. TypeScript can be used to write both client-side and server-side code, and is often used in combination with popular frameworks and libraries such as React, Angular, and Node.js.                                                                                                                                                                                    |
| Prisma               | `Prisma` is a modern database toolkit used for building scalable and performant database access in your application. It provides a type-safe API for querying the database, and can generate TypeScript types and GraphQL schemas based on your database schema. Prisma supports multiple databases including Postgres, MySQL, and SQLite. It also provides features such as migrations, seeding, and data modeling that can help simplify your database management.                                                                                                                                                                       |
| Eslint               | `Eslint` is a popular linting tool used to identify and report on patterns found in JavaScript code. It can be used to help maintain a high level of code quality and consistency throughout your project.                                                                                                                                                                                                                                                                                                                                                                                                 |
| Prettier             | `Prettier` is a code formatter that helps ensure consistent code style. It can be used to help maintain a high level of code quality and consistency throughout your project.                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Husky                | `Husky` is a tool that enables you to use git hooks as part of your development workflow. Git hooks are scripts that are run automatically in response to certain actions, such as committing code changes or pushing code to a remote repository. With `husky`, you can set up git hooks to run commands such as linting or running tests before code is committed, helping to ensure that code quality and standards are maintained.                                                                                                                                                                                                                          |
| Ts-node-dev          | `ts-node-dev` is a development tool that provides fast TypeScript compilation and automatic restarting of the Node.js server when changes are detected. This can help speed up the development process by eliminating the need to manually recompile TypeScript code and restart the server every time a change is made.                                                                                                                                                                                                                                                                     |
| Swagger              | `Swagger` is an open source tool used to design, build, document, and consume RESTful APIs. It provides a graphical user interface for designing APIs, as well as tools for generating documentation and client code. With `swagger`, you can create a well-documented API that is easy to consume, making it easier for developers to integrate your application with other services.                                                                                                                                                                                                                                                                 |
| Jest                 | `Jest` is a popular JavaScript testing framework used for unit testing. It provides an easy-to-use API for writing tests,
</details>

## Run Locally

Clone the project

```bash
  git clone https://github.com/akhil-neoito/expressjs-typescript-prisma-boilerplate.git
```

Go to the project directory

```bash
  cd expressjs-typescript-prisma-boilerplate
```


## Scripts
Following are the list of predefined scripts available in the app

| Script Name     | Description                                   | Command                 |
|-----------------|-----------------------------------------------|-------------------------|
| dev             | Runs app in development mode with ts-node-dev | npm run dev             |
| build           | Builds the app with tsc to dist folder        | npm run build           |
| start           | Starts the build                              | npm run start           |
| prod            | Builds and runs the app in production mode    | npm run prod            |
| prisma:generate | Generates prisma client types                 | npm run prisma:generate |
| prisma:migrate  | Runs prisma db migration                      | npm run prisma:migrate  |
| prisma:seed     | Seeds db                                      | npm run prisma:seed     |
| prisma:studio   | Opens prisma studio                           | npm run prisma:studio   |
| lint            | Lints the app with eslint                     | npm run lint            |
| lint:fix        | Lints and fixes the app with eslint           | npm run lint:fix        |
| format          | Formats the app with eslint                   | npm run format          |
| commit          | Opens commitizen                              | npm run commit          |
| test            | Runs tests                                    | npm run test            |
| clean           | Cleans autogenerated folders and files        | npm run clean           |


## Folder structure

```
├── dist
├── logs
├── prisma
├── public
├── src
└── tests
```

| Folder     | Description                                  |
|------------|----------------------------------------------|
| dist       | Build folder. Would be auto generated by tsc |
| logs       | Contains log files                           |
| prisma     | Primsa schema, seeds etc.                    |
| public     | Static resources                             |
| src        | Source folder                                |
| tests      | Containes test files                         |

### src

The source directory contains the following folders

```
├── config
├── dto
├── enums
├── lib
├── middlewares
├── modules
├── types
└── utils
```

| Folder  | Description                                                                                                                                                                                                                                                                                                                                                                 |
|-------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| config      | Contains configuration files for the whole app and different libraries.                                                                                                                                                                                                                                                                                                             |
| dto         | Contains Data Transfer Objects (DTOs) which are used to transfer data between different layers of the app.                                                                                                                                                                                                                                                                                                                   |
| lib         | Contains any external libraries or modules that the app may depend on, as well as any custom utility functions or classes that you have written yourself. This can include things like a custom logger, validation functions, or other commonly used functionality that doesn't fit neatly into any of the other folders.                                                                                                                                      |
| middlewares | Contains middleware functions which can be used to modify requests and responses as they pass through the app.                                                                                                                                                                                                                                                                                                                   |
| modules     | Contains the main modules of the app, each of which can contain submodules, controllers, services, and other components.                                                                                                                                                                                                                                                |
| types       | Contains type definitions which can be used throughout the app to ensure type safety and consistency.                                                                                                                                                                                                                                                                   |
| utils       | Contains utility functions or classes that can be used throughout the app for common tasks, such as string manipulation, date formatting, or math calculations. These functions may not fit neatly into any of the other folders, but are still useful components of the app.                                                                                      |


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
