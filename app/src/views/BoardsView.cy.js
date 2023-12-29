import BoardsView from './BoardsView.vue'

describe('<BoardsView /> renders 1 item', () => {
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
        
        
        cy.get('.Open')
        .should('have.attr', 'href')
        .should('not.be.empty')                  // now test the href
        .and('contain', '/editor/1');

        cy.get('.Settings')
        .should('have.attr', 'href')
        .should('not.be.empty')                  // now test the href
        .and('contain', '/settings/1');

    });
  })
})

describe('<BoardsView /> renders multiple item', () => {
  it('renders', () => {
    
    // see: https://on.cypress.io/mounting-vue
    cy.mount(BoardsView, {
      data() {
        return {
          boards: [{ id: 1, name: 'New Board', role: 'Admin' },
                   { id: 2, name: 'New Board 2', role: 'User' }]
        };
      }
    }).then(() => {
        // Check if the new board item is rendered in the component
        cy.get('.BoardItem').should('have.lengthOf', 2);
        cy.contains('.BoardItem', 'New Board');
    });
  })
})