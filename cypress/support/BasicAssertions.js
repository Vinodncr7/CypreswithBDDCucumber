class BasicAssertions {


	assertResponseCode(response, expectedStatus) {
		expect(response.status).to.equal(expectedStatus, `expecting ${expectedStatus} and recieved ${response.status}`);
	}

	assertResponseStatusCode(response, expectedStatusCode) {
		expect(response.statusCode).to.equal(expectedStatusCode, `expecting ${expectedStatusCode} and recieved ${response.statusCode}`);
	}

	assertResponseMessage(response, expected_message) {
		expect(response.body.message).to.equal(expected_message, `expecting ${expected_message} and recieved ${response.body.message}`);
	}

	assertResponseErrorCode(response, expected_errorcode) {
		expect(response.body.errorCode).to.equal(expected_errorcode, `expecting ${expected_errorcode} and recieved ${response.body.errorCode}`);
	}

	assertResponseError(response, expected_error) {
		expect(response.body.error).to.equal(expected_error, `expecting ${expected_error} and recieved ${response.body.error}`);
	}

	assertArrayEqArray(actualArray, expectedArray){
		//If order does not matter
		expect(actualArray).to.have.members(expectedArray);
	}

	// assertResponseMessageDetails(response, expected_message){
	// 	expect(response.body.details[0]).to.equal(expected_message, `expecting ${expected_message} and recieved ${response.body.details[0]}`);
	// }

	assertValueExistInArray(array, value) {
		expect(array).to.include(value, `$expecting ${value} in array ${array}`);
	}

	assertValueNotExistInArray(array, value) {
		expect(array).to.not.include(value, `$not expecting ${value} in array ${array}`);
	}

	assertFieldValueInResponse(fieldName, expectedValue, response) {
		expect(response.body[fieldName]).to.equal(expectedValue, `expecting ${expectedValue} and recieved ${response.body[fieldName]}`);
	}
	assertFieldValueInResponse(fieldName, expectedValue, response) {
		expect(response.body[fieldName]).to.equal(expectedValue, `expecting ${expectedValue} and recieved ${response.body[fieldName]}`);
	}

	assertFieldValueInResponseNotEqual(fieldName, expectedValue, response) {
		expect(response.body[fieldName]).to.not.equal(expectedValue, `expecting ${expectedValue} and recieved ${response.body[fieldName]}`);
	}

	assertFieldValueInResponseNotEqual(fieldName, expectedValue, response) {
		expect(response.body[fieldName]).to.not.equal(expectedValue, `expecting ${expectedValue} and recieved ${response.body[fieldName]}`);
	}

	assertValidateDataisEqual(actualValue, expectedValue){
		expect(actualValue).to.equal(expectedValue)
	}

	// Regular expression to check if string is a valid UUID
	assertIfValidUUID(str) {
		const regexExp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
		expect(regexExp.test(str)).to.be.true;
	}


	// UI Assertions 

	assertcurrentURL(str) {
		cy.url().should('include', str)
	}

	assertPageTitle(str) {
		cy.title().should('eq', str)
	}

	assertElementEnabled(locator) {
		if (locator.startsWith("//")) {
			cy.xpath(locator).should('be.enabled')
		} else {
			cy.get(locator).should('be.enabled')
		}
	}

	assertElementDisabled(locator) {
		if (locator.startsWith("//")) {
			cy.xpath(locator).should('not.be.enabled')
		} else {
			cy.get(locator).should('not.be.enabled')
		}
	}

	assertElementVisible(locator) {
		if (locator.startsWith("//")) {
			cy.xpath(locator).should('be.visible')
		} else {
			cy.get(locator).should('be.visible')
		}
	}

	assertElementVisibleWithIndex(locator,no) {
		if (locator.startsWith("//")) {
			cy.xpath(locator).eq(no).should('be.visible')
		} else {
			cy.get(locator).eq(no).should('be.visible')
		}
	}
	
	
	assertElementInvisible(locator) {
		if (locator.startsWith("//")) {
			cy.xpath(locator).should('not.be.visible')
		} else {
			cy.get(locator).should('not.be.visible')
		}
	}

	assertElementIsEmpty(locator) {
		if (locator.startsWith("//")) {
			cy.xpath(locator).should('be.empty')
		} else {
			cy.get(locator).should('be.empty')
		}
	}

	assertElementIsNotEmpty(locator) {
		if (locator.startsWith("//")) {
			cy.xpath(locator).should('not.be.empty')
		} else {
			cy.get(locator).should('not.be.empty')
		}
	}

	assertIframeElementIsChecked(locator) {
	//	cy.iframe().should('exist')
		if (locator.startsWith("//")) {
			cy.iframe().xpath(locator).should('be.checked')
		} else {
			cy.iframe().get(locator).should('be.checked')
		}
	}

	assertElementIsSelected(locator) {
		if (locator.startsWith("//")) {
			cy.xpath(locator).should('not.be.selected')
		} else {
			cy.get(locator).should('not.be.selected')
		}
	}

	assertbackgroundcolor(locator, colorcode) {
		cy.get(locator).should('have.css', 'background-color', colorcode)
	}

	assertTextcolor(locator, colorcode) {
		cy.get(locator).should('have.css', 'text-color', colorcode)
	}

	assertPlaceholderInTextField(locator, str) {
		cy.get(locator).should('have.attr', 'placeholder', str)
	}

	assertEnteredTextValidating(locator, text) {
		if (locator.startsWith("//")) {
			cy.xpath(locator).invoke('val').should('eq', text)
		} else {
			cy.get(locator).invoke('val').should('eq', text)
		}
	}

	assertElementVisibleAndEnabled(locator) {
		if (locator.startsWith("//")) {
			cy.xpath(locator).should('be.visible').should('be.enabled')
		} else {
			cy.get(locator).should('be.visible').should('be.enabled')
		}
	}

	assertElementVisibleAndDisabled(locator) {
		if (locator.startsWith("//")) {
			cy.xpath(locator).should('be.visible').should('not.be.enabled')
		} else {
			cy.get(locator).should('be.visible').should('not.be.enabled')
		}
	}

	assertIframeElementVisibleAndEnabled(locator){
		if (locator.startsWith("//")) {
			cy.iframe().xpath(locator).should('be.visible').should('be.enabled')
		} else {
			cy.iframe().find(locator).should('be.visible').should('be.enabled')
		}
	}

	assertIframeElementVisibleAndDisabled(locator){
		if (locator.startsWith("//")) {
			cy.iframe().xpath(locator).should('be.visible').should('not.be.enabled')
		} else {
			cy.iframe().find(locator).should('be.visible').should('not.be.enabled')
		}
	}

	assertIframeElementNotVisible(locator) {
		if (locator.startsWith("//")) {
			cy.iframe().xpath(locator).should('not.be.visible')
		} else {
			cy.iframe().find(locator).should('not.be.visible')
		}
	}
	assertIframeElementHaveText(locator, text) {
		if (locator.startsWith("//")) {
			cy.iframe().xpath(locator).should('have.text', text)
		} else {
			cy.iframe().find(locator).should('have.text', text)
		}
	}

	assertIframeElementVisible(locator) {
		if (locator.startsWith("//")) {
			cy.iframe().xpath(locator).should('be.visible')
		} else {
			cy.iframe().find(locator).should('be.visible')
		}
	}

	assertIframeElementEnabled(locator) {
		if (locator.startsWith("//")) {
			cy.iframe().xpath(locator).should('be.enabled')
		} else {
			cy.iframe().find(locator).should('be.enabled')
		}
	}

	assertIframeElementDisabled(locator) {
		if (locator.startsWith("//")) {
			cy.iframe().xpath(locator).should('be.not.enabled')
		} else {
			cy.iframe().find(locator).should('be.not.enabled')
		}
	}

	assertIframeElementLength(locator, ex_length) {
		cy.iframe().find(locator).should('have.length', ex_length)
	}

	assertIframeDoubleFindElementLength(locator1, locator2, ex_length) {
		cy.iframe().find(locator1).find(locator2).should('have.length', ex_length)
	}
	assertIframeElementContainText(locator, text) {
		if (locator.startsWith("//")) {
			cy.iframe().xpath(locator).contains(text)
		} else {
			cy.iframe().find(locator).contains(text)
		}
	}
  assertTagAttribute(locator, tag, attribute, value) {
    if (locator.startsWith("//")) {
      cy.xpath(locator).find(tag).should("have.attr", attribute, value);
    } else {
      cy.get(locator).find(tag).should("have.attr", attribute, value);
    }
  }

  assertIframeElementAttribute(locator, attribute, value) {
    if (locator.startsWith("//")) {
      cy.iframe().xpath(locator).should("have.attr", attribute, value);
    } else {
      cy.iframe().find(locator).should("have.attr", attribute, value);
    }
  }
  assertIframeElementIsChecked(locator, text) {
	if (locator.startsWith("//")) {
		cy.iframe().xpath(locator).should('be.checked')
	} else {
		cy.iframe().find(locator).should('be.checked')
	}
}
  assertIframeElementHaveValue(locator, text) {
	if (locator.startsWith("//")) {
		cy.iframe().xpath(locator).should('have.value',text)
	} else {
		cy.iframe().find(locator).should('have.value',text)
	}
  }
  
  assertIframeNotExist(locator) {
	if (locator.startsWith("//")) {
		cy.iframe().xpath(locator).should('not.exist')
	} else {
		cy.iframe().find(locator).should('not.exist')
	}
  }

  assertElementText(locator, expectedText) {
	if (locator.startsWith("//")) {
		cy.xpath(locator).should("have.text", expectedText);
	} else {
		cy.get(locator).should("have.text", expectedText);
	}
  }

  assertElementContainsText(locator, expectedText) {
	if (locator.startsWith("//")) {
		cy.xpath(locator).should("contain.text", expectedText);
	} else {
		cy.get(locator).should("contain.text", expectedText);
	}
  }

  assertElementAttribute(locator, attribute, expectedValue) {
	if (locator.startsWith("//")) {
		cy.xpath(locator).should("have.attr", attribute, expectedValue);
	} else {
		cy.get(locator).should("have.attr", attribute, expectedValue);
	}
  }

  assertElementCount(locator, expectedCount) {
	if (locator.startsWith("//")) {
		cy.xpath(locator).should("have.length", expectedCount);
	} else {
		cy.get(locator).should("have.length", expectedCount);
	}
  }

  assertURLIncludes(expectedURL) {
	cy.url().should("include", expectedURL);
  }

  assertURLEquals(expectedURL) {
	cy.url().should("equal", expectedURL);
  }

  assertCurrentPageTitle(expectedTitle) {
	cy.title().should("equal", expectedTitle);
  }

  assertCurrentPageTitleIncludes(expectedTitle) {
	cy.title().should("include", expectedTitle);
  }

  assertElementHasClass(locator, className) {
	if (locator.startsWith("//")) {
		cy.xpath(locator).should("have.class", className);
	} else {
		cy.get(locator).should("have.class", className);
	}
  }

  assertElementDoesNotHaveClass(locator, className) {
	if (locator.startsWith("//")) {
		cy.xpath(locator).should("not.have.class", className);
	} else {
		cy.get(locator).should("not.have.class", className);
	}
  }

  assertElementIsChecked(locator) {
	if (locator.startsWith("//")) {
		cy.xpath(locator).should("be.checked");
	} else {
		cy.get(locator).should("be.checked");
	}
  }

  assertElementIsNotChecked(locator) {
	if (locator.startsWith("//")) {
		cy.xpath(locator).should("not.be.checked");
	} else {
		cy.get(locator).should("not.be.checked");
	}
  }

  assertElementHasValue(locator, expectedValue) {
	if (locator.startsWith("//")) {
		cy.xpath(locator).should("have.value", expectedValue);
	} else {
		cy.get(locator).should("have.value", expectedValue);
	}
  }

  assertElementIsRequired(locator) {
	if (locator.startsWith("//")) {
		cy.xpath(locator).should("have.attr", "required");
	} else {
		cy.get(locator).should("have.attr", "required");
	}
  }

  assertElementIsNotRequired(locator) {
	if (locator.startsWith("//")) {
		cy.xpath(locator).should("not.have.attr", "required");
	} else {
		cy.get(locator).should("not.have.attr", "required");
	}
  }

  assertTableRowCount(tableLocator, expectedCount) {
	if (tableLocator.startsWith("//")) {
		cy.xpath(tableLocator).find("tbody tr").should("have.length", expectedCount);
	} else {
		cy.get(tableLocator).find("tbody tr").should("have.length", expectedCount);
	}
  }

  assertTableCellValue(tableLocator, row, column, expectedValue) {
	cy.get(tableLocator).find("tbody tr").eq(row).find("td").eq(column).should("contain.text", expectedValue);
  }

  assertValueInList(listLocator, expectedValue) {
	cy.get(listLocator).should(($list) => {
		const found = Array.from($list).some((item) => item.textContent.includes(expectedValue));
		expect(found).to.be.true;
	});
  }

  assertValueNotInList(listLocator, expectedValue) {
	cy.get(listLocator).should(($list) => {
		const found = Array.from($list).some((item) => item.textContent.includes(expectedValue));
		expect(found).to.be.false;
	});
  }

  assertElementLength(locator, expectedLength) {
	if (locator.startsWith("//")) {
		cy.xpath(locator).should("have.length", expectedLength);
	} else {
		cy.get(locator).should("have.length", expectedLength);
	}
  }

  assertElementExist(locator) {
	if (locator.startsWith("//")) {
		cy.xpath(locator).should("exist");
	} else {
		cy.get(locator).should("exist");
	}
  }

  assertElementDoesNotExist(locator) {
	if (locator.startsWith("//")) {
		cy.xpath(locator).should("not.exist");
	} else {
		cy.get(locator).should("not.exist");
	}
  }

  assertArrayContains(array, value) {
	expect(array).to.include(value);
  }

  assertArrayDoesNotContain(array, value) {
	expect(array).to.not.include(value);
  }

  assertArrayLength(array, expectedLength) {
	expect(array).to.have.length(expectedLength);
  }

  assertObjectHasProperty(object, propertyName) {
	expect(object).to.have.property(propertyName);
  }

  assertObjectPropertyValue(object, propertyName, expectedValue) {
	expect(object[propertyName]).to.equal(expectedValue);
  }

  assertNumberGreaterThan(number, threshold) {
	expect(number).to.be.greaterThan(threshold);
  }

  assertNumberLessThan(number, threshold) {
	expect(number).to.be.lessThan(threshold);
  }

  assertNumberGreaterThanOrEqual(number, threshold) {
	expect(number).to.be.greaterThanOrEqual(threshold);
  }

  assertNumberLessThanOrEqual(number, threshold) {
	expect(number).to.be.lessThanOrEqual(threshold);
  }

  assertStringIncludes(string, substring) {
	expect(string).to.include(substring);
  }

  assertStringDoesNotInclude(string, substring) {
	expect(string).to.not.include(substring);
  }

  assertStringStartsWith(string, prefix) {
	expect(string).to.startWith(prefix);
  }

  assertStringEndsWith(string, suffix) {
	expect(string).to.endWith(suffix);
  }

  assertStringMatches(string, regex) {
	expect(string).to.match(regex);
  }

  assertStringDoesNotMatch(string, regex) {
	expect(string).to.not.match(regex);
  }

  assertBoolean(value, expectedValue) {
	expect(value).to.equal(expectedValue);
  }

  assertIsNull(value) {
	expect(value).to.be.null;
  }

  assertIsNotNull(value) {
	expect(value).to.not.be.null;
  }

  assertIsUndefined(value) {
	expect(value).to.be.undefined;
  }

  assertIsNotUndefined(value) {
	expect(value).to.not.be.undefined;
  }

  assertIsTruthy(value) {
	expect(value).to.be.ok;
  }

  assertIsFalsy(value) {
	expect(value).to.not.be.ok;
  }

  assertElementIsVisible(locator) {
	this.assertElementVisible(locator);
  }

  assertElementNotVisible(locator) {
	this.assertElementInvisible(locator);
  }

  assertElementExists(locator) {
	this.assertElementExist(locator);
  }

  assertElementNotExists(locator) {
	this.assertElementDoesNotExist(locator);
  }

  assertResponseContainsKey(response, key) {
	expect(response).to.have.property(key);
  }

  assertResponseDoesNotContainKey(response, key) {
	expect(response).to.not.have.property(key);
  }

  assertResponseKeyValue(response, key, expectedValue) {
	expect(response[key]).to.equal(expectedValue);
  }

  assertResponseKeyValueType(response, key, expectedType) {
	expect(typeof response[key]).to.equal(expectedType);
  }

  assertArrayContainsObject(array, propertyName, propertyValue) {
	const found = array.some((item) => item[propertyName] === propertyValue);
	expect(found).to.be.true;
  }

  assertDateBefore(date1, date2) {
	expect(new Date(date1).getTime()).to.be.lessThan(new Date(date2).getTime());
  }

  assertDateAfter(date1, date2) {
	expect(new Date(date1).getTime()).to.be.greaterThan(new Date(date2).getTime());
  }

  assertDateEqual(date1, date2) {
	expect(new Date(date1).getTime()).to.equal(new Date(date2).getTime());
  }

  assertElementStyle(locator, cssProperty, expectedValue) {
	if (locator.startsWith("//")) {
		cy.xpath(locator).should("have.css", cssProperty, expectedValue);
	} else {
		cy.get(locator).should("have.css", cssProperty, expectedValue);
	}
  }

  assertDropdownSelectedValue(locator, expectedValue) {
	if (locator.startsWith("//")) {
		cy.xpath(locator).should("have.value", expectedValue);
	} else {
		cy.get(locator).should("have.value", expectedValue);
	}
  }

  assertDropdownSelectedText(locator, expectedText) {
	if (locator.startsWith("//")) {
		cy.xpath(locator).find("option:selected").should("have.text", expectedText);
	} else {
		cy.get(locator).find("option:selected").should("have.text", expectedText);
	}
  }

}
export default BasicAssertions;
