import { createDecorator } from '@/decorators/utils';

interface LogMessageDecoratorArgs {
  message: string;
}

const decoratorFn = ({ message }: LogMessageDecoratorArgs) => {
  console.log(message);
};

/**
 * This is a sample decorator created using the `createDecorator()` method.
 * The same format can be used to create your own custom decorators.
 */
const LogMessage = (args: LogMessageDecoratorArgs) => {
  return createDecorator<LogMessageDecoratorArgs>(decoratorFn, args);
};

export default LogMessage;
