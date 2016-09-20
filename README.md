# node-insecure

Accept insecure HTTPS certificates from a web server.

## Installation

```bash
$ npm install node-insecure
```

## Quick start

First you need to integrate insecure into your application.

```javascript
const insecure = require('insecure');
```

To set the environment variable `NODE_TLS_REJECT_UNAUTHORIZED` to `0`, call:

```javascript
insecure();

console.log(process.env.NODE_TLS_REJECT_UNAUTHORIZED); // => '0'
```
