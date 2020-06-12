import winston, { transports as winstonTransports, format } from 'winston'

// See https://tools.ietf.org/html/rfc5424
const syslogLevels = {
	emerg: 0,
	alert: 1,
	crit: 2,
	error: 3,
	warning: 4,
	notice: 5,
	info: 6,
	debug: 7
}

const logFormat = format.combine(
	format.timestamp({ format: 'DD-MM-YYYY HH:mm' }),
	format.printf(({ level, message, timestamp }) => `${timestamp} [${level.toUpperCase()}]  ${message}`),
)

const logger = winston.createLogger({
	level: 'debug',
	levels: syslogLevels,
	exitOnError: false,
	transports: [
		new winstonTransports.Console(),
	],
	format: logFormat,
});

export default logger;
