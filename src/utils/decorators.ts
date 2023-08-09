import {
  type ContextTarget,
  type DefaultDecoratorArgs,
  type DescriptorFn,
  type GeneratedDecorator,
} from '@/types/decorators.type';
import logger from '@/lib/logger';

/**
 * Creates a decorator that wraps the original method with an additional function.
 * @param descriptorFn - The additional function to execute before the original method.
 * @param descriptorArgs - Arguments for the descriptor function.
 * @returns The generated decorator function.
 */
export function createDecorator<
  TFnArgs,
  TArgs extends DefaultDecoratorArgs = DefaultDecoratorArgs,
  TReturn = void,
>(
  descriptorFn: DescriptorFn<TFnArgs, TReturn>,
  descriptorArgs: TFnArgs
): GeneratedDecorator<unknown, TArgs> {
  return function (_target, key, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = async function (...args) {
      logger.info(`Executing decorator before method: ${key}`);
      descriptorFn(descriptorArgs);
      logger.info('Decorator executed');
      return originalMethod ? originalMethod.apply(this, args) : null;
    };
    return descriptor;
  };
}

/**
 * Creates a context-aware decorator.
 * @param context - The context for the decorator.
 * @param _target - The target context.
 * @param descriptorFn - The additional function to execute before the original method.
 * @param descriptorArgs - Arguments for the descriptor function.
 * @returns The generated context-aware decorator.
 */
export function createContextDecorator<
  This,
  TReturn,
  TFnArgs,
  TArgs extends DefaultDecoratorArgs = DefaultDecoratorArgs,
>(
  context: ClassMethodDecoratorContext<This, ContextTarget<This, TReturn>>,
  _target: ContextTarget<This, TReturn>,
  descriptorFn: DescriptorFn<TFnArgs, TReturn>,
  descriptorArgs: TFnArgs
): GeneratedDecorator<ContextTarget<This, TReturn>, TArgs> {
  const methodName = String(context.name);
  logger.info(`Executing decorator for ${methodName}`);
  return function (_target, _key, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = async function (...args) {
      descriptorFn(descriptorArgs);
      return originalMethod ? originalMethod.apply(this, args) : null;
    };
    return descriptor;
  };
}
