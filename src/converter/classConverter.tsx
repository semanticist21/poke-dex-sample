const strsToClass = (...args: string[]) =>
  args.reduce((a, b) => (b.trim() === "" ? a : `${a} ${b.trim()}`));

export default strsToClass;
