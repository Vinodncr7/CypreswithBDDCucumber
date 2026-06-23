import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import InteractiveElementsPage from "../../support/UILib/InteractiveElementsPage.js";
import BasicAssertions from "../../support/BasicAssertions.js";

const baseUrl = "https://testautomationpractice.blogspot.com/";
const interactivePage = new InteractiveElementsPage();
const basicAssertions = new BasicAssertions();

// Background Steps defined in common.js


// Alert Steps
When("User clicks on simple alert button", () => {
  interactivePage.clickSimpleAlert();
});

Then("Alert dialog should be displayed", () => {
  interactivePage.handleAlert("accept");
});

When("User accepts the alert", () => {
  interactivePage.acceptAlert();
});

Then("Alert should be dismissed", () => {
  basicAssertions.assertElementVisible(interactivePage.simpleAlertButton);
});

// Confirmation Alert Steps
When("User clicks on confirmation alert button", () => {
  interactivePage.clickConfirmationAlert();
});

Then("Confirmation dialog should be displayed with message {string}", (message) => {
  cy.on("window:confirm", (text) => {
    expect(text).to.include(message);
    return true;
  });
});

When("User clicks OK on confirmation dialog", () => {
  interactivePage.acceptConfirmation();
});

Then("Confirmation alert should be accepted", () => {
  basicAssertions.assertElementVisible(interactivePage.confirmationAlertButton);
});

// Prompt Alert Steps
When("User clicks on prompt alert button", () => {
  interactivePage.clickPromptAlert();
});

Then("Prompt dialog should be displayed", () => {
  cy.on("window:prompt", () => "");
});

When("User enters {string} in prompt", (text) => {
  interactivePage.handlePromptWithText(text);
});

When("User clicks OK on prompt", () => {
  cy.on("window:prompt", () => true);
});

Then("Text should be entered successfully", () => {
  basicAssertions.assertElementVisible(interactivePage.promptAlertButton);
});

// Mouse Hover Steps
When("User hovers over {string} button", (buttonText) => {
  interactivePage.hoverAndVerifyDropdown();
});

Then("Dropdown menu should be displayed", () => {
  interactivePage.isDropdownDisplayed();
});

Then("Menu options should be visible", () => {
  interactivePage.getDropdownOptions().should("have.length.greaterThan", 0);
});

// Double Click Steps
When("User double clicks on {string} button", (buttonText) => {
  interactivePage.performDoubleClick();
});

Then("Text from Field1 should be copied to Field2", () => {
  interactivePage.verifyFieldsHaveSameText();
});

// Drag and Drop Steps
When("User drags {string} to drop area", (dragText) => {
  interactivePage.performDragAndDrop();
});

Then("Element should be dropped successfully", () => {
  interactivePage.isElementDroppedSuccessfully();
});

Then("Success message should be displayed", () => {
  interactivePage.isDroppedMessageDisplayed();
});

// Tabs Steps
When("User clicks on new tab button", () => {
  interactivePage.isNewTabButtonValid();
});

Then("New tab should be opened", () => {
  cy.window().then((win) => {
    cy.stub(win, "open").callThrough();
  });
});

Then("Wikipedia page should be loaded", () => {
  cy.url().should("include", "wikipedia");
});

// Popup Window Steps
When("User clicks on popup window button", () => {
  interactivePage.clickPopupWindowButton();
});

Then("New popup window should be opened", () => {
  interactivePage.isPopupWindowDisplayed();
});

Then("Popup content should be displayed", () => {
  interactivePage.isPopupDialogDisplayed();
});

// Dynamic Button Steps
When("User clicks the START button", () => {
  interactivePage.clickDynamicButton();
});

Then("Button color should change dynamically", () => {
  interactivePage.isButtonColorChanged();
});

Then("Button text should be updated", () => {
  basicAssertions.assertElementVisible("//button[contains(text(), 'STOP') or contains(text(), 'START')]");
});
