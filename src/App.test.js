import { render, screen } from '@testing-library/react';
// import App from './App';

function Appen() {

  return (
    <div className="App">
      <header className="App-header">
        <p>
          learn react
        </p>
      </header>
    </div>
  );
}


test('renders learn react link', () => {
  render(<Appen />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

