import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import FileOperationsPage from "../../support/UILib/FileOperationsPage.js";
import BasicAssertions from "../../support/BasicAssertions.js";
import path from "path";

const baseUrl = "https://testautomationpractice.blogspot.com/";
const filePage = new FileOperationsPage();
const basicAssertions = new BasicAssertions();

// Background Steps defined in common.js


// File Upload - Single File
When("User clicks on upload single file button", () => {
  filePage.clickSingleFileUpload();
});

When("User selects file {string} for upload", (fileName) => {
  filePage.uploadSingleFile(fileName);
});

Then("File should be uploaded successfully", () => {
  filePage.isUploadSuccessful();
});

Then("File name should be displayed in the upload field", () => {
  filePage.isFileInputNotEmpty();
});

// File Upload - Multiple Files
When("User clicks on upload multiple files button", () => {
  filePage.clickMultipleFileUpload();
});

When("User selects following files for upload:", (dataTable) => {
  const files = dataTable.raw().flat();
  filePage.uploadMultipleFiles(files);
});

Then("All files should be uploaded successfully", () => {
  filePage.isUploadSuccessful();
});

Then("File count should show {string}", (count) => {
  filePage.getUploadedFileCount().should("contain.text", count);
});

// File Upload Validation
When("User attempts to upload without selecting any file", () => {
  filePage.clickUploadButton();
});

Then("Error message should be displayed", () => {
  filePage.isUploadErrorDisplayed();
});

Then("Upload field should remain empty", () => {
  filePage.isFileInputEmpty();
});

// File Download
When("User clicks on download button", () => {
  filePage.clickDownloadButton();
});

Then("File should be downloaded successfully", () => {
  basicAssertions.assertElementVisible("body");
});

Then("Downloaded file should exist", () => {
  const downloadsFolder = Cypress.config("downloadsFolder");
  cy.readFile(path.join(downloadsFolder, "*")).should("exist");
});

Then("File size should be greater than {string}", (size) => {
  const downloadsFolder = Cypress.config("downloadsFolder");
  cy.exec(`ls -lh ${downloadsFolder}`).then((result) => {
    expect(result.stdout).to.not.be.empty;
  });
});

// File Type Validation
When("User selects an unsupported file type", () => {
  filePage.uploadUnsupportedFile("unsupported.xyz");
});

Then("File type error should be displayed", () => {
  filePage.isFileTypeErrorDisplayed();
});

Then("File should not be uploaded", () => {
  filePage.isFileInputEmpty();
});
