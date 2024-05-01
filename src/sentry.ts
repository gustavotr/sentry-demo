import * as Sentry from '@sentry/node';

const { SENTRY_DSN } = process.env;
console.log({ SENTRY_DSN });

Sentry.init({
    dsn: SENTRY_DSN,

    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0,
});
