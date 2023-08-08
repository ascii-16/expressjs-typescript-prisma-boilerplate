/**
 * The default argument type for decorators, represented as an array with a single unknown type.
 */
export type DefaultDecoratorArgs = [unknown];

/**
 * Represents the arguments that a decorator accepts. If the generic type `T` extends an empty tuple,
 * the default arguments are `[string, number]`. Otherwise, it uses the provided type `T`.
 */
export type DecoratorArgs<
  T extends DefaultDecoratorArgs = DefaultDecoratorArgs,
> = T extends never[] ? [string, number] : T;

/**
 * Function type definition for a decorator. This function can accept multiple arguments based on `TArgs`
 * and has a return type `TReturn` which defaults to `void`.
 */
export type DecoratorFn<TArgs extends DecoratorArgs, TReturn = void> = (
  ...args: TArgs
) => TReturn;

/**
 * Function type definition for a descriptor. This function accepts arguments of type `TArgs`
 * and has a return type `TReturn` which defaults to `void`.
 */
export type DescriptorFn<TArgs, TReturn = void> = (args: TArgs) => TReturn;

/**
 * Represents a typed property descriptor for an object. The descriptor is associated with
 * arguments that the decorator accepts, based on type `TArgs`.
 */
export type Descriptor<
  TArgs extends DefaultDecoratorArgs = DefaultDecoratorArgs,
> = TypedPropertyDescriptor<DescriptorValue<TArgs>>;

/**
 * Represents a generated decorator. This decorator is applied to a target of type `T`,
 * modifies a method or property with key `key`, and takes a descriptor of type `Descriptor<TArgs>`.
 */
export type GeneratedDecorator<
  T = unknown,
  TArgs extends DefaultDecoratorArgs = DefaultDecoratorArgs,
> = (
  target: T,
  key: string,
  descriptor: Descriptor<TArgs>
) => Descriptor<TArgs>;

/**
 * Represents the target context in which a decorator or function is invoked.
 * This can be used to bind the `this` value and accept additional decorator arguments.
 */
export type ContextTarget<This, TReturn> = (
  this: This,
  ...args: DecoratorArgs
) => TReturn;

/**
 * Represents the value type for a descriptor, which is a function accepting decorator arguments.
 */
export type DescriptorValue<
  TArgs extends DefaultDecoratorArgs = DefaultDecoratorArgs,
> = (...args: DecoratorArgs<TArgs>) => any;
