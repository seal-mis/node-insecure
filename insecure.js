'use strict';

const insecure = function () {
  /* eslint-disable no-process-env */
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
  /* eslint-enable no-process-env */
};

module.exports = insecure;
