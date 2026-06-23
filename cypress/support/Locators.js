class Locators {
  // Automation Practice Website - Form Elements
  static FORM_NAME_FIELD = "input[name='name']";
  static FORM_EMAIL_FIELD = "input[name='email']";
  static FORM_PHONE_FIELD = "input[name='phone']";
  static FORM_ADDRESS_FIELD = "textarea[name='address']";
  static FORM_GENDER_MALE = "input[value='male']";
  static FORM_GENDER_FEMALE = "input[value='female']";
  static FORM_COUNTRY_DROPDOWN = "select[name='country']";
  static FORM_COLORS_DROPDOWN = "select[name='colors']";
  static FORM_SUBMIT_BUTTON = "button[type='submit']";
  static FORM_RESET_BUTTON = "button[type='reset']";

  // Date Picker Locators
  static DATE_PICKER_1 = "input[id*='datepicker1']";
  static DATE_PICKER_2 = "input[id*='datepicker2']";
  static DATE_PICKER_3 = "input[id*='datepicker3']";
  static UI_DATEPICKER = ".ui-datepicker";

  // Alert Elements
  static SIMPLE_ALERT_BUTTON = "//button[contains(text(), 'Simple Alert')]";
  static CONFIRMATION_ALERT_BUTTON = "//button[contains(text(), 'Confirmation Alert')]";
  static PROMPT_ALERT_BUTTON = "//button[contains(text(), 'Prompt Alert')]";

  // Interactive Elements
  static HOVER_BUTTON = "//button[contains(text(), 'Point Me')]";
  static DROPDOWN_MENU = ".dropdown-menu";
  static DOUBLE_CLICK_BUTTON = "//button[contains(text(), 'Copy Text')]";
  static FIELD_1 = "input[id*='Field1']";
  static FIELD_2 = "input[id*='Field2']";
  static DRAG_SOURCE = "//div[contains(text(), 'Drag me to my target')]";
  static DROP_TARGET = "[id*='drop']";

  // Table Elements
  static STATIC_TABLE = "table:first-of-type";
  static DYNAMIC_TABLE = "table:nth-of-type(2)";
  static PAGINATION_TABLE = "table:last-of-type";
  static TABLE_HEADER = "thead th";
  static TABLE_BODY_ROW = "tbody tr";
  static TABLE_BODY_CELL = "tbody td";

  // File Upload Elements
  static FILE_INPUT = "input[type='file']";
  static SINGLE_FILE_UPLOAD = "//label[contains(text(), 'Upload Single File')]";
  static MULTIPLE_FILE_UPLOAD = "//label[contains(text(), 'Upload Multiple Files')]";
  static UPLOAD_SUCCESS_MESSAGE = ".upload-success, [class*='success']";

  // Pagination Elements
  static PAGINATION_CONTAINER = ".pagination, [role='navigation']";
  static NEXT_PAGE_BUTTON = "//button[contains(text(), 'Next')]";
  static PREVIOUS_PAGE_BUTTON = "//button[contains(text(), 'Previous')]";

  // Common Elements
  static BODY = "body";
  static PAGE_TITLE = "h1";
  static ERROR_MESSAGE = ".error-message";
  static SUCCESS_MESSAGE = ".success-message";
  static LOADING_SPINNER = ".loading-spinner, [class*='loading']";

  // Navigation Elements
  static HOME_LINK = "//a[contains(text(), 'Home')]";
  static ABOUT_LINK = "//a[contains(text(), 'About')]";
  static CONTACT_LINK = "//a[contains(text(), 'Contact')]";

  // Modal/Dialog Elements
  static MODAL_DIALOG = "[role='dialog']";
  static MODAL_CLOSE_BUTTON = "[class*='close']";
  static MODAL_SAVE_BUTTON = "//button[contains(text(), 'Save')]";
  static MODAL_CANCEL_BUTTON = "//button[contains(text(), 'Cancel')]";

  // Search and Filter Elements
  static SEARCH_INPUT = "input[placeholder*='search' i]";
  static FILTER_DROPDOWN = "select[name*='filter' i]";
  static APPLY_FILTER_BUTTON = "//button[contains(text(), 'Apply')]";
  static CLEAR_FILTER_BUTTON = "//button[contains(text(), 'Clear')]";

  // SVG Elements
  static SVG_ELEMENT = "svg";

  // Slider Elements
  static SLIDER = "input[type='range']";

  // Tab Elements
  static TAB_BUTTON = "[role='tab']";
  static TAB_PANEL = "[role='tabpanel']";

  // Checkbox and Radio Elements
  static CHECKBOX = "input[type='checkbox']";
  static RADIO_BUTTON = "input[type='radio']";
  static LABEL = "label";

  /**
   * Get dynamic locator by replacing placeholder
   * @param {string} locator - Base locator with placeholder
   * @param {string} placeholder - Placeholder to replace
   * @param {string} value - Value to replace with
   */
  static getDynamicLocator(locator, placeholder, value) {
    return locator.replace(placeholder, value);
  }

  /**
   * Get XPath for text contains
   * @param {string} text - Text to search
   */
  static getXPathByText(text) {
    return `//*[contains(text(), '${text}')]`;
  }

  /**
   * Get XPath for tag and text contains
   * @param {string} tag - HTML tag name
   * @param {string} text - Text to search
   */
  static getXPathByTagAndText(tag, text) {
    return `//${tag}[contains(text(), '${text}')]`;
  }

  /**
   * Get XPath for partial attribute match
   * @param {string} attribute - Attribute name
   * @param {string} value - Attribute value to match
   */
  static getXPathByAttribute(attribute, value) {
    return `//*[@${attribute}='${value}']`;
  }

  /**
   * Get XPath for partial attribute match
   * @param {string} attribute - Attribute name
   * @param {string} value - Attribute value to match (partial)
   */
  static getXPathByPartialAttribute(attribute, value) {
    return `//*[contains(@${attribute}, '${value}')]`;
  }

  /**
   * Get CSS selector for attribute
   * @param {string} attribute - Attribute name
   * @param {string} value - Attribute value
   */
  static getCSSByAttribute(attribute, value) {
    return `[${attribute}='${value}']`;
  }

  /**
   * Get CSS selector for partial attribute match
   * @param {string} attribute - Attribute name
   * @param {string} value - Attribute value (partial)
   */
  static getCSSByPartialAttribute(attribute, value) {
    return `[${attribute}*='${value}']`;
  }

  /**
   * Get CSS selector for class
   * @param {string} className - Class name
   */
  static getCSSByClass(className) {
    return `.${className}`;
  }

  /**
   * Get CSS selector for id
   * @param {string} id - Element ID
   */
  static getCSSById(id) {
    return `#${id}`;
  }
}

export default Locators;
