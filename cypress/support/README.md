# Cypress Test Automation Framework - Support Utilities

## Overview
This directory contains all the supporting classes and utilities for the Cypress BDD Cucumber test automation framework.

---

## Files and Classes

### 1. **UIController.js**
Base class for all UI interactions with Cypress.

#### Key Methods:
- `enterURL(url)` - Navigate to URL
- `enterText(locator, text)` - Enter text into fields
- `clickElement(locator)` - Click on elements
- `doubleClickElement(locator)` - Double click
- `rightClickElement(locator)` - Right click
- `selectCheckbox(locator)` - Check checkboxes
- `unselectCheckbox(locator)` - Uncheck checkboxes
- `selectRadioButton(locator)` - Select radio buttons
- `mouseHover(locator)` - Hover over elements
- `selectValueFromDropdown(locator, value)` - Select from dropdowns
- `dragAndDrop(sourceLocator, targetLocator)` - Drag and drop
- `scrollToElement(locator)` - Scroll to element
- `waitForElement(locator, timeout)` - Wait for element
- `selectFile(locator, filePath)` - Upload files
- `handleAlert(action)` - Handle alerts
- `getElementText(locator)` - Get element text
- `getAttributeValue(locator, attribute)` - Get attributes

#### Supports:
- Both CSS selectors and XPath locators (XPath starts with `//`)
- Iframe operations (iframeClickElement, iframeEnterText, etc.)

---

### 2. **BasicAssertions.js**
Class for all assertion operations.

#### Key Methods:
- `assertElementVisible(locator)` - Assert element is visible
- `assertElementInvisible(locator)` - Assert element is not visible
- `assertElementEnabled(locator)` - Assert element is enabled
- `assertElementDisabled(locator)` - Assert element is disabled
- `assertElementText(locator, expectedText)` - Assert exact text
- `assertElementContainsText(locator, expectedText)` - Assert text contains
- `assertElementAttribute(locator, attribute, value)` - Assert attribute
- `assertURLIncludes(expectedURL)` - Assert URL contains text
- `assertURLEquals(expectedURL)` - Assert exact URL
- `assertCurrentPageTitle(expectedTitle)` - Assert page title
- `assertResponseCode(response, expectedStatus)` - Assert API response
- `assertFieldValueInResponse(fieldName, expectedValue, response)` - Assert API field
- `assertArrayEqArray(actualArray, expectedArray)` - Assert arrays equal
- `assertValueExistInArray(array, value)` - Assert value in array
- `assertTableRowCount(tableLocator, expectedCount)` - Assert table row count

#### Supports:
- Both CSS selectors and XPath locators
- API response assertions
- Array and object assertions
- Type validations

---

### 3. **CommonUtils.js**
General utility functions for browser and test operations.

#### Key Methods:
- `handleBrowserAlert(action)` - Handle browser alerts
- `handleBrowserConfirmation(action)` - Handle confirmations
- `handleBrowserPrompt(text)` - Handle prompts
- `getCurrentURL()` - Get current URL
- `getPageTitle()` - Get page title
- `wait(ms)` - Wait for specified time
- `getCookie(name)` - Get cookie value
- `setCookie(name, value)` - Set cookie
- `clearAllCookies()` - Clear all cookies
- `getLocalStorageItem(key)` - Get localStorage value
- `setLocalStorageItem(key, value)` - Set localStorage
- `getSessionStorageItem(key)` - Get sessionStorage value
- `executeScript(script)` - Execute JavaScript
- `scrollToTop()` - Scroll to top
- `scrollToBottom()` - Scroll to bottom
- `getViewportSize()` - Get viewport dimensions
- `setViewportSize(width, height)` - Set viewport
- `performAPIRequest(method, url, options)` - Make API calls
- `interceptNetworkRequest(method, pattern)` - Intercept network
- `captureScreenshot(filename)` - Take screenshot

---

### 4. **PageObject.js**
Abstract base class for creating Page Objects using POM pattern.

#### Features:
- Extends all UIController functionality
- Extends all BasicAssertions functionality
- Extends CommonUtils functionality
- Provides convenient wrapper methods

#### Key Methods:
- `navigateTo(url)` - Navigate to page
- `verifyPageTitle()` - Verify page loaded
- `clickElement(locator)` - Click (from UIController)
- `enterText(locator, text)` - Enter text
- `selectFromDropdown(locator, value)` - Select dropdown
- `verifyElementVisible(locator)` - Verify visible
- `verifyElementText(locator, expectedText)` - Verify text
- `takeScreenshot(filename)` - Take screenshot

#### Usage Example:
```javascript
class LoginPage extends PageObject {
  constructor() {
    super("Login Page");
    this.usernameField = "#username";
    this.passwordField = "#password";
    this.loginButton = "#login-btn";
  }

  login(username, password) {
    this.enterText(this.usernameField, username);
    this.enterText(this.passwordField, password);
    this.clickElement(this.loginButton);
  }
}
```

---

### 5. **Locators.js**
Centralized repository for all element locators.

#### Key Methods:
- `getDynamicLocator(locator, placeholder, value)` - Replace placeholder
- `getXPathByText(text)` - Create XPath for text
- `getXPathByTagAndText(tag, text)` - Create XPath with tag
- `getXPathByAttribute(attribute, value)` - Create XPath for attribute
- `getCSSByAttribute(attribute, value)` - Create CSS selector
- `getCSSByClass(className)` - Get CSS by class
- `getCSSById(id)` - Get CSS by ID

