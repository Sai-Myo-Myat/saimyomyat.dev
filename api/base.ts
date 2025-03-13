export const useQueryFunctionWrapper = <TArguments extends any, TResult>(
  func: (args: TArguments) => Promise<TResult>,
  args: TArguments
) => {
  return async () => {
    return await func(args);
  };
};
