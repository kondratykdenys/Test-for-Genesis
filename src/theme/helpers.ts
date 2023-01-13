export const spacing = (...arg: [number, ...number[]]) =>
  arg.reduce((acc, space) => `${acc} ${space * 8}px`, '')
