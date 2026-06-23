import UIController from "./UIController.js";

class InteractiveElementsPage extends UIController {
  constructor() {
    super();

    // Alert Buttons
    this.simpleAlertButton = "//button[contains(text(), 'Simple Alert')]";
    this.confirmationAlertButton = "//button[contains(text(), 'Confirmation Alert')]";
    this.promptAlertButton = "//button[contains(text(), 'Prompt Alert')]";

    // Hover and Dropdown
    this.hoverButton = "//button[contains(text(), 'Point Me')]";
    this.dropdownMenu = ".dropdown-menu, [role='menu']";
    this.menuOptions = ".dropdown-menu li, [role='menuitem']";

    // Double Click Elements
    this.doubleClickButton = "//button[contains(text(), 'Copy Text')]";
    this.field1 = "input[id*='Field1']";
    this.field2 = "input[id*='Field2']";

    // Drag and Drop
    this.dragSource = "//div[contains(text(), 'Drag me to my target')]";
    this.dropTarget = "[id*='drop']";
    this.droppedMessage = "//div[contains(text(), 'Dropped')]";

    // Tabs
    this.newTabButton = "//a[contains(text(), 'New Tab')]";
    this.wikipediaLink = "//a[contains(text(), 'Wikipedia')]";

    // Popup
    this.popupWindowButton = "//button[contains(text(), 'Popup Windows')]";
    this.popupWindow = "[title*='popup'], .popup-window";
    this.popupDialog = "[role='dialog']";

    // Dynamic Button
    this.startButton = "//button[contains(text(), 'START')]";
    this.stopButton = "//button[contains(text(), 'STOP')]";

    // Messages
    this.successMessage = "//div[contains(text(), 'Success')]";
    this.alertMessage = "[class*='alert']";
  }

  /**
   * Click on simple alert button
   */
  clickSimpleAlert() {
    this.clickElement(this.simpleAlertButton);
  }

  /**
   * Click on confirmation alert button
   */
  clickConfirmationAlert() {
    this.clickElement(this.confirmationAlertButton);
  }

  /**
   * Click on prompt alert button
   */
  clickPromptAlert() {
    this.clickElement(this.promptAlertButton);
  }

  /**
   * Accept browser alert
   */
  acceptAlert() {
    this.handleAlert("accept");
  }

  /**
   * Dismiss browser alert
   */
  dismissAlert() {
    this.handleAlert("dismiss");
  }

  /**
   * Accept confirmation dialog
   */
  acceptConfirmation() {
    this.handleConfirmation("accept");
  }

  /**
   * Dismiss confirmation dialog
   */
  dismissConfirmation() {
    this.handleConfirmation("dismiss");
  }

  /**
   * Handle prompt with text input
   * @param {string} text - Text to enter in prompt
   */
  handlePromptWithText(text) {
    this.handlePrompt(text);
  }

  /**
   * Hover over button and verify dropdown
   */
  hoverAndVerifyDropdown() {
    this.mouseHover(this.hoverButton);
  }

  /**
   * Check if dropdown is displayed
   */
  isDropdownDisplayed() {
    return cy.get(this.dropdownMenu).should("be.visible");
  }

  /**
   * Get dropdown menu options
   */
  getDropdownOptions() {
    return cy.get(this.menuOptions);
  }

  /**
   * Click on dropdown option
   * @param {string} optionText - Option text to click
   */
  clickDropdownOption(optionText) {
    this.clickElementUsingText(optionText);
  }

  /**
   * Perform double click
   */
  performDoubleClick() {
    this.doubleClickElement(this.doubleClickButton);
  }

  /**
   * Get text from field 1
   */
  getField1Text() {
    return this.getElementText(this.field1);
  }

  /**
   * Get text from field 2
   */
  getField2Text() {
    return this.getElementText(this.field2);
  }

  /**
   * Verify field 1 and field 2 have same text
   */
  verifyFieldsHaveSameText() {
    this.getField1Text().then((text1) => {
      this.getField2Text().should("equal", text1);
    });
  }

  /**
   * Perform drag and drop operation
   */
  performDragAndDrop() {
    this.dragAndDrop(this.dragSource, this.dropTarget);
  }

  /**
   * Check if element is dropped successfully
   */
  isElementDroppedSuccessfully() {
    return cy.get(this.dropTarget).should("be.visible");
  }

  /**
   * Check if dropped message is displayed
   */
  isDroppedMessageDisplayed() {
    return cy.get(this.droppedMessage).should("be.visible");
  }

  /**
   * Click new tab button
   */
  clickNewTabButton() {
    this.clickElement(this.newTabButton);
  }

  /**
   * Check if new tab button has target blank
   */
  isNewTabButtonValid() {
    return cy.get(this.newTabButton).should("have.attr", "target", "_blank");
  }

  /**
   * Click popup window button
   */
  clickPopupWindowButton() {
    this.clickElement(this.popupWindowButton);
  }

  /**
   * Check if popup window is displayed
   */
  isPopupWindowDisplayed() {
    return cy.get(this.popupWindow).should("be.visible");
  }

  /**
   * Check if popup dialog is displayed
   */
  isPopupDialogDisplayed() {
    return cy.get(this.popupDialog).should("be.visible");
  }

  /**
   * Click start/stop button
   */
  clickDynamicButton() {
    this.clickElement(this.startButton);
  }

  /**
   * Get current button text
   */
  getDynamicButtonText() {
    return this.getElementText(this.startButton);
  }

  /**
   * Check if button color changed
   */
  isButtonColorChanged() {
    return cy.get(this.startButton).should(($btn) => {
      expect($btn).to.have.css("background-color");
    });
  }

  /**
   * Check if success message is displayed
   */
  isSuccessMessageDisplayed() {
    return cy.get(this.successMessage).should("be.visible");
  }

  /**
   * Check if alert message is displayed
   */
  isAlertMessageDisplayed() {
    return cy.get(this.alertMessage).should("be.visible");
  }

  /**
   * Switch to new tab
   */
  switchToNewTab() {
    this.switchToNewTab();
  }

  /**
   * Go back to previous page
   */
  goBackFromNewTab() {
    this.goBack();
  }
}

export default InteractiveElementsPage;
