module.exports = {
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  moduleNameMapper: {
    '\\.scss$': require.resolve('./style-mock'),
  },
};
