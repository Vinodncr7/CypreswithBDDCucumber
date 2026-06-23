import UIController from "./UIController.js";
import path from "path";

class FileOperationsPage extends UIController {
  constructor() {
    super();

    // File Upload Elements
    this.singleFileInput = "input[type='file']:first";
    this.multipleFileInput = "input[type='file'][multiple]";
    this.singleUploadLabel = "//label[contains(text(), 'Upload Single File')]";
    this.multipleUploadLabel = "//label[contains(text(), 'Upload Multiple Files')]";

    // Buttons
    this.uploadButton = "//button[contains(text(), 'Upload')]";
    this.downloadButton = "//button[contains(text(), 'Download')]";
    this.chooseFileButton = "//button[contains(text(), 'Choose File')]";

    // Messages
    this.uploadSuccessMessage = ".upload-success, [class*='success']";
    this.uploadErrorMessage = ".error, [class*='error']";
    this.fileCountDisplay = ".file-count, [class*='count']";

    // File Input Field
    this.fileInputField = "input[type='file']";
    this.fileNameDisplay = ".file-name-display";

    // Downloads
    this.downloadsFolder = Cypress.config("downloadsFolder");
  }

  /**
   * Click on single file upload
   */
  clickSingleFileUpload() {
    cy.contains("label", "Upload Single File").parent().find(this.fileInputField).should("exist");
  }

  /**
   * Click on multiple file upload
   */
  clickMultipleFileUpload() {
    cy.contains("label", "Upload Multiple Files")
      .parent()
      .find(this.fileInputField)
      .should("have.attr", "multiple");
  }

  /**
   * Upload single file
   * @param {string} fileName - File name to upload
   */
  uploadSingleFile(fileName) {
    const filePath = `cypress/fixtures/${fileName}`;
    this.selectFile(this.singleFileInput, filePath);
  }

  /**
   * Upload multiple files
   * @param {array} fileNames - Array of file names
   */
  uploadMultipleFiles(fileNames) {
    const filePaths = fileNames.map((file) => `cypress/fixtures/${file}`);
    this.selectFile(this.multipleFileInput, filePaths, true);
  }

  /**
   * Click upload button
   */
  clickUploadButton() {
    this.clickElementUsingText("Upload");
  }

  /**
   * Check if upload was successful
   */
  isUploadSuccessful() {
    return cy.get(this.uploadSuccessMessage).should("be.visible");
  }

  /**
   * Check if upload error is displayed
   */
  isUploadErrorDisplayed() {
    return cy.get(this.uploadErrorMessage).should("be.visible");
  }

  /**
   * Get uploaded file count
   */
  getUploadedFileCount() {
    return cy.get(this.fileCountDisplay).invoke("text");
  }

  /**
   * Get file name from display
   */
  getUploadedFileName() {
    return cy.get(this.fileNameDisplay).invoke("text");
  }

  /**
   * Clear file input
   */
  clearFileInput() {
    this.clearInputField(this.fileInputField);
  }

  /**
   * Verify file input is empty
   */
  isFileInputEmpty() {
    return cy.get(this.fileInputField).should(($input) => {
      expect($input.val()).to.be.empty;
    });
  }

  /**
   * Verify file input has value
   */
  isFileInputNotEmpty() {
    return cy.get(this.fileInputField).should(($input) => {
      expect($input.val()).to.not.be.empty;
    });
  }

  /**
   * Click download button
   */
  clickDownloadButton() {
    this.clickElementUsingText("Download");
  }

  /**
   * Check if file is downloaded
   * @param {string} fileName - File name to check
   */
  isFileDownloaded(fileName) {
    return cy.readFile(path.join(this.downloadsFolder, fileName)).should("exist");
  }

  /**
   * Check if file exists in downloads folder
   * @param {string} fileName - File name to check
   */
  verifyFileExists(fileName) {
    const filePath = path.join(this.downloadsFolder, fileName);
    return cy.readFile(filePath).should("exist");
  }

  /**
   * Get file size from downloads
   * @param {string} fileName - File name
   */
  getFileSize(fileName) {
    return cy
      .exec(`ls -lh "${path.join(this.downloadsFolder, fileName)}"`)
      .then((result) => {
        return result.stdout;
      });
  }

  /**
   * Delete downloaded file
   * @param {string} fileName - File name to delete
   */
  deleteDownloadedFile(fileName) {
    cy.exec(`rm "${path.join(this.downloadsFolder, fileName)}"`, { failOnNonZeroExit: false });
  }

  /**
   * Upload unsupported file type
   * @param {string} fileName - Unsupported file name
   */
  uploadUnsupportedFile(fileName) {
    const filePath = `cypress/fixtures/${fileName}`;
    this.selectFile(this.fileInputField, filePath, true);
  }

  /**
   * Verify file type error message
   */
  isFileTypeErrorDisplayed() {
    return cy.get(this.uploadErrorMessage).should("contain.text", "not supported");
  }

  /**
   * Get list of files in downloads folder
   */
  getDownloadedFilesList() {
    return cy.exec(`ls "${this.downloadsFolder}"`).then((result) => {
      return result.stdout.split("\n").filter((file) => file.length > 0);
    });
  }

  /**
   * Clear downloads folder
   */
  clearDownloadsFolder() {
    cy.exec(`rm -rf "${this.downloadsFolder}"/*`, { failOnNonZeroExit: false });
  }

  /**
   * Select file using file input
   * @param {string} filePath - File path
   */
  selectFileForUpload(filePath) {
    this.selectFile(this.fileInputField, filePath);
  }

  /**
   * Perform complete file upload workflow
   * @param {string} fileName - File name to upload
   */
  performCompleteUpload(fileName) {
    this.uploadSingleFile(fileName);
    this.clickUploadButton();
  }

  /**
   * Verify file upload with validation
   * @param {string} fileName - File name to validate
   */
  verifyFileUpload(fileName) {
    this.performCompleteUpload(fileName);
    return this.isUploadSuccessful();
  }

  /**
   * Check if file input accepts multiple files
   */
  acceptsMultipleFiles() {
    return cy.get(this.multipleFileInput).should("have.attr", "multiple");
  }

  /**
   * Get file input accept attribute
   */
  getFileInputAccept() {
    return cy.get(this.fileInputField).invoke("attr", "accept");
  }

  /**
   * Check if file input is disabled
   */
  isFileInputDisabled() {
    return cy.get(this.fileInputField).should("be.disabled");
  }

  /**
   * Check if file input is enabled
   */
  isFileInputEnabled() {
    return cy.get(this.fileInputField).should("be.enabled");
  }

  /**
   * Hover over upload button
   */
  hoverOverUploadButton() {
    this.mouseHover(this.uploadButton);
  }

  /**
   * Get upload button text
   */
  getUploadButtonText() {
    return this.getElementText(this.uploadButton);
  }

  /**
   * Take screenshot of file upload section
   * @param {string} screenshotName - Screenshot name
   */
  takeFileUploadScreenshot(screenshotName) {
    this.captureScreenshot(screenshotName);
  }
}

export default FileOperationsPage;