#### Pre-defined Locators:
- Form elements (name, email, phone, etc.)
- Date pickers
- Alert buttons
- Table elements
- File upload elements
- Navigation elements

---

### 6. **TestData.js**
Centralized test data repository.

#### Available Data:
- User data (valid, invalid, admin)
- Form data
- Dropdown options (countries, colors, genders, days)
- Product/Book data
- Error messages
- Success messages
- URLs
- Page titles

#### Key Methods:
- `getRandomItem(array)` - Get random item
- `getRandomCountry()` - Get random country
- `getRandomColor()` - Get random color
- `generateUniqueEmail()` - Generate unique email
- `generateUniqueUsername()` - Generate unique username

---

### 7. **Constants.js**
Application-level constants and configurations.

#### Available Constants:
- Environment variables
- Browser configuration
- Timeouts and waits
- HTTP status codes
- HTTP methods
- Content types
- Date formats
- Regular expressions
- Colors
- Languages

#### Key Methods:
- `getEnvVar(key, defaultValue)` - Get environment variable
- `isEnvironment(env)` - Check environment
- `isDebugMode()` - Check debug mode
- `isHeadlessMode()` - Check headless mode

---

### 8. **Logger.js**
Advanced logging utility for test execution tracking.

#### Log Levels:
- DEBUG (0)
- INFO (1)
- WARN (2)
- ERROR (3)

#### Key Methods:
- `debug(message, data)` - Log debug message
- `info(message, data)` - Log info message
- `warn(message, data)` - Log warning
- `error(message, error)` - Log error
- `logStep(stepName, status)` - Log step execution
- `logAPIRequest(method, url, payload)` - Log API request
- `logAPIResponse(method, url, statusCode, response)` - Log API response
- `logTestStart(testName)` - Log test start
- `logTestEnd(testName, status)` - Log test end
- `logScreenshot(screenshotName)` - Log screenshot
- `logElementAction(action, locator, value)` - Log element action
- `logAssertion(name, expected, actual, passed)` - Log assertion
- `setLogLevel(level)` - Set log level

---

## Usage Examples

### Example 1: Using UIController with Step Definitions
```javascript
import UIController from "../../support/UILib/UIController.js";

const uiController = new UIController();

When("User enters email {string}", (email) => {
  uiController.enterText("input[name='email']", email);
});
```

### Example 2: Using BasicAssertions
```javascript
import BasicAssertions from "../../support/BasicAssertions.js";

const basicAssertions = new BasicAssertions();

Then("Email field should be visible", () => {
  basicAssertions.assertElementVisible("input[name='email']");
});
```

### Example 3: Using PageObject Model
```javascript
import PageObject from "../../support/UILib/PageObject.js";
import Locators from "../../support/Locators.js";

class FormPage extends PageObject {
  constructor() {
    super("Form Page");
  }

  fillForm(data) {
    this.enterText(Locators.FORM_NAME_FIELD, data.name);
    this.enterText(Locators.FORM_EMAIL_FIELD, data.email);
    this.selectFromDropdown(Locators.FORM_COUNTRY_DROPDOWN, data.country);
  }
}
```

### Example 4: Using TestData
```javascript
import TestData from "../../support/TestData.js";

When("User fills form with valid data", () => {
  const userData = TestData.VALID_USER;
  uiController.enterText("input[name='email']", userData.email);
});
```

### Example 5: Using Logger
```javascript
import Logger from "../../support/Logger.js";

When("User clicks login button", () => {
  Logger.logStep("Clicking login button", "START");
  uiController.clickElement("#login-btn");
  Logger.logStep("Login button clicked", "PASS");
});
```

---

## Best Practices

1. **Always use Locators class** for consistency and maintainability
2. **Use PageObject model** for UI tests to reduce code duplication
3. **Use TestData class** instead of hardcoding test data
4. **Use Logger** for better debugging and test reporting
5. **Support both CSS and XPath** selectors in UIController calls
6. **Handle iframes** using iframe-specific methods in UIController
7. **Use CommonUtils** for browser operations and API calls
8. **Create custom Page Objects** extending PageObject base class

---

## File Structure
```
cypress/
├── support/
│   ├── UILib/
│   │   ├── UIController.js
│   │   └── PageObject.js
│   ├── BasicAssertions.js
│   ├── CommonUtils.js
│   ├── Locators.js
│   ├── TestData.js
│   ├── Constants.js
│   ├── Logger.js
│   └── README.md (this file)
```

---

## Contributing

When adding new methods:
1. Add to appropriate class based on responsibility
2. Support both CSS selectors and XPath (for UIController/BasicAssertions)
3. Add JSDoc comments for all methods
4. Update this README with new methods
5. Add error handling where needed

---

## Environment Variables

Set these environment variables for configuration:

```bash
export ENV=test
export BASE_URL=https://testautomationpractice.blogspot.com/
export LOG_LEVEL=debug
export HEADLESS=true
export BROWSER=chrome
```

---

## Support

For issues or questions, please refer to the individual class files or create an issue in the project repository.
