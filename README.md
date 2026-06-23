# CypreswithBDDCucumber

# Cypress with BDD Cucumber — Sample Project

A sample end-to-end test automation project built with **Cypress** and **Cucumber (BDD)**,
demonstrating how to write human-readable test scenarios using Gherkin syntax.

## 🚀 Purpose
This project is created for learning and reference purposes — to showcase how Behavior-Driven
Development (BDD) can be integrated into Cypress test suites using the
`@badeball/cypress-cucumber-preprocessor` plugin.

## 🛠️ Tech Stack
- Cypress
- Cucumber (BDD)
- Gherkin (.feature files)
- TypeScript / JavaScript
- Node.js

## 📁 Project Structure
- `cypress/e2e/*.feature`     → Gherkin feature files
- `cypress/support/step_definitions/` → Step definitions
- `cypress/support/hooks.ts`  → Before/After hooks
- `cypress.config.ts`         → Cypress + Cucumber config

## ✅ What's Covered
- Feature files with Scenario and Scenario Outline
- Reusable step definitions
- Background steps and hooks
- Tags-based test execution (@smoke, @regression)
- Sample UI test flows

## 📌 Note
This is a sample/demo project intended for practice and portfolio purposes.

## 🏃 How to Run

```bash
# Clone the repository
git clone <repository-url>
cd CypreswithBDDCucumber

# Install dependencies
npm ci

# Open Cypress UI (optional)
npx cypress open

# Run all tests headlessly
npx cypress run
```
