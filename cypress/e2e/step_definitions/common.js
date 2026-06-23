import { Given } from "@badeball/cypress-cucumber-preprocessor";

const baseUrl = "https://testautomationpractice.blogspot.com/";

Given("User navigates to the automation practice website", () => {
  cy.visit(baseUrl);
  cy.get("body").should("be.visible");
});
