describe('envelope-login: FormGroup component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=formgroup--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to FormGroup!');
    });
});
