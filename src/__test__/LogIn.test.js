import { render ,fireEvent, screen } from "@testing-library/react"
import {BrowserRouter as Router} from 'react-router-dom';
import LogIn from "../components/LogIn";
 
describe("Test for LogIn Component", () =>{

    test("Email input should be rendered", () => {
        render( <Router> <LogIn /> </Router> );
        const userInput = screen.getByPlaceholderText("Email");
        expect(userInput).toBeInTheDocument();
    });

    test("Passwors input should be rendered", () => {
        render( <Router> <LogIn /> </Router> );
        const userInput = screen.getByPlaceholderText("Password");
        expect(userInput).toBeInTheDocument();
    });

    test("Email input should be empty", () => {
        render( <Router> <LogIn /> </Router> );
        const userInput = screen.getByPlaceholderText("Email");
        expect(userInput.value).toBe("");
    });

    test("Password input should be empty", () => {
        render( <Router> <LogIn /> </Router> );
        const userInput = screen.getByPlaceholderText("Password");
        expect(userInput.value).toBe("");
    });

    test("Email value should change", () => {
        render( <Router> <LogIn /> </Router> );
        const userInput = screen.getByPlaceholderText(/Email/i);
        const testValue = "test@gmail.com";
    
        fireEvent.change(userInput, { target: {value: testValue}  });
        expect(userInput.value).toBe(testValue);
    });

    test("Password value should change", () => {
        render( <Router> <LogIn /> </Router> );
        const userInput = screen.getByPlaceholderText("Password");
        const testValue = "test123456";
    
        fireEvent.change(userInput, { target: {value: testValue}  });
        expect(userInput.value).toBe(testValue);
    });

    test("Email empty display Email is required!",async () => {
        render( <Router> <LogIn /> </Router> );
        const buttonSubmit=screen.getByRole("button");
        fireEvent.click(buttonSubmit)
        const message=screen.getByText(/Email is required!/i);
        expect(message).toBeInTheDocument();  
    });

    test("Password empty display Password is required!",async () => {
        render( <Router> <LogIn /> </Router> );
        const buttonSubmit=screen.getByRole("button");
        fireEvent.click(buttonSubmit)
        const message=screen.getByText("Password is required!");
        expect(message).toBeInTheDocument();  
    });

    test("Email Format check ", () => {
        render( <Router> <LogIn /> </Router> );
        const userInput = screen.getByPlaceholderText("Email");
        const buttonSubmit=screen.getByRole("button");
        const testValue = "test1";
        fireEvent.change(userInput, { target: {value: testValue}  });
        fireEvent.click(buttonSubmit);
        const message=screen.getByText("This is not a valid email format!");
        expect(message).toBeInTheDocument();  
    });

    test("Password must be atleast 8 characters ", () => {
        render( <Router> <LogIn /> </Router> );
        const userInput = screen.getByPlaceholderText("Password");
        const buttonSubmit=screen.getByRole("button");
        const testValue = "test1";
        fireEvent.change(userInput, { target: {value: testValue}  });
        fireEvent.click(buttonSubmit);
        const message=screen.getByText("Password must be atleast 8 characters");
        expect(message).toBeInTheDocument();  
    });

    test("Password cannot exceed more than 16 characters", () => {
        render( <Router> <LogIn /> </Router> );
        const userInput = screen.getByPlaceholderText("Password");
        const buttonSubmit=screen.getByRole("button");
        const testValue = "test123456789012345678";
        fireEvent.change(userInput, { target: {value: testValue}  });
        fireEvent.click(buttonSubmit);
        const message=screen.getByText("Password cannot exceed more than 16 characters");
        expect(message).toBeInTheDocument();  
    });

    test("Password should be combination of Captial and Small Alphabets and Numbers combination", () => {
        render( <Router> <LogIn /> </Router> );
        const userInput = screen.getByPlaceholderText("Password");
        const buttonSubmit=screen.getByRole("button");
        const testValue = "test12345678";
        fireEvent.change(userInput, { target: {value: testValue}  });
        fireEvent.click(buttonSubmit);
        const message=screen.getByText("Password should be combination of Captial and Small Alphabets and Numbers combination");
        expect(message).toBeInTheDocument();  
    });

    test("Valid Email and Password", () => {
        render( <Router> <LogIn /> </Router> );
        const email = screen.getByPlaceholderText("Email");
        const password = screen.getByPlaceholderText("Password");
        const emailValue = "Test@gmail.com";
        const passwordValue = "Test1234568";
        fireEvent.change(email, { target: {value: emailValue}  });
        fireEvent.change(password, { target: {value: passwordValue}  });
    });

})