//const driver = await browser.init();
//var expect = require('chai').expect;
//const driver = new web-driver.remote('http://localhost:4723/wd/hub');

describe('First Test', ()=>{

    it('Find Element', async ()=> {

       await $("//*[@text='Skip']").click();
       await driver.pause(5000);
       const signIn = await $("//*[@text='Sign in with Email' and @index='0']").click();
//       const emailInput = await $("//*[@text='Don't have an Account ? Sign Up' and @index= '14']").click();
       const emailInput = await $('//*[@text="Email" and @index = "3"]').setValue("Admin");
       const passInput = await $('//*[@text="Password" and @index = "1"]').setValue("Pass@123");
       await $('//android.widget.CheckBox').click();
       const btnClick = await $('//*[@text = "Login" and @index = "0" ]').click();
       const element_one = await $("//*[@text='Error' and @index='0']");
       await expect(element_one).toBeExisting('Error');


    });



});

describe('Second Test', ()=>{

it('Sign in', async()=>{
            const mailInput = await $('//*[@text="Admin" and @index = "3"]').setValue("meyeden354@eazenity.com");
            const pswdInput = await $('//android.widget.EditText[@index= "1"]').setValue("Pass@123");
            const btnClick = await $('//*[@text = "Login" and @index = "0" ]').click();
            await driver.pause(3000);
            await $("//*[@text='Logged in Successfully' and @index= '0']");
            await driver.pause(5000);
            const profile_page = await $('//*[@text = "Profile" and @index= "2"]').click();
            await driver.pause(10000);
            const first_name = await $('//android.widget.EditText[@index = "6"]');
            await expect(first_name).toHaveText("meyeden");
            await driver.pause(5000)
            const last_name = await $('//android.widget.EditText[@index = "8"]');
            await expect(last_name).toHaveText("eazenity");
});

it('Scroll Down', async()=>{
            const bottomElementSelector = 'new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("Add Social Links:"))';
            const bottomEl = await $(`android=${bottomElementSelector}`);
            await bottomEl;
            const social_link = await $('//android.widget.EditText[@index= "1"]').click

});
it('should scroll up in the scrollable element', async () => {
    // Your test code to navigate to the page containing the scrollable element
    // ...
            const topElementSelector = 'new UiScrollable(new UiSelector().scrollable(true)).scrollBackward().scrollIntoView(new UiSelector().text("First Name"))';
            const topEl = await $(`android=${topElementSelector}`);
            await topEl;
            await driver.pause(4000);

    // Your test code to check

});
it('Scroll Down', async()=>{
            const bottmElementSelector = 'new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("Add Payment Accounts Links:"))';
            const bottmEl = await $(`android=${bottmElementSelector}`);
            await bottmEl;
            const social_link = await $('//android.widget.EditText[@index= "1"]').click

});
it ('Click on Social links', async () =>{
            const social_link_click = await $('//*[@text = "Add Social Links:" and @index = "1"]').click();
            await driver.pause(4000);
            const back_social = await $('//*[@text = "Social Links" and @index = "0"]').click();
            await driver.pause(4000);

});
it ('ADD Payment Method', async () =>{
            const addpayment_search = 'new UiScrollable(new UiSelector().scrollable(true)).scrollForward().scrollIntoView(new UiSelector().text("Add Payment Accounts Links:"))';
            const add_payment = await $(`android=${addpayment_search}`);
            await add_payment;
            const Add_Payment = await $('//*[@text = "Add Payment Accounts Links:" and @index = "1"]').click();
            await driver.pause(4000);
            await $('//*[@text="Generate link" and @index ="0" ]').click();
            await driver.pause(3000);
            const bottonElementSelector = 'new UiScrollable(new UiSelector().scrollable(true)).scrollForward().scrollIntoView(new UiSelector().text("Close"))';
            const bottonEl = await $(`android=${bottonElementSelector}`);
            await bottonEl;
            await $('//*[@text="Close" and @index ="0" ]').click();
            await driver.pause(3000);




});
it ('Social Links', async () =>{
            const link_social = 'new UiScrollable(new UiSelector().scrollable(true)).scrollBackward().scrollIntoView(new UiSelector().text("Add Social Links:"))';
            const linkEl = await $(`android=${link_social}`);
            await linkEl;
            const social_link_click = await $('//*[@text = "Add Social Links:" and @index = "1"]').click();
            await driver.pause(4000);
            const link = await $('//*[@text = "off OFF" and @index = "9"]').click();
            await driver.pause(4000);
            await driver.back();
            await $('//*[@text = "" and @index="0"]').click();
            await driver.pause(3000)


});



});



