describe('forgot password', ()=>{

    //Hooks
    beforeEach(function(){
        cy.visit('http://automationpractice.com/index.php', {timeout:5000})
    })
    
    it('As a user I want to reset password', ()=> {
        cy.get('.login').click()
        cy.get('.lost_password > a').click()
        cy.get('#email').type('laura@gmail.com')
        cy.get('.submit > .btn > span').click()
        cy.get('.alert').contains('A confirmation email has been sent to your address: laura@gmail.com')

    })

    // it('Check error message is displayed when an incorrect email is used to reset password', ()=> {
    //     cy.get('.login').click()
    //     cy.get('.lost_password > a').click()
    //     cy.get('#email').type('jraphael@gmail.com')
    //     cy.get('.submit > .btn > span').click()
    //     cy.get('ol > li').contains('There is no account registered for this email address.')

    // })

    afterEach(function(){
        cy.clearCookies();
    })

    

})