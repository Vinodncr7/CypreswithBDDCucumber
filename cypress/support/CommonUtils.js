class CommonUtils {
  /**
   * Handle browser alerts
   * @param {string} action - 'accept' or 'dismiss'
   */
  handleBrowserAlert(action = "accept") {
    if (action === "accept") {
      cy.on("window:alert", () => true);
    } else if (action === "dismiss") {
      cy.on("window:alert", () => false);
    }
  }

  /**
   * Handle browser confirmation dialogs
   * @param {string} action - 'accept' or 'dismiss'
   */
  handleBrowserConfirmation(action = "accept") {
    if (action === "accept") {
      cy.on("window:confirm", () => true);
    } else if (action === "dismiss") {
      cy.on("window:confirm", () => false);
    }
  }

  /**
   * Handle browser prompt dialogs
   * @param {string} text - Text to enter in prompt
   */
  handleBrowserPrompt(text) {
    cy.on("window:prompt", () => text);
  }

  /**
   * Get current URL
   */
  getCurrentURL() {
    return cy.url();
  }

  /**
   * Get page title
   */
  getPageTitle() {
    return cy.title();
  }

  /**
   * Wait for a specific time
   * @param {number} ms - Milliseconds to wait
   */
  wait(ms) {
    cy.wait(ms);
  }

  /**
   * Switch to iframe
   * @param {string} selector - Iframe selector
   */
  switchToIframe(selector) {
    cy.frameLoaded(selector);
    return cy.iframe();
  }

  /**
   * Switch back from iframe
   */
  switchBackFromIframe() {
    cy.frameLoaded(false);
  }

  /**
   * Get all cookies
   */
  getAllCookies() {
    return cy.getCookie();
  }

  /**
   * Get specific cookie
   * @param {string} name - Cookie name
   */
  getCookie(name) {
    return cy.getCookie(name);
  }

  /**
   * Set cookie
   * @param {string} name - Cookie name
   * @param {string} value - Cookie value
   */
  setCookie(name, value) {
    cy.setCookie(name, value);
  }

  /**
   * Clear all cookies
   */
  clearAllCookies() {
    cy.clearCookies();
  }

  /**
   * Clear localStorage
   */
  clearLocalStorage() {
    cy.window().then((win) => {
      win.localStorage.clear();
    });
  }

  /**
   * Get localStorage item
   * @param {string} key - Key name
   */
  getLocalStorageItem(key) {
    return cy.window().then((win) => {
      return win.localStorage.getItem(key);
    });
  }

  /**
   * Set localStorage item
   * @param {string} key - Key name
   * @param {string} value - Value
   */
  setLocalStorageItem(key, value) {
    cy.window().then((win) => {
      win.localStorage.setItem(key, value);
    });
  }

  /**
   * Get sessionStorage item
   * @param {string} key - Key name
   */
  getSessionStorageItem(key) {
    return cy.window().then((win) => {
      return win.sessionStorage.getItem(key);
    });
  }

  /**
   * Set sessionStorage item
   * @param {string} key - Key name
   * @param {string} value - Value
   */
  setSessionStorageItem(key, value) {
    cy.window().then((win) => {
      win.sessionStorage.setItem(key, value);
    });
  }

  /**
   * Clear sessionStorage
   */
  clearSessionStorage() {
    cy.window().then((win) => {
      win.sessionStorage.clear();
    });
  }

  /**
   * Execute JavaScript
   * @param {string} script - JavaScript code to execute
   */
  executeScript(script) {
    return cy.window().then((win) => {
      return win.eval(script);
    });
  }

  /**
   * Open new window
   * @param {string} url - URL to open
   */
  openNewWindow(url) {
    cy.window().then((win) => {
      cy.stub(win, "open").as("windowOpen");
      win.open(url);
    });
  }

  /**
   * Close current window
   */
  closeCurrentWindow() {
    cy.window().then((win) => {
      win.close();
    });
  }

  /**
   * Scroll page to top
   */
  scrollToTop() {
    cy.scrollTo("top");
  }

  /**
   * Scroll page to bottom
   */
  scrollToBottom() {
    cy.scrollTo("bottom");
  }

  /**
   * Get viewport size
   */
  getViewportSize() {
    return cy.viewport().then((viewport) => {
      return viewport;
    });
  }

  /**
   * Set viewport size
   * @param {number} width - Width
   * @param {number} height - Height
   */
  setViewportSize(width, height) {
    cy.viewport(width, height);
  }

  /**
   * Print to console
   * @param {string} message - Message to print
   */
  log(message) {
    cy.log(message);
  }

  /**
   * Get network request
   * @param {string} method - HTTP method
   * @param {string} pattern - URL pattern
   */
  interceptNetworkRequest(method, pattern) {
    cy.intercept(method, pattern).as("networkRequest");
  }

  /**
   * Wait for network request
   * @param {string} alias - Request alias
   */
  waitForNetworkRequest(alias) {
    cy.wait(`@${alias}`);
  }

  /**
   * Get all network requests
   */
  getAllNetworkRequests() {
    return cy.state("requests");
  }

  /**
   * Perform API request
   * @param {string} method - HTTP method
   * @param {string} url - URL
   * @param {object} options - Request options
   */
  performAPIRequest(method, url, options = {}) {
    return cy.request({
      method,
      url,
      ...options,
    });
  }

  /**
   * Upload file using attachment
   * @param {string} filePath - File path
   */
  uploadFile(filePath) {
    return cy.fixture(filePath, "binary").then((fileContent) => {
      return Cypress.Blob.binaryStringToBlob(fileContent);
    });
  }

  /**
   * Take screenshot with custom name
   * @param {string} filename - Screenshot filename
   */
  captureScreenshot(filename) {
    cy.screenshot(filename);
  }

  /**
   * Get console logs
   */
  getConsoleLogs() {
    const logs = [];
    cy.window().then((win) => {
      const original = win.console.log;
      win.console.log = (...args) => {
        logs.push(args);
        original.apply(win.console, args);
      };
    });
    return logs;
  }

  /**
   * Pause execution for debugging
   */
  pauseExecution() {
    cy.pause();
  }

  /**
   * Verify network response status
   * @param {number} expectedStatus - Expected status code
   */
  verifyNetworkResponseStatus(expectedStatus) {
    cy.get("@networkRequest").should((response) => {
      expect(response.status).to.equal(expectedStatus);
    });
  }

  /**
   * Get network response body
   */
  getNetworkResponseBody() {
    return cy.get("@networkRequest").its("response.body");
  }

  /**
   * Check if element exists
   * @param {string} locator - Element locator
   */
  elementExists(locator) {
    return cy.get(locator, { failOnMissing: false }).should("have.length");
  }

  /**
   * Count elements
   * @param {string} locator - Element locator
   */
  countElements(locator) {
    return cy.get(locator).then(($elements) => {
      return $elements.length;
    });
  }

  /**
   * Get parent element
   * @param {string} locator - Child element locator
   */
  getParentElement(locator) {
    return cy.get(locator).parent();
  }

  /**
   * Get sibling element
   * @param {string} locator - Element locator
   */
  getSiblingElement(locator) {
    return cy.get(locator).siblings();
  }

  /**
   * Get child elements
   * @param {string} locator - Parent element locator
   */
  getChildElements(locator) {
    return cy.get(locator).children();
  }

  /**
   * Compare two values
   * @param {any} value1 - First value
   * @param {any} value2 - Second value
   */
  compareValues(value1, value2) {
    return value1 === value2;
  }

  /**
   * Generate random string
   * @param {number} length - String length
   */
  generateRandomString(length = 10) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  /**
   * Generate random number
   * @param {number} min - Minimum value
   * @param {number} max - Maximum value
   */
  generateRandomNumber(min = 0, max = 100) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
   * Format date
   * @param {date} date - Date object
   * @param {string} format - Date format
   */
  formatDate(date, format = "yyyy-mm-dd") {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return format
      .replace("yyyy", year)
      .replace("mm", month)
      .replace("dd", day);
  }

  /**
   * Get current date
   */
  getCurrentDate() {
    return new Date();
  }

  /**
   * Get current timestamp
   */
  getCurrentTimestamp() {
    return new Date().getTime();
  }

  /**
   * Convert JSON string to object
   * @param {string} jsonString - JSON string
   */
  parseJSON(jsonString) {
    return JSON.parse(jsonString);
  }

  /**
   * Convert object to JSON string
   * @param {object} obj - Object to convert
   */
  stringifyJSON(obj) {
    return JSON.stringify(obj);
  }
}

export default CommonUtils;
