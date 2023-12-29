import BoardsView from './BoardsView.vue'

describe('<BoardsView /> succesful', () => {
  it('renders', () => {
    
    // see: https://on.cypress.io/mounting-vue
    cy.mount(BoardsView, {
      data() {
        return {
          boards: [{ id: 1, name: 'New Board', role: 'Admin' }]
        };
      }
    }).then(() => {
        // Check if the new board item is rendered in the component
        cy.get('.BoardItem').should('have.lengthOf', 1);
        cy.contains('.BoardItem', 'New Board');
    });
  })
})