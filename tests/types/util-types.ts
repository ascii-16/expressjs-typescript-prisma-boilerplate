export interface ApiResponse<T> {
  message: string;
  data: T;
}

/**
 * `PartialRequired` makes a part of an interface or type required
 *
 * @typeParam `T` - input type
 * @typeParam `U` - required keys
 * @returns new type with input keys as required
 */
export type PartialRequired<T, U extends keyof T> = Required<Pick<T, U>> &
  Partial<Exclude<T, U>>;
