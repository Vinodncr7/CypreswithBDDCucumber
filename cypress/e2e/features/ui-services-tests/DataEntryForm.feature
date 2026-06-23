Feature: Data Entry Form Testing
  As a user
  I want to fill and submit the automation practice form
  So that I can test form interactions

  Background:
    Given User navigates to the automation practice website

  @smoke @form
  Scenario: Fill form with valid data and submit
    When User fills the form with following data:
      | fieldName | value                    |
      | Name      | John Doe                 |
      | Email     | john@example.com         |
      | Phone     | 9876543210              |
      | Address   | 123 Main Street, NY      |
    And User selects gender "Male"
    And User selects days:
      | days    |
      | Sunday  |
      | Monday  |
      | Friday  |
    And User selects country "United States"
    And User selects color "Red"
    And User clicks the submit button
    Then Form should be submitted successfully

  @regression @form
  Scenario: Verify form validation with empty required fields
    When User does not fill any form fields
    And User clicks the submit button
    Then Form validation error should be displayed

  @form @datepicker
  Scenario: Select dates using date pickers
    When User selects date "12/25/2024" in date picker 1
    And User selects date "25/12/2024" in date picker 2
    And User selects date range from "01-01-2024" to "31-12-2024" in date picker 3
    Then All dates should be selected correctly

  @form @dropdown
  Scenario: Test scrolling dropdown for colors
    When User clicks on colors dropdown
    And User selects multiple colors from scrolling list:
      | colors |
      | Red    |
      | Green  |
      | Blue   |
    Then Selected colors should be displayed
