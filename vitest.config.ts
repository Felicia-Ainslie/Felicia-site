// The vitest.config.ts file is used to allow vitest to run scripted tests against the codebase. It specifies the test environment is browser-based (jsdom), allows for global variables such as describe, it, and expect without importing every time. It also loads the test setup before tests run. 

import {defineConfig} from 'vitest/config';

export default defineConfig({
    test: {
        environment: "jsdom",
        globals: true,
        setupFiles: "./setupTests.ts",
    },
});