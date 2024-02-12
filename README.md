# minimum-browser-testing

This repository contains the basic template for bootstrapping a Puppeteer.

It contains a logger facility based on Pino. The logging function sends the log output to the console and to log files stored in "logs" by default.

The configurations for logging can be placed in the environment file. See _.env.template_ for a template. This should be copied to a new file named _.env_.

## Getting started

```bash
$ pnpm install
$ pnpm start
```

The `pnpm start -r` starts the bundled Chrome browser. It launches in headless mode if the log level (specified in the environment variable `PINO_LOG_LEVEL`) is either `trace` or `debug`. Otherwise, the browser is launched and closed immediately.
