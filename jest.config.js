module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  testMatch: ["**/+(*.)+(spec).+(ts)"],
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["html", "lcov", "text", "cobertura"],
  reporters: [
    "default",
    [
      "jest-sonar",
      {
        outputDirectory: "coverage",
        outputName: "test-report.xml",
      },
    ],
  ],
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1",
  },
};
