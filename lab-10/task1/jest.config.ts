export default{
    preset: 'ts-jest/presets/default-esm',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    transform:{
        '^.+\\.tsx?$': [
            'ts-jest',
            {
                useESM: true,
                tsconfig: '<rootDir>/tsconfig.app.json',
            }
        ]
    },
    testMatch: ['**/*.test.ts?(x)'],
    collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/main.tsx'],
    coverageDirectory: 'coverage',
}