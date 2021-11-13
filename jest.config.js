/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  testRegex: ["tests\\.ts$"],
  transform: {
    "\\.ts$": "ts-jest",
  },
  restoreMocks: true,
  resetMocks: true,
};
module.exports = config;
