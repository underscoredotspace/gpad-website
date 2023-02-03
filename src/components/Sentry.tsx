import * as SentryBrowser from '@sentry/browser';
import { BrowserTracing } from '@sentry/tracing';

export const Sentry = () => {
	if (!import.meta.env.DEV) {
		console.log('starting sentry');
		SentryBrowser.init({
			dsn: 'https://1e9c450069244eb59eb05153268ead3e@o1138904.ingest.sentry.io/4504564768374784',
			integrations: [new BrowserTracing()],
			tracesSampleRate: 1.0,
			release: `gpad_website@${import.meta.env.APP_VERSION}`,
			environment: import.meta.env.MODE,
		});
	}

	return null;
};
