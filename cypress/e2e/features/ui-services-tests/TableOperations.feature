Feature: Web Table Operations
  As a user
  I want to interact with static, dynamic and paginated tables
  So that I can verify table functionality

  Background:
    Given User navigates to the automation practice website

  @smoke @table @static
  Scenario: Verify static table data
    When User views the static web table
    Then Table should contain following data:
      | BookName | Author | Subject | Price |
      | Learn Selenium | Amit | Selenium | 300 |
      | Learn Java | Mukesh | Java | 500 |
      | Learn JS | Animesh | Javascript | 300 |

  @table @static
  Scenario: Search for book in static table
    When User searches for book "Learn Selenium" in static table
    Then Book should be found with author "Amit"
    And Book price should be "300"

  @table @dynamic
  Scenario: Verify dynamic table data
    When User views the dynamic web table
    Then Dynamic table should display process information
    And Table should show CPU, Memory, Network data

  @table @dynamic
  Scenario: Verify dynamic table sorting and filtering
    When User sorts dynamic table by "CPU load"
    Then Table should be sorted in ascending order
    When User filters table by "Chrome"
    Then Only Chrome process data should be displayed

  @smoke @table @pagination
  Scenario: Navigate through paginated table
    When User views the pagination web table
    Then First page should show 5 products
    When User clicks on page "2"
    Then Second page products should be displayed
    When User clicks on next page button
    Then Page should navigate to next page

  @table @pagination
  Scenario: Verify pagination table products
    When User searches for product "Smartphone" in pagination table
    Then Product should be found with price "$10.99"
    When User sorts by price
    Then Products should be sorted by price

  @table @pagination
  Scenario: Verify product count across all pages
    When User navigates through all pages in pagination table
    Then Total product count should be verified
    And Each page should have correct product information
