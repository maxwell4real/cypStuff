import Home_Page from "../pages/homepage.js"
import SignIn_Page from "../pages/signinpage"
import Account_Page from "../pages/accountpage"

describe('Login Test', () =>{

    const homepage = new Home_Page;
    const signinpage = new SignIn_Page;
    const accountpage = new Account_Page;

    it('Check user can login succeessfully', ()=>{
        cy.visit('/index.php')
        homepage.clickSignIn()
        signinpage.login("maxtesting6+2@gmail.com", "Today01")
        accountpage.verifyMyAccount()
        accountpage.clickSignOutBtn()
    })

    it('check error message is displayed when user enter incorrect details', ()=>{
        cy.visit('/index.php')
        homepage.clickSignIn()
        signinpage.login("maxtestin@aol.com", "Today01")
        cy.get('#center_column > :nth-child(2) > p').contains('There is 1 error')

    })


})