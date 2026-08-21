

# Playwright Automation Framework Standards

## Tech Stack

- Playwright with TypeScript
- VS Code
- GitHub Copilot
- Playwright MCP
- GitHub Actions

---

# Framework Folder Structure

project-root/
│
├── pages/
├── tests/
├── testData/
├── utils/
├── fixtures/
├── playwright.config.ts
├── tsconfig.json
└── package.json

---

# Playwright Configuration Standards

- Use HTML reporter
- Capture screenshot on failure
- Capture video on failure
- Configure Chromium browser
- Use baseURL
- Add proper timeout configuration

---

# TypeScript Standards

- Enable resolveJsonModule
- Enable esModuleInterop
- Avoid TypeScript compile issues
- Use strict typing where possible

---

# Page Object Model Standards

- Follow reusable POM design
- Store locators inside page classes
- Avoid duplicate code
- Avoid hardcoded waits
- Use async/await properly
- Prefer stable locators

## Locator Priority

1. getByRole
2. getByLabel
3. getByPlaceholder
4. locator
5. XPath (last option)

---

# Test Data Standards

- Store test data in testData folder
- Read data from JSON or CSV
- Avoid hardcoded credentials
- Use csv-parse package for CSV handling

---

# Git Standards

- Initialize Git repository
- Use proper .gitignore

## Ignore:
- node_modules
- playwright-report
- test-results

---

# Execution Standards

- Execute tests after implementation
- Use headed mode when debugging
- Use debug mode for failures
- Fix flaky waits
- Fix unstable locators
- Ensure all tests pass successfully

---

# Naming Standards

- Use meaningful test names
- Use camelCase for variables and methods
- Use PascalCase for class names
- Use *.spec.ts for test files

---

# Assertion Standards

- Use Playwright expect assertions
- Add proper validations after every important action
- Avoid unnecessary assertions

---

# Wait Strategy Standards

- Avoid waitForTimeout()
- Prefer auto-waiting
- Use explicit waits only when necessary

---

# Framework Scalability

- Keep framework reusable
- Avoid duplicate locators
- Maintain modular design

---

# Reporting Standards

- Use HTML reporter
- Capture screenshots on failure
- Capture video on failure
- Enable trace on retry
- Analyze failed reports after execution

---

# Retry Standards

- Configure retries for flaky failures
- Use retries only when necessary
- Investigate flaky tests instead of depending on retries

---

# Cross Browser Standards

- Support Chromium
- Support Firefox
- Support WebKit
- Ensure tests work consistently across browsers

---

# Hooks and Fixtures Standards

- Use beforeEach for common setup
- Use afterEach for cleanup if needed
- Use Playwright fixtures for reusable test setup
- Avoid duplicate setup code inside tests

---

# Environment Standards

- Store environment-specific values separately
- Avoid hardcoding URLs
- Support QA, UAT, and Production environments
- Use environment variables where possible

---

# CI/CD Standards

- Execute tests using GitHub Actions
- Trigger automation on pull requests
- Generate Playwright reports in pipeline
- Maintain stable pipeline execution

---

# Code Review Standards

- Keep code clean and readable
- Avoid unnecessary comments
- Use reusable methods
- Follow framework standards consistently
- Remove unused imports and code

---

# Real-Time Goal

This framework should simulate real enterprise automation projects by following:
- Maintainable architecture
- Reusable automation code
- Stable execution
- Industry-standard practices
- Scalable framework design


# AI Execution and Debugging Standards

- After generating code, always execute the test
- Analyze Playwright failure logs carefully
- Identify exact failing locator/assertion
- Fix only the root cause
- Avoid unnecessary code modifications
- Re-run the failed test after applying fixes
- Avoid adding waitForTimeout()
- Prefer Playwright auto-waiting
- Preserve existing framework structure
- Maintain POM design consistency
- Verify test stability before finalizing
- Ensure generated code compiles successfully
- Avoid duplicate locators and methods
- Use stable assertions
- If failure reason is unclear, inspect locator strategy before modifying waits


# Playwright Debugging Priorities

When test execution fails, follow this order:

1. Verify locator correctness
2. Verify page navigation
3. Verify element visibility
4. Verify timing/synchronization
5. Verify assertion logic
6. Verify test data
7. Verify environment/configuration
8. Verify browser-specific behavior

Avoid random fixes without root-cause analysis.