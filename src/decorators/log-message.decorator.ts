import { type DescriptorFn, createDecorator } from '@/decorators/utils';

interface LogMessageDecoratorArgs {
  message: string;
}

type LogMessageDescriptor = DescriptorFn<LogMessageDecoratorArgs, void>;

const descriptorFn: LogMessageDescriptor = ({ message }) => {
  console.log(message);
};

/**
 * This is a sample decorator created using the `createDecorator()` method.
 * The same format can be used to create your own custom decorators.
 */
const LogMessage = <TArgs = unknown>(args: LogMessageDecoratorArgs) => {
  return createDecorator<
    LogMessageDecoratorArgs,
    TArgs,
    ReturnType<LogMessageDescriptor>
  >(descriptorFn, args);
};

export default LogMessage;
