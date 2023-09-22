import { Given, Then, When } from "@cucumber/cucumber"
import RegisterPage from "../../pages/registerPage";
import { pageFixture } from "../../hooks/pageFixture";
import * as data from "../../helper/util/test-data/registerUser.json"
import Assert from "../../helper/wrapper/asserts";

let registerPage : RegisterPage;
let asserts : Assert;

Given('I navigate to the register page', async function () {
    registerPage = new RegisterPage(pageFixture.page);
    asserts = new Assert(pageFixture.page);
    await registerPage.navigateToRegisterPage();
});

When('I created a new user', async function () {
    const username = data.userName + Date.now().toString();
    await registerPage.registerUser(data.firstName, data.lastName, username, data.password, data.confirmPassword, "m")
});

Then('I confirm user registration is success', async function () {
    await asserts.assertUrl("https://bookcart.azurewebsites.net/login");
});