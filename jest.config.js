module.exports = {
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue',
  ],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  snapshotSerializers: [
    'jest-serializer-vue',
  ],
  testMatch: [
    '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)',
  ],
  testURL: 'http://localhost/',

  coverageDirectory: '<rootDir>/tests/unit/coverage',
  collectCoverageFrom: [
    '!**/node_modules/**',
    'src/**/*.{js,vue}',
    '!src/main.js',
    '!src/registerServiceWorker.js',
    '!src/router.js',
    '!src/store.js',
    '!src/store/index.js',
    '!src/store/**.js',
    '!src/store/**/state.js',
  ],
};
