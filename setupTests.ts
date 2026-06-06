// The setupTests.ts file is used to configure the testing envirnoment before each test. 
// The jest-dom library is imported to provide custom matchers for testing DOM nodes, to allow for more intuitive assertions in tests. For example, you can use matchers like toBeInTheDocument() to check if an element is present in the Dom or toHaveAttribute() to check if an element has a specific attribute.

import "@testing-library/jest-dom/vitest";