// winston.createLogger, .. 등등 중복해서 사용되면 아래와 같이 가져와서 사용가능
const { createLogger, transports, format } = require("winston");
const { combine, timestamp, label, printf, simple, colorize } = format;

const printFormat = printf(({ timestamp, label, level, message }) => {
  return `${timestamp} [${label}] ${level} : ${message}`;
});

const printLogFormat = {
  file: combine(
    label({
      label: "백엔드 맛보기",
    }),
    timestamp({
      format: "YYYY-MM-DD HH:mm:dd",
    }),
    printFormat
  ),
  console: combine(
    colorize(), //
    simple()
  ),
};

const opts = {
  file: new transports.File({
    filename: "access.log",
    dirname: "./log/",
    level: "info",
    format: printLogFormat.file,
  }),
  console: new transports.Console({
    level: "info",
    format: printLogFormat.console,
  }),
};

const logger = createLogger({
  transports: [opts.file],
});

if (process.env.NODE_ENV !== "production") {
  logger.add(opts.console);
}

module.exports = logger;
