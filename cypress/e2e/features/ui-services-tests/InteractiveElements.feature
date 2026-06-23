Feature: Interactive Elements Testing
  As a user
  I want to interact with various UI elements
  So that I can verify all interactive features work correctly

  Background:
    Given User navigates to the automation practice website

  @smoke @alerts
  Scenario: Handle simple alert
    When User clicks on simple alert button
    Then Alert dialog should be displayed
    When User accepts the alert
    Then Alert should be dismissed

  @smoke @alerts
  Scenario: Handle confirmation alert
    When User clicks on confirmation alert button
    Then Confirmation dialog should be displayed with message "Press a button"
    When User clicks OK on confirmation dialog
    Then Confirmation alert should be accepted

  @alerts
  Scenario: Handle prompt alert with text input
    When User clicks on prompt alert button
    Then Prompt dialog should be displayed
    When User enters "Automation Testing" in prompt
    And User clicks OK on prompt
    Then Text should be entered successfully

  @smoke @hover
  Scenario: Perform mouse hover action
    When User hovers over "Point Me" button
    Then Dropdown menu should be displayed
    And Menu options should be visible

  @smoke @doubleclick
  Scenario: Perform double click action
    When User double clicks on "Copy Text" button
    Then Text from Field1 should be copied to Field2

  @dragdrop
  Scenario: Perform drag and drop action
    When User drags "Drag me to my target" to drop area
    Then Element should be dropped successfully
    And Success message should be displayed

  @tabs
  Scenario: Switch between tabs
    When User clicks on new tab button
    Then New tab should be opened
    And Wikipedia page should be loaded

  @popup
  Scenario: Handle popup windows
    When User clicks on popup window button
    Then New popup window should be opened
    And Popup content should be displayed

  @dynamicbutton
  Scenario: Interact with dynamic button
    When User clicks the START button
    Then Button color should change dynamically
    And Button text should be updated
