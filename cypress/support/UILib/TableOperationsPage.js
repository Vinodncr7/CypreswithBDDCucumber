import UIController from "./UIController.js";

class TableOperationsPage extends UIController {
  constructor() {
    super();

    // Table Locators
    this.staticTable = "table:first-of-type";
    this.dynamicTable = "table:nth-of-type(2)";
    this.paginationTable = "table:last-of-type";

    // Table Structure
    this.tableHeader = "thead th";
    this.tableBodyRow = "tbody tr";
    this.tableBodyCell = "tbody td";
    this.tableRow = (index) => `tbody tr:nth-child(${index})`;
    this.tableCell = (rowIndex, cellIndex) => `tbody tr:nth-child(${rowIndex}) td:nth-child(${cellIndex})`;

    // Pagination
    this.paginationContainer = ".pagination, [role='navigation']";
    this.paginationButton = (pageNumber) => `//button[contains(text(), '${pageNumber}')]`;
    this.nextButton = "//button[contains(text(), 'Next')]";
    this.previousButton = "//button[contains(text(), 'Previous')]";

    // Sorting and Filtering
    this.sortButton = (columnName) => `//th[contains(text(), '${columnName}')]`;
    this.filterInput = "input[placeholder*='filter' i]";
    this.filterButton = "//button[contains(text(), 'Filter')]";

    // Specific Columns
    this.nameColumn = 0;
    this.priceColumn = 2;
    this.authorColumn = 1;
  }

  /**
   * View static table
   */
  viewStaticTable() {
    return cy.get(this.staticTable).should("be.visible");
  }

  /**
   * View dynamic table
   */
  viewDynamicTable() {
    return cy.get(this.dynamicTable).should("be.visible");
  }

  /**
   * View pagination table
   */
  viewPaginationTable() {
    return cy.get(this.paginationTable).should("be.visible");
  }

  /**
   * Get table row count
   * @param {string} tableType - Type of table (static, dynamic, pagination)
   */
  getTableRowCount(tableType = "pagination") {
    let table;
    switch (tableType.toLowerCase()) {
      case "static":
        table = this.staticTable;
        break;
      case "dynamic":
        table = this.dynamicTable;
        break;
      case "pagination":
        table = this.paginationTable;
        break;
      default:
        throw new Error("Invalid table type");
    }
    return cy.get(table).find(this.tableBodyRow).then(($rows) => {
      return $rows.length;
    });
  }

  /**
   * Get table cell value
   * @param {string} tableType - Type of table
   * @param {number} row - Row index (0-based)
   * @param {number} col - Column index (0-based)
   */
  getTableCellValue(tableType, row, col) {
    let table;
    switch (tableType.toLowerCase()) {
      case "static":
        table = this.staticTable;
        break;
      case "dynamic":
        table = this.dynamicTable;
        break;
      case "pagination":
        table = this.paginationTable;
        break;
      default:
        throw new Error("Invalid table type");
    }
    return cy.get(table).find(this.tableBodyRow).eq(row).find(this.tableBodyCell).eq(col);
  }

  /**
   * Search for value in table
   * @param {string} tableType - Type of table
   * @param {string} searchValue - Value to search
   */
  searchInTable(tableType, searchValue) {
    cy.get(this.filterInput).type(searchValue);
    cy.get(this.filterButton).click();
  }

  /**
   * Sort table by column
   * @param {string} tableType - Type of table
   * @param {string} columnName - Column name to sort
   */
  sortTable(tableType, columnName) {
    cy.get(this.sortButton(columnName)).click();
  }

  /**
   * Navigate to page
   * @param {number} pageNumber - Page number
   */
  goToPage(pageNumber) {
    this.clickElement(this.paginationButton(pageNumber));
  }

  /**
   * Click next page button
   */
  clickNextPage() {
    this.clickElement(this.nextButton);
  }

  /**
   * Click previous page button
   */
  clickPreviousPage() {
    this.clickElement(this.previousButton);
  }

  /**
   * Get all row data as array
   * @param {string} tableType - Type of table
   */
  getTableData(tableType = "pagination") {
    let table;
    switch (tableType.toLowerCase()) {
      case "static":
        table = this.staticTable;
        break;
      case "dynamic":
        table = this.dynamicTable;
        break;
      case "pagination":
        table = this.paginationTable;
        break;
      default:
        throw new Error("Invalid table type");
    }

    return cy.get(table).find(this.tableBodyRow).then(($rows) => {
      const data = [];
      $rows.each((index, row) => {
        const rowData = [];
        cy.wrap(row)
          .find(this.tableBodyCell)
          .each(($cell) => {
            rowData.push($cell.text());
          });
        data.push(rowData);
      });
      return data;
    });
  }

