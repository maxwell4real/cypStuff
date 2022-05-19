class SignIn_Page{

    enterEmailAddress(){
        cy.get('#email').type('maxtesting6+2@gmail.com')
    }

    enterPassword(){
        cy.get('#passwd').type('Today01')
    }

    clickSignBtn (){
        cy.get('#SubmitLogin > span').click()
    }

    login(email, password){
        cy.get('#email').type(email)
        cy.get('#passwd').type(password)
        cy.get('#SubmitLogin > span').click()
    }


}

export default SignIn_Page;