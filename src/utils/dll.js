/* eslint-disable */
// const ffi = require('ffi');
import ffi from 'ffi';
// process.env.PATH = `${process.env.PATH}${path.delimiter}${pathToAdd}`;
// eslint-disable-next-line
// export const BASE_URL = process.env.BASE_URL;

export const libfactorial = ffi.Library(path.join(__dirname, 'dll', 'libfactorial'), {
  factorial: ['uint64', ['int']],
});

// export const libfactorial = null;
