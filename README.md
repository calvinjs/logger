# Logger

Middleware for Dylan which provides basic request console logging.

## Install

`npm install @dylanjs/logger`

## Usage

``` js
const logger = require('@dylanjs/logger');
app.use(logger());
```

Visiting `/` on your app will console.log `GET "/" 200 11ms 2018-5-30 00:42:33`.
