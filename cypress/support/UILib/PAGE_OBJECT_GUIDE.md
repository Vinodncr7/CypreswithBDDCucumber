# Page Object Classes - Usage Guide

## Overview

Each step definition file now has a corresponding Page Object class that:
- Extends UIController for UI interactions
- Contains all locators specific to that feature
- Provides high-level methods for page operations
- Maintains clean separation between step definitions and page logic

---

## File Structure

```
cypress/support/UILib/
├── UIController.js                    (Base UI actions class)
├── DataEntryFormPage.js              (Form page object)
├── InteractiveElementsPage.js        (Interactive page object)
├── TableOperationsPage.js            (Table page object)
├── FileOperationsPage.js             (File operations page object)
└── PageObject.js                     (Abstract base class for POM)

cypress/e2e/step_definitions/
├── DataEntryForm.js                  (Uses DataEntryFormPage)
├── InteractiveElements.js            (Uses InteractiveElementsPage)
├── TableOperations.js                (Uses TableOperationsPage)
└── FileOperations.js                 (Uses FileOperationsPage)
```

---

## 1. DataEntryFormPage

**Location:** `cypress/support/UILib/DataEntryFormPage.js`  
**Used by:** `cypress/e2e/step_definitions/DataEntryForm.js`

### Locators
```javascript
- nameField: "input[name='name']"
- emailField: "input[name='email']"
- phoneField: "input[name='phone']"
- addressField: "textarea[name='address']"
- genderMaleOption: "input[value='male']"
- genderFemaleOption: "input[value='female']"
- countryDropdown: "select[name='country']"
- colorsDropdown: "select[name='colors']"
- datePicker1, datePicker2, datePicker3
- submitButton, resetButton
```

### Key Methods
```javascript
const formPage = new DataEntryFormPage();

// Fill form
formPage.fillCompleteForm({
  name: "John Doe",
  email: "john@example.com",
  phone: "9876543210",
  address: "123 Main St"
});

// Select options
formPage.selectGender("male");
formPage.selectCountry("USA");
formPage.selectColor("Blue");
formPage.selectMultipleDays(["Monday", "Wednesday"]);

// Date operations
formPage.selectDatePicker1("12/25/2024");
formPage.selectDateRange("01-01-2024", "31-12-2024");

// Submit/Reset
formPage.submitForm();
formPage.resetForm();

// Get values
formPage.getFormFieldValue("name");
formPage.isFormSubmittedSuccessfully();
```

### Step Definition Usage
```javascript
import DataEntryFormPage from "../../support/UILib/DataEntryFormPage.js";

const formPage = new DataEntryFormPage();

When("User fills the form with following data:", (dataTable) => {
  const data = dataTable.rowsHash();
  formPage.fillCompleteForm(data);
});

When("User selects gender {string}", (gender) => {
  formPage.selectGender(gender);
});
```

---

## 2. InteractiveElementsPage

**Location:** `cypress/support/UILib/InteractiveElementsPage.js`  
**Used by:** `cypress/e2e/step_definitions/InteractiveElements.js`

### Locators
```javascript
- simpleAlertButton, confirmationAlertButton, promptAlertButton
- hoverButton, dropdownMenu
- doubleClickButton, field1, field2
- dragSource, dropTarget
- newTabButton
- popupWindowButton
- startButton, stopButton
```

### Key Methods
```javascript
const interactivePage = new InteractiveElementsPage();

// Alert handling
interactivePage.clickSimpleAlert();
interactivePage.acceptAlert();
interactivePage.dismissAlert();

// Confirmation
interactivePage.clickConfirmationAlert();
interactivePage.acceptConfirmation();

// Prompt
interactivePage.clickPromptAlert();
interactivePage.handlePromptWithText("Test Text");

// Hover and dropdown
interactivePage.hoverAndVerifyDropdown();
interactivePage.isDropdownDisplayed();
interactivePage.clickDropdownOption("Option 1");

// Double click
interactivePage.performDoubleClick();
interactivePage.verifyFieldsHaveSameText();

// Drag and drop
interactivePage.performDragAndDrop();
interactivePage.isElementDroppedSuccessfully();

// Tabs and popups
interactivePage.clickNewTabButton();
interactivePage.clickPopupWindowButton();
interactivePage.isPopupWindowDisplayed();

// Dynamic buttons
interactivePage.clickDynamicButton();
interactivePage.getDynamicButtonText();
```

---

## 3. TableOperationsPage

**Location:** `cypress/support/UILib/TableOperationsPage.js`  
**Used by:** `cypress/e2e/step_definitions/TableOperations.js`

### Locators
```javascript
- staticTable, dynamicTable, paginationTable
- tableHeader, tableBodyRow, tableBodyCell
- paginationContainer, nextButton, previousButton
- sortButton, filterInput
```

### Key Methods
```javascript
const tablePage = new TableOperationsPage();

// View tables
tablePage.viewStaticTable();
tablePage.viewDynamicTable();
tablePage.viewPaginationTable();

// Get table data
tablePage.getTableRowCount("pagination");
tablePage.getTableCellValue("static", 0, 1);
tablePage.getTableData("dynamic");

// Search and filter
tablePage.searchInTable("pagination", "product name");

// Sorting
tablePage.sortTable("dynamic", "Price");
tablePage.isTableSortedAscending("pagination", 2);
tablePage.isTableSortedDescending("static", 0);

// Pagination
tablePage.goToPage("2");
tablePage.clickNextPage();
tablePage.clickPreviousPage();
tablePage.getPaginationPageCount();

// Verification
tablePage.verifyTableContainsValue("pagination", "value");
tablePage.isNextButtonEnabled();
tablePage.isPreviousButtonEnabled();

// Row operations
tablePage.doubleClickTableRow("pagination", 0);
tablePage.rightClickTableCell("static", 1, 2);
tablePage.selectAllTableRows("pagination");
```

