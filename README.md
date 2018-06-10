# Logger

Middleware for Dylan which provides basic request console logging.

## Install

`npm install @dylan/logger`

## Usage

``` js
const logger = require('@dylan/logger');
app.use(logger());
```

Visiting `/` on your app will console.log `GET "/" 200 11ms 2018-5-30 00:42:33`.
