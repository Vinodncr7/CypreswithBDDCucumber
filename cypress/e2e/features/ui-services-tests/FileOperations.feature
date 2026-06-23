Feature: File Upload and Download Testing
  As a user
  I want to upload files and verify file operations
  So that I can test file handling functionality

  Background:
    Given User navigates to the automation practice website

  @smoke @fileupload
  Scenario: Upload single file
    When User clicks on upload single file button
    And User selects file "sample.txt" for upload
    Then File should be uploaded successfully
    And File name should be displayed in the upload field

  @fileupload
  Scenario: Upload multiple files
    When User clicks on upload multiple files button
    And User selects following files for upload:
      | files          |
      | sample1.txt    |
      | sample2.pdf    |
      | sample3.xlsx   |
    Then All files should be uploaded successfully
    And File count should show "3"

  @fileupload @validation
  Scenario: Verify file upload validation
    When User attempts to upload without selecting any file
    Then Error message should be displayed
    And Upload field should remain empty

  @filedownload
  Scenario: Download file
    When User clicks on download button
    Then File should be downloaded successfully
    And Downloaded file should exist
    And File size should be greater than "0"

  @fileupload @filetype
  Scenario: Verify file type validation
    When User selects an unsupported file type
    Then File type error should be displayed
    And File should not be uploaded