---

## 4. FileOperationsPage

**Location:** `cypress/support/UILib/FileOperationsPage.js`  
**Used by:** `cypress/e2e/step_definitions/FileOperations.js`

### Locators
```javascript
- singleFileInput, multipleFileInput
- uploadButton, downloadButton
- uploadSuccessMessage, uploadErrorMessage
- fileCountDisplay
```

### Key Methods
```javascript
const filePage = new FileOperationsPage();

// Single file upload
filePage.clickSingleFileUpload();
filePage.uploadSingleFile("sample.txt");
filePage.performCompleteUpload("file.pdf");

// Multiple files
filePage.clickMultipleFileUpload();
filePage.uploadMultipleFiles(["file1.txt", "file2.pdf"]);

// Upload verification
filePage.isUploadSuccessful();
filePage.isUploadErrorDisplayed();
filePage.getUploadedFileCount();
filePage.getUploadedFileName();

// File input operations
filePage.isFileInputEmpty();
filePage.isFileInputNotEmpty();
filePage.clearFileInput();

// Download operations
filePage.clickDownloadButton();
filePage.isFileDownloaded("document.pdf");
filePage.verifyFileExists("file.txt");
filePage.getFileSize("downloaded.pdf");

// File type validation
filePage.uploadUnsupportedFile("unsupported.xyz");
filePage.isFileTypeErrorDisplayed();

// File management
filePage.getDownloadedFilesList();
filePage.deleteDownloadedFile("file.pdf");
filePage.clearDownloadsFolder();

// File input attributes
filePage.acceptsMultipleFiles();
filePage.getFileInputAccept();
filePage.isFileInputDisabled();
filePage.isFileInputEnabled();
```

---

## Benefits of Using Page Object Classes

### 1. **Locator Management**
- All locators in one place
- Easy to update when UI changes
- No hardcoded selectors in step definitions

### 2. **Code Reusability**
```javascript
// Bad - Code duplication in multiple step files
cy.get("input[name='email']").type("test@example.com");
formPage.enterText("input[name='email']", "test@example.com");

// Good - Reusable method
formPage.enterEmail("test@example.com"); // method in page object
```

### 3. **Maintainability**
- Changes in UI only require page object updates
- Step definitions remain unchanged
- Easy to add new methods

### 4. **Better Organization**
- Clear separation of concerns
- Page logic in page objects
- Test logic in step definitions
- Utilities in base classes

### 5. **Inheritance Chain**
```
UIController (base UI methods)
    ↓
DataEntryFormPage (form-specific methods)
    ↓
Used in DataEntryForm.js step definitions
```

---

## Step Definition Example

### Before (Without Page Objects)
```javascript
When("User enters email {string}", (email) => {
  cy.get("input[name='email']").clear().type(email);
});

When("User enters name {string}", (name) => {
  cy.get("input[name='name']").clear().type(name);
});

Then("Form should be submitted", () => {
  cy.contains("button", "Submit").click();
  cy.get(".success-message").should("be.visible");
});
```

### After (With Page Objects)
```javascript
import DataEntryFormPage from "../../support/UILib/DataEntryFormPage.js";

const formPage = new DataEntryFormPage();

When("User enters email {string}", (email) => {
  formPage.enterText(formPage.emailField, email);
});

When("User enters name {string}", (name) => {
  formPage.enterText(formPage.nameField, name);
});

Then("Form should be submitted", () => {
  formPage.submitForm();
  formPage.isFormSubmittedSuccessfully();
});
```

---

## Creating New Page Objects

To create a new page object for a new feature:

```javascript
import UIController from "./UIController.js";

class MyNewPage extends UIController {
  constructor() {
    super();
    
    // Define all locators
    this.element1 = "#element-id";
    this.element2 = ".element-class";
  }

  // Create high-level methods
  performAction() {
    this.clickElement(this.element1);
    this.enterText(this.element2, "value");
  }

  verifyResult() {
    return this.isElementDisplayed(this.element1);
  }
}

export default MyNewPage;
```

---

## Best Practices

1. **One Page Object per Feature/Feature File**
   - Keep page objects focused and clean

2. **Use Descriptive Method Names**
   - `clickLoginButton()` not `click1()`
   - `fillUserForm()` not `fill()`

3. **Store All Locators in Page Objects**
   - Never hardcode locators in step definitions

4. **Extend Existing Methods**
   - Use UIController methods when possible
   - Create new methods for complex operations

5. **Keep Methods Simple**
   - Single responsibility principle
   - One action per method when possible

6. **Use Meaningful Assertions in Methods**
   ```javascript
   // Good
   isFormValid() {
     return this.isElementDisplayed(this.errorMessage);
   }

   // Also use in step definition
   Then("Form should be valid", () => {
     formPage.isFormValid();
   });
   ```

---

## All Page Object Classes Available

| Page Object | Feature | Locators | Methods |
|-------------|---------|----------|---------|
| DataEntryFormPage | Form filling & validation | Form fields, Dropdowns | 15+ methods |
| InteractiveElementsPage | Alerts, Hover, Drag-drop | Alert buttons, Menus | 20+ methods |
| TableOperationsPage | Table operations | Tables, Pagination | 18+ methods |
| FileOperationsPage | File upload/download | File inputs, Buttons | 18+ methods |

---

## Related Files

- [UIController.js](UIController.js) - Base UI interactions class
- [BasicAssertions.js](../BasicAssertions.js) - Assertion utilities
- [CommonUtils.js](../CommonUtils.js) - Common utilities
- [Locators.js](../Locators.js) - Global locators
- [TestData.js](../TestData.js) - Test data management
