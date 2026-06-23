class TestData {
  // User Data
  static VALID_USER = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "9876543210",
    address: "123 Main Street, New York, NY 10001",
    password: "Test@1234",
  };

  static INVALID_USER = {
    name: "",
    email: "invalid-email",
    phone: "123",
    address: "",
    password: "",
  };

  static ADMIN_USER = {
    name: "Admin User",
    email: "admin@example.com",
    phone: "1111111111",
    address: "Admin Address",
    password: "Admin@1234",
  };

  // Form Data
  static FORM_DATA = {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "5555555555",
    address: "456 Oak Avenue, Los Angeles, CA 90001",
    gender: "Female",
    country: "United States",
    color: "Blue",
  };

  // Dropdown Options
  static COUNTRIES = [
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "Germany",
    "France",
    "India",
    "China",
  ];

  static COLORS = ["Red", "Green", "Blue", "Yellow", "Black", "White"];

  static GENDERS = ["Male", "Female", "Other"];

  static DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  // Dates
  static VALID_DATE_1 = "12/25/2024";
  static VALID_DATE_2 = "01/15/2025";
  static DATE_RANGE_START = "01-01-2024";
  static DATE_RANGE_END = "31-12-2024";

  // Product Data
  static PRODUCTS = [
    { name: "Smartphone", price: "$10.99" },
    { name: "Laptop", price: "$19.99" },
    { name: "Tablet", price: "$5.99" },
    { name: "Smartwatch", price: "$7.99" },
    { name: "Wireless Earbuds", price: "$8.99" },
  ];

  // Book Data
  static BOOKS = [
    { name: "Learn Selenium", author: "Amit", subject: "Selenium", price: "300" },
    { name: "Learn Java", author: "Mukesh", subject: "Java", price: "500" },
    { name: "Learn JS", author: "Animesh", subject: "Javascript", price: "300" },
    { name: "Master In Selenium", author: "Mukesh", subject: "Selenium", price: "3000" },
    { name: "Master In Java", author: "Amod", subject: "JAVA", price: "2000" },
  ];

  // File Names
  static TEST_FILE_NAMES = ["sample.txt", "test_document.pdf", "data.xlsx"];
  static UNSUPPORTED_FILE = "unsupported.xyz";

  // Error Messages
  static ERROR_MESSAGES = {
    REQUIRED_FIELD: "This field is required",
    INVALID_EMAIL: "Please enter a valid email",
    INVALID_PHONE: "Please enter a valid phone number",
    PASSWORD_MISMATCH: "Passwords do not match",
    INVALID_FORMAT: "Invalid format",
    UNAUTHORIZED: "Unauthorized access",
    NOT_FOUND: "Page not found",
    SERVER_ERROR: "Server error",
  };

  // Success Messages
  static SUCCESS_MESSAGES = {
    FORM_SUBMITTED: "Form submitted successfully",
    FILE_UPLOADED: "File uploaded successfully",
    DATA_SAVED: "Data saved successfully",
    OPERATION_COMPLETE: "Operation completed successfully",
    LOGIN_SUCCESS: "Logged in successfully",
  };

  // URLs
  static URLS = {
    BASE_URL: "https://testautomationpractice.blogspot.com/",
    FORM_URL: "https://testautomationpractice.blogspot.com/2018/09/automation-form.html",
    TABLE_URL: "https://testautomationpractice.blogspot.com/",
    LOGIN_URL: "https://testautomationpractice.blogspot.com/login",
  };

  // Page Titles
  static PAGE_TITLES = {
    HOME: "Automation Testing Practice",
    FORM: "Data Entry Form",
    TABLE: "Web Table",
    LOGIN: "Login Page",
  };

  // Test Constants
  static TIMEOUT = 5000;
  static IMPLICIT_WAIT = 10000;
  static EXPLICIT_WAIT = 15000;

  static SHORT_WAIT = 2000;
  static MEDIUM_WAIT = 5000;
  static LONG_WAIT = 10000;

  // API Response Data
  static API_RESPONSE = {
    success: true,
    status: 200,
    message: "Operation successful",
    data: {
      id: 1,
      name: "Test Data",
      email: "test@example.com",
    },
  };

  static API_ERROR_RESPONSE = {
    success: false,
    status: 400,
    message: "Bad request",
    error: "Invalid input",
  };

  // Credentials (Note: Use with caution and never hardcode sensitive data in production)
  static TEST_CREDENTIALS = {
    username: "testuser",
    password: "TestPassword@123",
  };

  // Common test data
  static TEST_EMAIL = "test@example.com";
  static TEST_PHONE = "1234567890";
  static TEST_NAME = "Test User";
  static TEST_ADDRESS = "123 Test Street";

  /**
   * Get random data from array
   * @param {array} array - Array to select from
   */
  static getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  /**
   * Get random product
   */
  static getRandomProduct() {
    return this.getRandomItem(this.PRODUCTS);
  }

  /**
   * Get random book
   */
  static getRandomBook() {
    return this.getRandomItem(this.BOOKS);
  }

  /**
   * Get random country
   */
  static getRandomCountry() {
    return this.getRandomItem(this.COUNTRIES);
  }

  /**
   * Get random color
   */
  static getRandomColor() {
    return this.getRandomItem(this.COLORS);
  }

  /**
   * Get random gender
   */
  static getRandomGender() {
    return this.getRandomItem(this.GENDERS);
  }

  /**
   * Get random day
   */
  static getRandomDay() {
    return this.getRandomItem(this.DAYS);
  }

  /**
   * Generate unique email
   */
  static generateUniqueEmail() {
    const timestamp = new Date().getTime();
    return `test_${timestamp}@example.com`;
  }

  /**
   * Generate unique username
   */
  static generateUniqueUsername() {
    const timestamp = new Date().getTime();
    return `user_${timestamp}`;
  }
}

export default TestData;
