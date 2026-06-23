class Logger {
  static LOG_LEVELS = {
    DEBUG: 0,
    INFO: 1,
    WARN: 2,
    ERROR: 3,
  };

  static currentLogLevel = process.env.LOG_LEVEL || Logger.LOG_LEVELS.INFO;

  /**
   * Check if log level should be displayed
   * @param {number} level - Log level
   */
  static shouldLog(level) {
    return level >= Logger.currentLogLevel;
  }

  /**
   * Log debug message
   * @param {string} message - Message to log
   * @param {object} data - Optional data to log
   */
  static debug(message, data = null) {
    if (Logger.shouldLog(Logger.LOG_LEVELS.DEBUG)) {
      const timestamp = new Date().toISOString();
      const logMessage = `[${timestamp}] [DEBUG] ${message}`;
      console.log(logMessage, data || "");
      cy.log(logMessage);
    }
  }

  /**
   * Log info message
   * @param {string} message - Message to log
   * @param {object} data - Optional data to log
   */
  static info(message, data = null) {
    if (Logger.shouldLog(Logger.LOG_LEVELS.INFO)) {
      const timestamp = new Date().toISOString();
      const logMessage = `[${timestamp}] [INFO] ${message}`;
      console.info(logMessage, data || "");
      cy.log(logMessage);
    }
  }

  /**
   * Log warning message
   * @param {string} message - Message to log
   * @param {object} data - Optional data to log
   */
  static warn(message, data = null) {
    if (Logger.shouldLog(Logger.LOG_LEVELS.WARN)) {
      const timestamp = new Date().toISOString();
      const logMessage = `[${timestamp}] [WARN] ${message}`;
      console.warn(logMessage, data || "");
      cy.log(logMessage);
    }
  }

  /**
   * Log error message
   * @param {string} message - Message to log
   * @param {object} error - Optional error object
   */
  static error(message, error = null) {
    if (Logger.shouldLog(Logger.LOG_LEVELS.ERROR)) {
      const timestamp = new Date().toISOString();
      const logMessage = `[${timestamp}] [ERROR] ${message}`;
      console.error(logMessage, error || "");
      cy.log(logMessage);
    }
  }

  /**
   * Log step execution
   * @param {string} stepName - Step name
   * @param {string} status - Status (PASS/FAIL/SKIP)
   */
  static logStep(stepName, status = "PASS") {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [STEP] ${stepName} - ${status}`;
    console.log(logMessage);
    cy.log(logMessage);
  }

  /**
   * Log API request
   * @param {string} method - HTTP method
   * @param {string} url - Request URL
   * @param {object} payload - Request payload
   */
  static logAPIRequest(method, url, payload = null) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [API] ${method} ${url}`;
    console.log(logMessage);
    if (payload) {
      console.log("Payload:", payload);
    }
    cy.log(logMessage);
  }

  /**
   * Log API response
   * @param {string} method - HTTP method
   * @param {string} url - Request URL
   * @param {number} statusCode - Response status code
   * @param {object} response - Response body
   */
  static logAPIResponse(method, url, statusCode, response = null) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [API_RESPONSE] ${method} ${url} - Status: ${statusCode}`;
    console.log(logMessage);
    if (response) {
      console.log("Response:", response);
    }
    cy.log(logMessage);
  }

  /**
   * Log test case start
   * @param {string} testName - Test case name
   */
  static logTestStart(testName) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [TEST_START] ${testName}`;
    console.log("=".repeat(50));
    console.log(logMessage);
    console.log("=".repeat(50));
    cy.log(logMessage);
  }

  /**
   * Log test case end
   * @param {string} testName - Test case name
   * @param {string} status - Test status (PASS/FAIL)
   */
  static logTestEnd(testName, status = "PASS") {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [TEST_END] ${testName} - ${status}`;
    console.log("=".repeat(50));
    console.log(logMessage);
    console.log("=".repeat(50));
    cy.log(logMessage);
  }

  /**
   * Log screenshot taken
   * @param {string} screenshotName - Screenshot name
   */
  static logScreenshot(screenshotName) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [SCREENSHOT] ${screenshotName}`;
    console.log(logMessage);
    cy.log(logMessage);
  }

  /**
   * Log element action
   * @param {string} action - Action name (click, type, etc.)
   * @param {string} locator - Element locator
   * @param {string} value - Optional value
   */
  static logElementAction(action, locator, value = null) {
    const timestamp = new Date().toISOString();
    const valueStr = value ? ` with value: ${value}` : "";
    const logMessage = `[${timestamp}] [ELEMENT_ACTION] ${action} - ${locator}${valueStr}`;
    console.log(logMessage);
    cy.log(logMessage);
  }

  /**
   * Log assertion
   * @param {string} assertionName - Assertion name
   * @param {string} expected - Expected value
   * @param {string} actual - Actual value
   * @param {boolean} passed - Whether assertion passed
   */
  static logAssertion(assertionName, expected, actual, passed = true) {
    const timestamp = new Date().toISOString();
    const status = passed ? "PASS" : "FAIL";
    const logMessage = `[${timestamp}] [ASSERTION] ${status} - ${assertionName}`;
    console.log(logMessage);
    console.log(`Expected: ${expected}`);
    console.log(`Actual: ${actual}`);
    cy.log(logMessage);
  }

  /**
   * Log performance metric
   * @param {string} metricName - Metric name
   * @param {number} duration - Duration in milliseconds
   */
  static logPerformanceMetric(metricName, duration) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [PERFORMANCE] ${metricName}: ${duration}ms`;
    console.log(logMessage);
    cy.log(logMessage);
  }

  /**
   * Log data table
   * @param {array} data - Data to log as table
   */
  static logTable(data) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [TABLE]`;
    console.log(logMessage);
    console.table(data);
    cy.log(logMessage);
  }

  /**
   * Set log level
   * @param {number} level - Log level (DEBUG=0, INFO=1, WARN=2, ERROR=3)
   */
  static setLogLevel(level) {
    Logger.currentLogLevel = level;
  }

  /**
   * Create separate log file section
   * @param {string} sectionName - Section name
   */
  static logSection(sectionName) {
    const timestamp = new Date().toISOString();
    const separator = "=".repeat(60);
    const logMessage = `\n${separator}\n[${timestamp}] ${sectionName}\n${separator}`;
    console.log(logMessage);
  }
}

export default Logger;
