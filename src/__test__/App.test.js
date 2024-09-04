import { render, screen } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import App from '../App';

test('h1 tag with Social Media App in the document', () => {
  render( <Router> <App /> </Router> );
  const linkElement = screen.getByText(/Social Media App/i);
  expect(linkElement).toBeInTheDocument();
});

test("Render Registration Placeholder First Name in the document", () =>{
  const component=render( <Router> <App /> </Router> );
  const childElement=component.getByPlaceholderText("First Name");
  expect(childElement).toBeInTheDocument();                                           //assertion

});

