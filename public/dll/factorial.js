/* eslint-disable */
const ffi = require('ffi');
const path = require('path');

exports.libfactorial = ffi.Library(path.join(__static, 'dll', 'libfactorial'), {
  factorial: ['uint64', ['int']],
});