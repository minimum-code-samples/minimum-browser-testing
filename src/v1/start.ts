import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import { logger } from '~src/lib/logger';
import * as runner from '~src/v1/runner';

const argv = yargs(hideBin(process.argv))
	.usage(`Usage: pnpm start --help`)
	.option('run', {
		alias: 'r',
		describe: 'Runs the browser',
		type: 'boolean',
	})
	.help('h')
	.alias('h', 'help')
	.showHelpOnFail(true)
	.parseSync();

if (!argv.run) {
	yargs().showHelp();
	process.exit(0);
}

async function main() {
	logger.trace(`Starting the runner.`);
	const browser = await runner.makeBrowser();

	await browser.close();
	logger.trace(`Runner completed.`);
}

main();
