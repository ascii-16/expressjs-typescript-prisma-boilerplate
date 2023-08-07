import logger from '@/lib/logger';

export type DecoratorArgs = [string, number];
export type DecoratorFn<TArgs extends DecoratorArgs, TReturn = unknown> = (
  ...args: TArgs
) => TReturn;
export type DescriptorFn<TArgs, TReturn = unknown> = (args: TArgs) => TReturn;
export type GeneratedDecorator<T = unknown> = (
  target: T,
  key: string,
  descriptor: PropertyDescriptor
) => PropertyDescriptor;
export type ContextTarget<This, TReturn> = (
  this: This,
  ...args: DecoratorArgs
) => TReturn;

/**
 * Creates a decorator that wraps the original method with an additional function.
 * @param descriptorFn - The additional function to execute before the original method.
 * @param descriptorArgs - Arguments for the descriptor function.
 * @returns The generated decorator function.
 */
export function createDecorator<TFnArgs, TReturn = unknown>(
  descriptorFn: DescriptorFn<TFnArgs, TReturn>,
  descriptorArgs: TFnArgs
): GeneratedDecorator {
  return function (_target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = async function (...args: DecoratorArgs) {
      logger.info(`Executing decorator before method: ${key}`);
      descriptorFn(descriptorArgs);
      logger.info('Decorator executed');
      return originalMethod.apply(this, args);
    };
    return descriptor;
  };
}

/**
 * Creates a context-aware decorator.
 * @param context - The context for the decorator.
 * @param _target - The target context.
 * @param decoratorFn - The decorator function to execute.
 * @param decoratorArgs - Arguments for the decorator function.
 * @returns The generated context-aware decorator.
 */
export function createContextDecorator<This, TReturn, TFnArgs>(
  context: ClassMethodDecoratorContext<This, ContextTarget<This, TReturn>>,
  _target: ContextTarget<This, TReturn>,
  descriptorFn: DescriptorFn<TFnArgs, TReturn>,
  descriptorArgs: TFnArgs
): GeneratedDecorator<ContextTarget<This, TReturn>> {
  const methodName = String(context.name);
  logger.info(`Executing decorator for ${methodName}`);
  return function (
    _target: ContextTarget<This, TReturn>,
    _key: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = async function (...args: DecoratorArgs) {
      descriptorFn(descriptorArgs);
      return originalMethod.apply(this, args);
    };
    return descriptor;
  };
}
