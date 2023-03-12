

describe('My Login application', () => {
    it('should open Hudl URL', async () => {
        await browser.url('https://www.hudl.com/home');
        const expectedText = 'Change the way you see the game.';
        const element = $('#homepage_hero-button > button');
        expect(element).toHaveText(expectedText);
        
    
        });


    it('Should click login and insert username', async () => {
        const login =  $('[data-qa-id^="login"]');
        await login.click();
        const usernameSelect = $('[data-qa-id^="email-input"]');
        await  usernameSelect.addValue('damilola.to@hotmail.com');

           
});


it('Should insert password', async () => {
      const passwordSelect = $('[data-qa-id^="password-input"]');
      await passwordSelect.addValue('1234Adet');
});

it('Should click login botton', async () => {
     const loginbutton =  $('[data-qa-id^="login-btn"]');
     await loginbutton.click();


});

it('verfiy login page', async () => {
      const expectedText = 'Newcastle Jets FC';
      const verfiy = $('#ssr-webnav > div > div.hui-webnav__grid.hui-navcontainer > nav.hui-webnav__grid-col--onewhole.hui-primarynav.uni-environment--dark.uni-env--dark > div.hui-primaryteamswitcher > a > div.hui-primaryteamswitcher__display-name');
      expect(verfiy).toHaveText(expectedText);

    });


it('Should click menu botton', async () => {
    const clicktoprightbtn =  $('.hui-globaluseritem__display-name');
    await clicktoprightbtn.click();


});

it(' should logout', async () => {
    const logoutbtn =   $('[data-qa-id^="webnav-usermenu-logout"]'); 
    await logoutbtn.click();
   
});


});
