import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import TableOperationsPage from "../../support/UILib/TableOperationsPage.js";
import BasicAssertions from "../../support/BasicAssertions.js";

const baseUrl = "https://testautomationpractice.blogspot.com/";
const tablePage = new TableOperationsPage();
const basicAssertions = new BasicAssertions();

// Background Steps defined in common.js


// Static Table Steps
When("User views the static web table", () => {
  tablePage.viewStaticTable();
});

Then("Table should contain following data:", (dataTable) => {
  const expectedData = dataTable.raw();
  expectedData.forEach((row, rowIndex) => {
    row.forEach((cell, cellIndex) => {
      tablePage.getTableCellValue("static", rowIndex - 1, cellIndex).should("contain.text", cell);
    });
  });
});

When("User searches for book {string} in static table", (bookName) => {
  tablePage.searchInTable("static", bookName);
});

Then("Book should be found with author {string}", (author) => {
  tablePage.verifyTableContainsValue("static", author);
});

Then("Book price should be {string}", (price) => {
  tablePage.verifyTableContainsValue("static", price);
});

// Dynamic Table Steps
When("User views the dynamic web table", () => {
  tablePage.viewDynamicTable();
});

Then("Dynamic table should display process information", () => {
  tablePage.getTableRowCount("dynamic").should("be.greaterThan", 0);
});

Then("Table should show CPU, Memory, Network data", () => {
  tablePage.verifyTableContainsValue("dynamic", "CPU load");
  tablePage.verifyTableContainsValue("dynamic", "Memory");
  tablePage.verifyTableContainsValue("dynamic", "Network");
});

When("User sorts dynamic table by {string}", (sortBy) => {
  tablePage.sortTable("dynamic", sortBy);
});

Then("Table should be sorted in ascending order", () => {
  tablePage.isTableSortedAscending("dynamic", 0).should("be.true");
});

When("User filters table by {string}", (filterText) => {
  tablePage.searchInTable("dynamic", filterText);
});

Then("Only Chrome process data should be displayed", () => {
  tablePage.verifyTableContainsValue("dynamic", "Chrome");
});

// Pagination Table Steps
When("User views the pagination web table", () => {
  tablePage.viewPaginationTable();
});

Then("First page should show {int} products", (expectedCount) => {
  tablePage.getTableRowCount("pagination").should("equal", expectedCount);
});

When("User clicks on page {string}", (pageNumber) => {
  tablePage.goToPage(pageNumber);
});

Then("Second page products should be displayed", () => {
  tablePage.getTableRowCount("pagination").should("be.greaterThan", 0);
});

When("User clicks on next page button", () => {
  tablePage.clickNextPage();
});

Then("Page should navigate to next page", () => {
  tablePage.getTableRowCount("pagination").should("be.greaterThan", 0);
});

// Product Search Steps
When("User searches for product {string} in pagination table", (product) => {
  tablePage.searchInTable("pagination", product);
});

Then("Product should be found with price {string}", (price) => {
  tablePage.verifyTableContainsValue("pagination", price);
});

When("User sorts by price", () => {
  tablePage.sortTable("pagination", "Price");
});

Then("Products should be sorted by price", () => {
  tablePage.isTableSortedAscending("pagination", 2).should("be.true");
});

// All Pages Navigation Steps
When("User navigates through all pages in pagination table", () => {
  tablePage.getPaginationPageCount().then((count) => {
    for (let i = 1; i < count; i++) {
      tablePage.goToPage(i.toString());
    }
  });
});

Then("Total product count should be verified", () => {
  tablePage.getTableRowCount("pagination").should("be.greaterThan", 0);
});

Then("Each page should have correct product information", () => {
  tablePage.getTableRowCount("pagination").should("be.greaterThan", 0);
});
