import puppeteer from 'puppeteer';

import { logger } from '~src/lib/logger';

export async function makeBrowser() {
	const _name = 'runner#makeBrowser';

	let headless = true;

	switch (process.env.PINO_LOG_LEVEL) {
		case 'debug': // fall-thru
		case 'trace':
			headless = false;
			break;
		default:
			headless = true;
	}

	logger.debug(`(${_name}) Launching Puppeteer in ${headless ? 'headless' : 'full'} mode.`);

	return puppeteer.launch({
		headless,
		ignoreHTTPSErrors: true,
	});
}
