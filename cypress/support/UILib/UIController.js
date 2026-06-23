class UIController {
	constructor() {
		if (this.constructor === UIController) {
			throw "You Can Not Create Object Of PageBase, Please Extend !";
		}
	}

	enterURL(str) {
		cy.visit(str)
	}
	// enterText(locator, text) {
	// 	try {
	// 		cy.get(locator).type(text)
	// 	} catch (err) {
	// 		throw "Unable To Get Element";
	// 	}
	// }
	//Below method is to be for entring Text with locator
	enterText(locator, text) {
		if (locator.startsWith("//")) {
			cy.xpath(locator).clear().type(text);
		} else {
			cy.get(locator).clear().type(text);
		}
	}

	clickElement(locator) {
		if (locator.startsWith("//")) {
			cy.xpath(locator).click({ force: true })
		} else {
			cy.get(locator).click({ force: true });
		}
	}

	forceClickElement(locator) {
		try {
			cy.forceClick(locator);
		} catch (err) {
			err.message;
		}
	}

	enterTextINDropDown(locator, text) {
		try {
			cy.get(locator).type(text);
		} catch (err) {
			throw "Unable To Get Element";
		}
	}
	mouseHover(locator) {
		if (locator.startsWith("//")) {
			cy.xpath(locator).first().trigger("mouseover");
		} else {
			cy.get(locator).first().trigger("mouseover");
		}
	}

	getCustomLocator(locator, placeholder, customText) {
		try {
			const customstr = locator;
			customstr.replace(placeholder, customText);
			return customstr;
		} catch (err) {
			err.message;
		}
	}

	captureScreenshotByElement(locator) {
		cy.get(locator).screenshot();
	}

	clickElementUsingText(locator) {
		cy.contains(locator).click();
	}

	selectValueFromDropdown(locator, value1, value2) {
		if (value2) {
			cy.get(locator).select(value1).contains(value2)
		}
		else {
			cy.get(locator).select(value1)
		}
	}
	wait(time) {
		cy.wait(time)
	}

	//this method is use for load iframe data for locate iframe
	iframeLoad(locator) {
		cy.frameLoaded(locator)
	}

	iframeClickElement(locator) {
		if (locator.startsWith("//")) {
			cy.iframe().xpath(locator).first().click()
		} else {
			cy.iframe().find(locator).first().click()
		}
	}

	iframeMouseHover(locator) {
		if (locator.startsWith("//")) {
			cy.iframe().xpath(locator).first().trigger("mouseover");
		} else {
			cy.iframe().find(locator).first().trigger("mouseover");
		}
	}

	iframeClickElementwithForce(locator) {
		if (locator.startsWith("//")) {
			cy.iframe().xpath(locator).click({ force: true })
		} else {
			cy.iframe().find(locator).click({ force: true })
		}
	}

	iframeEnterText(locator, text) {
		if (locator.startsWith("//")) {
			cy.iframe().xpath(locator).type(text)
		} else {
			cy.iframe().find(locator).type(text)
		}
	}

	iframeEnterTextFirst(locator, text) {
		if (locator.startsWith("//")) {
			cy.iframe().xpath(locator).first().type(text)
		} else {
			cy.iframe().find(locator).first().type(text)
		}
	}

	iframeClearText(locator) {
		if (locator.startsWith("//")) {
			cy.iframe().xpath(locator).clear()
		} else {
			cy.iframe().find(locator).clear()
		}
	}

	iframeEnterTextByForce(locator, text) {
		if (locator.startsWith("//")) {
			cy.iframe().xpath(locator).type(text,{ force: true })
		} else {
			cy.iframe().find(locator).type(text,{ force: true })
		}
	}
	
	iframeClearText(locator, text) {
		if (locator.startsWith("//")) {
			cy.iframe().xpath(locator).clear()
		} else {
			cy.iframe().find(locator).clear()
		}
	}

	iframeDoubleClickElement(locator){
		if (locator.startsWith("//")) {
			cy.iframe().xpath(locator).dblclick()
		} else {
			cy.iframe().find(locator).dblclick()
		}
	}

	iframeAttachFile(locator,fileName,encodingType){
		if (locator.startsWith("//")) {
			cy.iframe().xpath(locator).attachFile({
				filePath: fileName,
				encoding: encodingType,   //text or binary
			});
		} else {
			cy.iframe().find(locator).attachFile({
				filePath: fileName,
				encoding: encodingType,
			});
		}
	}

	iframeExists(locator){
		if (locator.startsWith("//")) {
			cy.iframe().xpath(locator).should('exist');
		} else {
			cy.iframe().find(locator).should('exist');
		}
	}

	iframeRadioButtonCheckElement(locator){
		if (locator.startsWith("//")) {
			cy.iframe().xpath(locator).check({force:true})
		} else {
			cy.iframe().find(locator).check({force:true})
		}
	}

	doubleClickElement(locator) {
		if (locator.startsWith("//")) {
			cy.xpath(locator).dblclick();
		} else {
			cy.get(locator).dblclick();
		}
	}

	rightClickElement(locator) {
		if (locator.startsWith("//")) {
			cy.xpath(locator).rightclick();
		} else {
			cy.get(locator).rightclick();
		}
	}

	selectFile(locator, filePath, force = true) {
		if (locator.startsWith("//")) {
			cy.xpath(locator).selectFile(filePath, { force });
		} else {
			cy.get(locator).selectFile(filePath, { force });
		}
	}

	getElementText(locator) {
		if (locator.startsWith("//")) {
			return cy.xpath(locator).invoke("text");
		} else {
			return cy.get(locator).invoke("text");
		}
	}

	scrollToElement(locator) {
		if (locator.startsWith("//")) {
			cy.xpath(locator).scrollIntoView();
		} else {
			cy.get(locator).scrollIntoView();
		}
	}

	waitForElement(locator, timeout = 5000) {
		if (locator.startsWith("//")) {
			cy.xpath(locator, { timeout }).should("exist");
		} else {
			cy.get(locator, { timeout }).should("exist");
		}
	}

	captureScreenshot(filename) {
		cy.screenshot(filename);
	}

	handleAlert(action = "accept") {
		if (action === "accept") {
			cy.on("window:alert", () => true);
		} else if (action === "dismiss") {
			cy.on("window:alert", () => false);
		}
	}

	handleConfirmation(action = "accept") {
		if (action === "accept") {
			cy.on("window:confirm", () => true);
		} else if (action === "dismiss") {
			cy.on("window:confirm", () => false);
		}
	}

	handlePrompt(text) {
		cy.on("window:prompt", () => text);
	}

	getWindowHandle() {
		return cy.window();
	}

	switchToNewTab() {
		cy.window().then((win) => {
			cy.stub(win, "open").callThrough();
		});
	}

	dragAndDrop(sourceLocator, targetLocator) {
		if (sourceLocator.startsWith("//")) {
			cy.xpath(sourceLocator).trigger("mousedown", { button: 0 });
		} else {
			cy.get(sourceLocator).trigger("mousedown", { button: 0 });
		}

		if (targetLocator.startsWith("//")) {
			cy.xpath(targetLocator).trigger("dragover").trigger("drop");
		} else {
			cy.get(targetLocator).trigger("dragover").trigger("drop");
		}

		if (sourceLocator.startsWith("//")) {
			cy.xpath(sourceLocator).trigger("mouseup", { force: true });
		} else {
			cy.get(sourceLocator).trigger("mouseup", { force: true });
		}
	}

	getInputValue(locator) {
		if (locator.startsWith("//")) {
			return cy.xpath(locator).invoke("val");
		} else {
			return cy.get(locator).invoke("val");
		}
	}

	clearInputField(locator) {
		if (locator.startsWith("//")) {
			cy.xpath(locator).clear();
		} else {
			cy.get(locator).clear();
		}
	}

	selectCheckbox(locator) {
		if (locator.startsWith("//")) {
			cy.xpath(locator).check();
		} else {
			cy.get(locator).check();
		}
	}

	unselectCheckbox(locator) {
		if (locator.startsWith("//")) {
			cy.xpath(locator).uncheck();
		} else {
			cy.get(locator).uncheck();
		}
	}

	selectRadioButton(locator) {
		if (locator.startsWith("//")) {
			cy.xpath(locator).check({ force: true });
		} else {
			cy.get(locator).check({ force: true });
		}
	}

	getAllElements(locator) {
		if (locator.startsWith("//")) {
			return cy.xpath(locator);
		} else {
			return cy.get(locator);
		}
	}

	getElementByIndex(locator, index) {
		if (locator.startsWith("//")) {
			return cy.xpath(locator).eq(index);
		} else {
			return cy.get(locator).eq(index);
		}
	}

	selectValueFromList(locator, value) {
		if (locator.startsWith("//")) {
			cy.xpath(locator).contains(value).click();
		} else {
			cy.get(locator).contains(value).click();
		}
	}

	hoverAndClick(hoverLocator, clickLocator) {
		if (hoverLocator.startsWith("//")) {
			cy.xpath(hoverLocator).trigger("mouseover");
		} else {
			cy.get(hoverLocator).trigger("mouseover");
		}

		cy.wait(500);

		if (clickLocator.startsWith("//")) {
			cy.xpath(clickLocator).click();
		} else {
			cy.get(clickLocator).click();
		}
	}

	selectMultipleOptions(selectLocator, options) {
		options.forEach((option) => {
			if (selectLocator.startsWith("//")) {
				cy.xpath(selectLocator).select(option);
			} else {
				cy.get(selectLocator).select(option);
			}
		});
	}

	typeWithDelay(locator, text, delay = 100) {
		if (locator.startsWith("//")) {
			cy.xpath(locator).type(text, { delay });
		} else {
			cy.get(locator).type(text, { delay });
		}
	}

	getAttributeValue(locator, attribute) {
		if (locator.startsWith("//")) {
			return cy.xpath(locator).invoke("attr", attribute);
		} else {
			return cy.get(locator).invoke("attr", attribute);
		}
	}

	getComputedCSSValue(locator, cssProperty) {
		if (locator.startsWith("//")) {
			return cy.xpath(locator).invoke("css", cssProperty);
		} else {
			return cy.get(locator).invoke("css", cssProperty);
		}
	}

	isElementDisplayed(locator) {
		if (locator.startsWith("//")) {
			return cy.xpath(locator).should("be.visible");
		} else {
			return cy.get(locator).should("be.visible");
		}
	}

	isElementEnabled(locator) {
		if (locator.startsWith("//")) {
			return cy.xpath(locator).should("be.enabled");
		} else {
			return cy.get(locator).should("be.enabled");
		}
	}

	goBack() {
		cy.go("back");
	}

	goForward() {
		cy.go("forward");
	}

	reloadPage() {
		cy.reload();
	}

	focusElement(locator) {
		if (locator.startsWith("//")) {
			cy.xpath(locator).focus();
		} else {
			cy.get(locator).focus();
		}
	}

	blurElement(locator) {
		if (locator.startsWith("//")) {
			cy.xpath(locator).blur();
		} else {
			cy.get(locator).blur();
		}
	}

}

export default UIController;
