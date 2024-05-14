const App = require('./App.tsx');

let app: InstanceType<typeof App>;

describe('<App />', () => {
  it('renders', () => {

    // see: https://on.cypress.io/mounting-react
    cy.mount(app)
    // const linkElement = screen.getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();
  })
})