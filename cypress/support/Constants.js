class Constants {
  // Environment
  static ENVIRONMENT = process.env.ENV || "test";
  static BASE_URL = process.env.BASE_URL || "https://testautomationpractice.blogspot.com/";
  static API_BASE_URL = process.env.API_BASE_URL || "https://api.example.com";

  // Browser Configuration
  static BROWSER = process.env.BROWSER || "chrome";
  static HEADLESS_MODE = process.env.HEADLESS !== "false";
  static VIEWPORT_WIDTH = 1280;
  static VIEWPORT_HEIGHT = 720;

  // Timeouts (in milliseconds)
  static DEFAULT_TIMEOUT = 5000;
  static SHORT_TIMEOUT = 2000;
  static MEDIUM_TIMEOUT = 5000;
  static LONG_TIMEOUT = 10000;
  static EXTRA_LONG_TIMEOUT = 30000;

  // Wait Times
  static IMPLICIT_WAIT = 10000;
  static EXPLICIT_WAIT = 15000;
  static PAGE_LOAD_TIMEOUT = 60000;

  // Retry Configuration
  static MAX_RETRIES = 3;
  static RETRY_INTERVAL = 1000;

  // API Configuration
  static API_TIMEOUT = 30000;
  static API_RETRY_ATTEMPTS = 3;

  // Test Data Configuration
  static RANDOM_SEED = process.env.RANDOM_SEED || 12345;
  static TEST_DATA_DIR = "cypress/fixtures/test-data";
  static DOWNLOADS_DIR = "cypress/downloads";
  static UPLOADS_DIR = "cypress/uploads";

  // Logging Configuration
  static LOG_LEVEL = process.env.LOG_LEVEL || "debug";
  static ENABLE_SCREENSHOTS = true;
  static SCREENSHOTS_DIR = "cypress/screenshots";
  static ENABLE_VIDEOS = true;
  static VIDEOS_DIR = "cypress/videos";

  // Test Execution
  static TEST_RETRY_COUNT = parseInt(process.env.TEST_RETRY_COUNT, 10) || 0;
  static PARALLEL_EXECUTION = process.env.PARALLEL || false;
  static NUMBER_OF_WORKERS = parseInt(process.env.WORKERS, 10) || 1;

  // Reporting
  static REPORT_DIR = "cypress/reports";
  static REPORT_FORMAT = "html"; // html, json, mochawesome
  static GENERATE_REPORT = true;

  // Email Configuration
  static SMTP_SERVER = process.env.SMTP_SERVER || "smtp.gmail.com";
  static SMTP_PORT = parseInt(process.env.SMTP_PORT, 10) || 587;
  static EMAIL_FROM = process.env.EMAIL_FROM || "test@example.com";
  static EMAIL_TO = process.env.EMAIL_TO || "recipient@example.com";

  // Database Configuration
  static DB_HOST = process.env.DB_HOST || "localhost";
  static DB_PORT = parseInt(process.env.DB_PORT, 10) || 5432;
  static DB_NAME = process.env.DB_NAME || "test_db";
  static DB_USER = process.env.DB_USER || "test_user";
  static DB_PASSWORD = process.env.DB_PASSWORD || "";

  // Authentication
  static AUTH_TOKEN = process.env.AUTH_TOKEN || "";
  static API_KEY = process.env.API_KEY || "";
  static SECRET_KEY = process.env.SECRET_KEY || "";

  // Feature Flags
  static ENABLE_ANALYTICS = true;
  static ENABLE_NOTIFICATIONS = true;
  static ENABLE_DARK_MODE = false;
  static ENABLE_DEBUG_MODE = process.env.DEBUG === "true";

  // HTTP Status Codes
  static HTTP_STATUS = {
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
    INTERNAL_SERVER_ERROR: 500,
    SERVICE_UNAVAILABLE: 503,
  };

  // HTTP Methods
  static HTTP_METHODS = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    PATCH: "PATCH",
    DELETE: "DELETE",
    HEAD: "HEAD",
    OPTIONS: "OPTIONS",
  };

  // Content Types
  static CONTENT_TYPES = {
    JSON: "application/json",
    FORM_DATA: "application/x-www-form-urlencoded",
    XML: "application/xml",
    TEXT: "text/plain",
    HTML: "text/html",
    MULTIPART: "multipart/form-data",
  };

  // Date Formats
  static DATE_FORMATS = {
    ISO: "YYYY-MM-DD",
    US: "MM/DD/YYYY",
    EU: "DD/MM/YYYY",
    ISO_TIME: "YYYY-MM-DD HH:mm:ss",
    TIMESTAMP: "YYYY-MM-DD HH:mm:ss.SSS",
  };

  // Keyboard Keys
  static KEYS = {
    ENTER: "Enter",
    TAB: "Tab",
    ESCAPE: "Escape",
    SPACE: " ",
    BACKSPACE: "Backspace",
    DELETE: "Delete",
    ARROW_UP: "ArrowUp",
    ARROW_DOWN: "ArrowDown",
    ARROW_LEFT: "ArrowLeft",
    ARROW_RIGHT: "ArrowRight",
    HOME: "Home",
    END: "End",
    PAGE_UP: "PageUp",
    PAGE_DOWN: "PageDown",
  };

  // Mouse Buttons
  static MOUSE_BUTTONS = {
    LEFT: 0,
    MIDDLE: 1,
    RIGHT: 2,
  };

  // Regular Expressions
  static REGEX = {
    EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    PHONE: /^\d{10}$/,
    URL: /^(https?|ftp):\/\/.+/,
    ALPHANUMERIC: /^[a-zA-Z0-9]+$/,
    PASSWORD_STRONG: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    NUMERIC: /^\d+$/,
    SPECIAL_CHARS: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
  };

  // Common Selectors
  static SELECTORS = {
    BUTTON: "button",
    INPUT: "input",
    SELECT: "select",
    TEXTAREA: "textarea",
    CHECKBOX: "input[type='checkbox']",
    RADIO: "input[type='radio']",
    LINK: "a",
    TABLE: "table",
    MODAL: "[role='dialog']",
    ALERT: "[role='alert']",
    LOADING: "[role='progressbar'], .loading",
  };

  // Colors
  static COLORS = {
    RED: "#FF0000",
    GREEN: "#00FF00",
    BLUE: "#0000FF",
    WHITE: "#FFFFFF",
    BLACK: "#000000",
    GRAY: "#808080",
  };

  // Languages
  static LANGUAGES = {
    ENGLISH: "en",
    SPANISH: "es",
    FRENCH: "fr",
    GERMAN: "de",
    CHINESE: "zh",
    JAPANESE: "ja",
  };

  // Pagination
  static PAGINATION = {
    DEFAULT_PAGE_SIZE: 10,
    DEFAULT_PAGE_NUMBER: 1,
    MAX_PAGE_SIZE: 100,
  };

  // Sorting
  static SORT_ORDER = {
    ASCENDING: "asc",
    DESCENDING: "desc",
  };

  /**
   * Get environment variable
   * @param {string} key - Variable key
   * @param {string} defaultValue - Default value if not set
   */
  static getEnvVar(key, defaultValue = "") {
    return process.env[key] || defaultValue;
  }

  /**
   * Check if running in specific environment
   * @param {string} env - Environment name
   */
  static isEnvironment(env) {
    return this.ENVIRONMENT === env;
  }

  /**
   * Check if debug mode is enabled
   */
  static isDebugMode() {
    return this.ENABLE_DEBUG_MODE;
  }

  /**
   * Check if running in headless mode
   */
  static isHeadlessMode() {
    return this.HEADLESS_MODE;
  }
}

export default Constants;
