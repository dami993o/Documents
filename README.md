# Documents

Title 

Hudl Log-in Automation

Introduction

This project will show you how to set up an automation framework on your local machine in-order to open the Hudl home page, 
login using email address with password and log out using Webdriver io (JavaScript)

- Installation process 
- Language used 
- Steps 

Installation process 

•             Open terminal in visual studio code 

•             Ensure the terminal path is targeting your project

•             Install at least node v16.x or higher

•             Run npm init wdio .

•             Run npm init wdio . -- --yes

•             To run test run npx wdio run ./wdio.conf.js


Language used 

Javascript (webdriver io)


Steps 

Write test code: In your test file, you can use WebdriverIO's API to interact with web elements and perform actions on them. For example, you can use the following code to navigate to a URL: 

    it('should open Hudl URL', async () => { await browser.url('https://www.hudl.com/home');




The following confirms you are on the home page by verifying the text ‘'Change the way you see the game’


        const expectedText = 'Change the way you see the game.';
        
        const element = $('#homepage_hero-button > button');
        
        expect(element).toHaveText(expectedText);

        
   
The next step is to click the login button then insert username,  password and click the login button

Clicking login button and insertting Username 

    it('Should click login and insert username', async () => {
        const login =  $('[data-qa-id^="login"]');
        await login.click();
        const usernameSelect = $('[data-qa-id^="email-input"]');
        await  usernameSelect.addValue('damilola.to@hotmail.com');
        
      

           


Insertting Password 

     it('Should insert password', async () => {
      const usernameSelect = $('[data-qa-id^="password-input"]');
      await usernameSelect.addValue('1234Adet');

 


        

    


Clicking Login Button

    it('Should click login botton', async () => {
     const loginbutton =  $('[data-qa-id^="login-btn"]');
     await loginbutton.click();
   

        
This code confirms you are on the login page by verifying the text 'Newcastle Jets FC' exists 


    it('verfiy login page', async () => {
      const expectedText = 'Newcastle Jets FC';
      const verfiy = $('#ssr-webnav > div > div.hui-webnav__grid.hui-navcontainer > nav.hui-webnav__grid-col--onewhole.hui-primarynav.uni-environment--dark.uni-env--dark > div.hui-primaryteamswitcher > a > div.hui-primaryteamswitcher__display-name');
      expect(verfiy).toHaveText(expectedText); });



  
    
    

This code allows you to click the menu button 


    it('Should click menu botton', async () => {
    const clicktoprightbtn =  $('.hui-globaluseritem__display-name');
    await clicktoprightbtn.click();

   



This code allows you to click the logout button 

 
    
    it (' should logout', async () => {
    const logoutbtn =   $('[data-qa-id^="webnav-usermenu-logout"]'); 
    await logoutbtn.click();
