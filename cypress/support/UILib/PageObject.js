import UIController from "./UIController.js";
import BasicAssertions from "../BasicAssertions.js";
import CommonUtils from "../CommonUtils.js";

class PageObject {
  constructor(pageTitle) {
    if (this.constructor === PageObject) {
      throw "You cannot instantiate abstract PageObject class. Please extend it!";
    }

    this.pageTitle = pageTitle;
    this.uiController = new UIController();
    this.basicAssertions = new BasicAssertions();
    this.commonUtils = new CommonUtils();
  }

  /**
   * Navigate to page by URL
   * @param {string} url - Page URL
   */
  navigateTo(url) {
    this.uiController.enterURL(url);
  }

  /**
   * Verify page title
   */
  verifyPageTitle() {
    this.basicAssertions.assertCurrentPageTitle(this.pageTitle);
  }

  /**
   * Verify page loaded
   * @param {string} elementLocator - Element that indicates page has loaded
   */
  verifyPageLoaded(elementLocator) {
    this.basicAssertions.assertElementVisible(elementLocator);
  }

  /**
   * Get page title
   */
  getPageTitle() {
    return this.commonUtils.getPageTitle();
  }

  /**
   * Get current URL
   */
  getCurrentURL() {
    return this.commonUtils.getCurrentURL();
  }

  /**
   * Wait for element
   * @param {string} locator - Element locator
   * @param {number} timeout - Timeout in milliseconds
   */
  waitForElement(locator, timeout = 5000) {
    this.uiController.waitForElement(locator, timeout);
  }

  /**
   * Click element
   * @param {string} locator - Element locator
   */
  clickElement(locator) {
    this.uiController.clickElement(locator);
  }

  /**
   * Enter text in field
   * @param {string} locator - Field locator
   * @param {string} text - Text to enter
   */
  enterText(locator, text) {
    this.uiController.enterText(locator, text);
  }

  /**
   * Clear field
   * @param {string} locator - Field locator
   */
  clearField(locator) {
    this.uiController.clearInputField(locator);
  }

  /**
   * Select from dropdown
   * @param {string} locator - Dropdown locator
   * @param {string} value - Value to select
   */
  selectFromDropdown(locator, value) {
    this.uiController.selectValueFromDropdown(locator, value);
  }

  /**
   * Hover over element
   * @param {string} locator - Element locator
   */
  hoverOverElement(locator) {
    this.uiController.mouseHover(locator);
  }

  /**
   * Double click element
   * @param {string} locator - Element locator
   */
  doubleClickElement(locator) {
    this.uiController.doubleClickElement(locator);
  }

  /**
   * Right click element
   * @param {string} locator - Element locator
   */
  rightClickElement(locator) {
    this.uiController.rightClickElement(locator);
  }

  /**
   * Check checkbox
   * @param {string} locator - Checkbox locator
   */
  checkCheckbox(locator) {
    this.uiController.selectCheckbox(locator);
  }

  /**
   * Uncheck checkbox
   * @param {string} locator - Checkbox locator
   */
  uncheckCheckbox(locator) {
    this.uiController.unselectCheckbox(locator);
  }

  /**
   * Select radio button
   * @param {string} locator - Radio button locator
   */
  selectRadioButton(locator) {
    this.uiController.selectRadioButton(locator);
  }

  /**
   * Scroll to element
   * @param {string} locator - Element locator
   */
  scrollToElement(locator) {
    this.uiController.scrollToElement(locator);
  }

  /**
   * Get element text
   * @param {string} locator - Element locator
   */
  getElementText(locator) {
    return this.uiController.getElementText(locator);
  }

  /**
   * Get element attribute value
   * @param {string} locator - Element locator
   * @param {string} attribute - Attribute name
   */
  getElementAttribute(locator, attribute) {
    return this.uiController.getAttributeValue(locator, attribute);
  }

  /**
   * Get element input value
   * @param {string} locator - Input locator
   */
  getInputValue(locator) {
    return this.uiController.getInputValue(locator);
  }

  /**
   * Drag and drop
   * @param {string} sourceLocator - Source element locator
   * @param {string} targetLocator - Target element locator
   */
  dragAndDrop(sourceLocator, targetLocator) {
    this.uiController.dragAndDrop(sourceLocator, targetLocator);
  }

  /**
   * Upload file
   * @param {string} locator - File input locator
   * @param {string} filePath - File path
   */
  uploadFile(locator, filePath) {
    this.uiController.selectFile(locator, filePath);
  }

  /**
   * Take screenshot
   * @param {string} filename - Screenshot filename
   */
  takeScreenshot(filename) {
    this.uiController.captureScreenshot(filename);
  }

  /**
   * Verify element visible
   * @param {string} locator - Element locator
   */
  verifyElementVisible(locator) {
    this.basicAssertions.assertElementVisible(locator);
  }

  /**
   * Verify element not visible
   * @param {string} locator - Element locator
   */
  verifyElementNotVisible(locator) {
    this.basicAssertions.assertElementInvisible(locator);
  }

  /**
   * Verify element enabled
   * @param {string} locator - Element locator
   */
  verifyElementEnabled(locator) {
    this.basicAssertions.assertElementEnabled(locator);
  }

  /**
   * Verify element disabled
   * @param {string} locator - Element locator
   */
  verifyElementDisabled(locator) {
    this.basicAssertions.assertElementDisabled(locator);
  }

  /**
   * Verify element text
   * @param {string} locator - Element locator
   * @param {string} expectedText - Expected text
   */
  verifyElementText(locator, expectedText) {
    this.basicAssertions.assertElementText(locator, expectedText);
  }

  /**
   * Verify element contains text
   * @param {string} locator - Element locator
   * @param {string} expectedText - Expected text
   */
  verifyElementContainsText(locator, expectedText) {
    this.basicAssertions.assertElementContainsText(locator, expectedText);
  }

  /**
   * Verify URL includes text
   * @param {string} expectedText - Expected text
   */
  verifyURLIncludes(expectedText) {
    this.basicAssertions.assertURLIncludes(expectedText);
  }

  /**
   * Verify URL equals
   * @param {string} expectedURL - Expected URL
   */
  verifyURLEquals(expectedURL) {
    this.basicAssertions.assertURLEquals(expectedURL);
  }

  /**
   * Pause test execution for debugging
   */
  pause() {
    this.commonUtils.pauseExecution();
  }

  /**
   * Log message
   * @param {string} message - Message to log
   */
  log(message) {
    this.commonUtils.log(message);
  }

  /**
   * Wait for specified time
   * @param {number} ms - Milliseconds
   */
  wait(ms) {
    this.commonUtils.wait(ms);
  }

  /**
   * Go back in browser history
   */
  goBack() {
    this.uiController.goBack();
  }

  /**
   * Go forward in browser history
   */
  goForward() {
    this.uiController.goForward();
  }

  /**
   * Reload page
   */
  reloadPage() {
    this.uiController.reloadPage();
  }
}

export default PageObject;