  /**
   * Verify table contains value
   * @param {string} tableType - Type of table
   * @param {string} value - Value to verify
   */
  verifyTableContainsValue(tableType, value) {
    let table;
    switch (tableType.toLowerCase()) {
      case "static":
        table = this.staticTable;
        break;
      case "dynamic":
        table = this.dynamicTable;
        break;
      case "pagination":
        table = this.paginationTable;
        break;
      default:
        throw new Error("Invalid table type");
    }
    return cy.get(table).should("contain.text", value);
  }

  /**
   * Check if table is sorted in ascending order
   * @param {string} tableType - Type of table
   * @param {number} columnIndex - Column to check
   */
  isTableSortedAscending(tableType, columnIndex = 0) {
    let table;
    switch (tableType.toLowerCase()) {
      case "static":
        table = this.staticTable;
        break;
      case "dynamic":
        table = this.dynamicTable;
        break;
      case "pagination":
        table = this.paginationTable;
        break;
      default:
        throw new Error("Invalid table type");
    }

    return cy.get(table).find(this.tableBodyRow).then(($rows) => {
      const values = [];
      $rows.each((index, row) => {
        const cellValue = Cypress.$(row).find(this.tableBodyCell).eq(columnIndex).text();
        values.push(cellValue);
      });

      const sortedValues = [...values].sort();
      return values.join(",") === sortedValues.join(",");
    });
  }

  /**
   * Check if table is sorted in descending order
   * @param {string} tableType - Type of table
   * @param {number} columnIndex - Column to check
   */
  isTableSortedDescending(tableType, columnIndex = 0) {
    let table;
    switch (tableType.toLowerCase()) {
      case "static":
        table = this.staticTable;
        break;
      case "dynamic":
        table = this.dynamicTable;
        break;
      case "pagination":
        table = this.paginationTable;
        break;
      default:
        throw new Error("Invalid table type");
    }

    return cy.get(table).find(this.tableBodyRow).then(($rows) => {
      const values = [];
      $rows.each((index, row) => {
        const cellValue = Cypress.$(row).find(this.tableBodyCell).eq(columnIndex).text();
        values.push(cellValue);
      });

      const sortedValues = [...values].sort().reverse();
      return values.join(",") === sortedValues.join(",");
    });
  }

  /**
   * Get pagination page count
   */
  getPaginationPageCount() {
    return cy.get(this.paginationContainer).find("button").then(($buttons) => {
      return $buttons.length;
    });
  }

  /**
   * Check if next button is enabled
   */
  isNextButtonEnabled() {
    return cy.get(this.nextButton).should("be.enabled");
  }

  /**
   * Check if previous button is enabled
   */
  isPreviousButtonEnabled() {
    return cy.get(this.previousButton).should("be.enabled");
  }

  /**
   * Double click on table row
   * @param {string} tableType - Type of table
   * @param {number} rowIndex - Row index
   */
  doubleClickTableRow(tableType, rowIndex) {
    let table;
    switch (tableType.toLowerCase()) {
      case "static":
        table = this.staticTable;
        break;
      case "dynamic":
        table = this.dynamicTable;
        break;
      case "pagination":
        table = this.paginationTable;
        break;
      default:
        throw new Error("Invalid table type");
    }
    cy.get(table).find(this.tableBodyRow).eq(rowIndex).dblclick();
  }

  /**
   * Right click on table cell
   * @param {string} tableType - Type of table
   * @param {number} row - Row index
   * @param {number} col - Column index
   */
  rightClickTableCell(tableType, row, col) {
    let table;
    switch (tableType.toLowerCase()) {
      case "static":
        table = this.staticTable;
        break;
      case "dynamic":
        table = this.dynamicTable;
        break;
      case "pagination":
        table = this.paginationTable;
        break;
      default:
        throw new Error("Invalid table type");
    }
    cy.get(table).find(this.tableBodyRow).eq(row).find(this.tableBodyCell).eq(col).rightclick();
  }

  /**
   * Select all rows in table
   * @param {string} tableType - Type of table
   */
  selectAllTableRows(tableType) {
    let table;
    switch (tableType.toLowerCase()) {
      case "static":
        table = this.staticTable;
        break;
      case "dynamic":
        table = this.dynamicTable;
        break;
      case "pagination":
        table = this.paginationTable;
        break;
      default:
        throw new Error("Invalid table type");
    }
    cy.get(table).find(`${this.tableBodyRow} input[type='checkbox']`).check({ force: true });
  }
}

export default TableOperationsPage;
