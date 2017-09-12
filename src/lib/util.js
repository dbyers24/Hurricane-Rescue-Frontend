// utility files to be used as needed

// hides util.log files from production code
export const log = (...args) => (__DEBUG__ ? console.log(...args) : undefined);

// hides util.error files from production code
export const logError = (...args) =>
  __DEBUG__ ? console.error(...args) : undefined;

// REVIEW:  renders certain things when testing, else return undefined?
export const renderIF = (test, component) => (test ? component : undefined);

// toggles classes
export const classToggler = config =>
  Object.keys(config).filter(key => config[key]).join(' ');

// REVIEW apply map to objects
export const map = (list, ...args) => Array.prototype.map.apply(list, args);

// REVIEW apply filter to objects
export const filter = (list, ...args) =>
  Array.prototype.filter.apply(list, args);

// REVIEW apply reduce to objects
export const reduce = (list, ...args) =>
  Array.prototype.reduce.apply(list, args);
