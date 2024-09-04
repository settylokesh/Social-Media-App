import { render ,fireEvent, screen } from "@testing-library/react"
import RegistrationForm from "../components/RegistrationForm"
import {BrowserRouter as Router} from 'react-router-dom';

describe("Test the RegistartionForm Components", () =>{

    test("First Name input should be rendered", () => {
       render( <Router> <RegistrationForm /> </Router> );
        const userInput = screen.getByPlaceholderText(/First Name/i);
        expect(userInput).toBeInTheDocument();
    });

    test("Last Name input should be rendered", () => {
        render( <Router> <RegistrationForm /> </Router> );
        const userInput = screen.getByPlaceholderText("Last Name");
        expect(userInput).toBeInTheDocument();
    });

    test("Email input should be rendered", () => {
        render( <Router> <RegistrationForm /> </Router> );
        const userInput = screen.getByPlaceholderText("Email");
        expect(userInput).toBeInTheDocument();
    });

    test("Passwors input should be rendered", () => {
        render( <Router> <RegistrationForm /> </Router> );
        const userInput = screen.getByPlaceholderText("Password");
        expect(userInput).toBeInTheDocument();
    });

    test("Confirm Password input should be rendered", () => {
        render( <Router> <RegistrationForm /> </Router> );
        const userInput = screen.getByPlaceholderText("Confirm Password");
        expect(userInput).toBeInTheDocument();
    });
      

    test("Submit button should be rendered",async ()=>{
        render( <Router> <RegistrationForm /> </Router> );
        const buttonSubmit = await screen.getByRole("button")
        expect(buttonSubmit).toBeInTheDocument();
    });

    test("First Name input should be empty", () => {
        render( <Router> <RegistrationForm /> </Router> );
        const userInput = screen.getByPlaceholderText("First Name");
        expect(userInput.value).toBe("");
    });

    test("Last Name input should be empty", () => {
        render( <Router> <RegistrationForm /> </Router> );
        const userInput = screen.getByPlaceholderText("Last Name");
        expect(userInput.value).toBe("");
    });

    test("Email input should be empty", () => {
        render( <Router> <RegistrationForm /> </Router> );
        const userInput = screen.getByPlaceholderText("Email");
        expect(userInput.value).toBe("");
    });

    test("Password input should be empty", () => {
        render( <Router> <RegistrationForm /> </Router> );
        const userInput = screen.getByPlaceholderText("Password");
        expect(userInput.value).toBe("");
    });

    test("Confirm Password input should be empty", () => {
        render( <Router> <RegistrationForm /> </Router> );
        const userInput = screen.getByPlaceholderText("Confirm Password");
        expect(userInput.value).toBe("");
    });

    test("First Name value should change", () => {
        render( <Router> <RegistrationForm /> </Router> );
        const userInput = screen.getByPlaceholderText(/First Name/i);
        const testValue = "test";
      
        fireEvent.change(userInput, { target: {value: testValue}  });
        expect(userInput.value).toBe(testValue);
    });

    test("Last Name value should change", () => {
        render( <Router> <RegistrationForm /> </Router> );
        const userInput = screen.getByPlaceholderText(/Last Name/i);
        const testValue = "test";
      
        fireEvent.change(userInput, { target: {value: testValue}  });
        expect(userInput.value).toBe(testValue);
    });

    test("Email value should change", () => {
        render( <Router> <RegistrationForm /> </Router> );
        const userInput = screen.getByPlaceholderText(/Email/i);
        const testValue = "test@gmail.com";
    
        fireEvent.change(userInput, { target: {value: testValue}  });
        expect(userInput.value).toBe(testValue);
    });

    test("Password value should change", () => {
        render( <Router> <RegistrationForm /> </Router> );
        const userInput = screen.getByPlaceholderText("Password");
        const testValue = "test";
    
        fireEvent.change(userInput, { target: {value: testValue}  });
        expect(userInput.value).toBe(testValue);
    });

    test("Confirm Password value should change", () => {
        render( <Router> <RegistrationForm /> </Router> );
        const userInput = screen.getByPlaceholderText("Confirm Password");
        const testValue = "teST123";
    
        fireEvent.change(userInput, { target: {value: testValue}  });
        expect(userInput.value).toBe(testValue);
    });

    test("Password input should have type password",()=>{
        render( <Router> <RegistrationForm /> </Router> );
        const password=screen.getByPlaceholderText("Password");
        expect(password).toHaveAttribute("type","password");
    });

    test("Confirm Password input should have type password",()=>{
        render( <Router> <RegistrationForm /> </Router> );
        const password=screen.getByPlaceholderText("Confirm Password");
        expect(password).toHaveAttribute("type","password");
    });

    test("First Name empty display This is not a valid FirstName!",async () => {
        render( <Router> <RegistrationForm /> </Router> );
        const buttonSubmit=screen.getByRole("button");
        fireEvent.click(buttonSubmit)
        const message=screen.getByText(/FirstName is required!/i);
        expect(message).toBeInTheDocument();  
    });

    test("Last Name empty display This is not a valid  LastName!",async () => {
        render( <Router> <RegistrationForm /> </Router> );
        const buttonSubmit=screen.getByRole("button");
        fireEvent.click(buttonSubmit)
        const message=screen.getByText(/LastName is required!/i);
        expect(message).toBeInTheDocument();  
    });

    test("Email empty display Email is required!",async () => {
        render( <Router> <RegistrationForm /> </Router> );
        const buttonSubmit=screen.getByRole("button");
        fireEvent.click(buttonSubmit)
        const message=screen.getByText(/Email is required!/i);
        expect(message).toBeInTheDocument();  
    });

    test("Password empty display Password is required!",async () => {
        render( <Router> <RegistrationForm /> </Router> );
        const buttonSubmit=screen.getByRole("button");
        fireEvent.click(buttonSubmit)
        const message=screen.getByText("Password is required!");
        expect(message).toBeInTheDocument();  
    });

    test("Confirm Password empty display Confirm Password is required!",async () => {
        render( <Router> <RegistrationForm /> </Router> );
        const buttonSubmit=screen.getByRole("button");
        fireEvent.click(buttonSubmit)
        const message=screen.getByText("Confirm Password is required!");
        expect(message).toBeInTheDocument();  
    });

    test("First Name othen then Alphabets", () => {
        render( <Router> <RegistrationForm /> </Router> );
        const userInput = screen.getByPlaceholderText("First Name");
        const buttonSubmit=screen.getByRole("button");
        const testValue = "test1";
        fireEvent.change(userInput, { target: {value: testValue}  });
        fireEvent.click(buttonSubmit);
        const message=screen.getByText("This is not a valid First Name!");
        expect(message).toBeInTheDocument();  
    });

    test("Last Name othen then Alphabets", () => {
        render( <Router> <RegistrationForm /> </Router> );
        const userInput = screen.getByPlaceholderText("Last Name");
        const buttonSubmit=screen.getByRole("button");
        const testValue = "test1";
        fireEvent.change(userInput, { target: {value: testValue}  });
        fireEvent.click(buttonSubmit);
        const message=screen.getByText("This is not a valid Last Name!");
        expect(message).toBeInTheDocument();  
    });

    test("Email Format check ", () => {
        render( <Router> <RegistrationForm /> </Router> );
        const userInput = screen.getByPlaceholderText("Email");
        const buttonSubmit=screen.getByRole("button");
        const testValue = "test1";
        fireEvent.change(userInput, { target: {value: testValue}  });
        fireEvent.click(buttonSubmit);
        const message=screen.getByText("This is not a valid email format!");
        expect(message).toBeInTheDocument();  
    });

    test("Password must be atleast 8 characters ", () => {
        render( <Router> <RegistrationForm /> </Router> );
        const userInput = screen.getByPlaceholderText("Password");
        const buttonSubmit=screen.getByRole("button");
        const testValue = "test1";
        fireEvent.change(userInput, { target: {value: testValue}  });
        fireEvent.click(buttonSubmit);
        const message=screen.getByText("Password must be atleast 8 characters");
        expect(message).toBeInTheDocument();  
    });

    test("Confirm must be atleast 8 characters ", () => {
        render( <Router> <RegistrationForm /> </Router> );
        const userInput = screen.getByPlaceholderText("Confirm Password");
        const buttonSubmit=screen.getByRole("button");
        const testValue = "test1";
        fireEvent.change(userInput, { target: {value: testValue}  });
        fireEvent.click(buttonSubmit);
        const message=screen.getByText("Confirm Password must be atleast 8 characters");
        expect(message).toBeInTheDocument();  
    });

    test("Password cannot exceed more than 16 characters", () => {
        render( <Router> <RegistrationForm /> </Router> );
        const userInput = screen.getByPlaceholderText("Password");
        const buttonSubmit=screen.getByRole("button");
        const testValue = "test123456789012345678";
        fireEvent.change(userInput, { target: {value: testValue}  });
        fireEvent.click(buttonSubmit);
        const message=screen.getByText("Password cannot exceed more than 16 characters");
        expect(message).toBeInTheDocument();  
    });

    test("Confirm Password cannot exceed more than 16 characters", () => {
        render( <Router> <RegistrationForm /> </Router> );
        const userInput = screen.getByPlaceholderText("Confirm Password");
        const buttonSubmit=screen.getByRole("button");
        const testValue = "test123456789012345678";
        fireEvent.change(userInput, { target: {value: testValue}  });
        fireEvent.click(buttonSubmit);
        const message=screen.getByText("Confirm Password cannot exceed more than 16 characters");
        expect(message).toBeInTheDocument();  
    });

    test("Password should be combination of Captial and Small Alphabets and Numbers combination", () => {
        render( <Router> <RegistrationForm /> </Router> );
        const userInput = screen.getByPlaceholderText("Password");
        const buttonSubmit=screen.getByRole("button");
        const testValue = "test12345678";
        fireEvent.change(userInput, { target: {value: testValue}  });
        fireEvent.click(buttonSubmit);
        const message=screen.getByText("Password should be combination of Captial and Small Alphabets and Numbers combination");
        expect(message).toBeInTheDocument();  
    });

    test("Confirm Password should be combination of Captial and Small Alphabets and Numbers combination", () => {
        render( <Router> <RegistrationForm /> </Router> );
        const userInput = screen.getByPlaceholderText("Confirm Password");
        const buttonSubmit=screen.getByRole("button");
        const testValue = "test12345678";
        fireEvent.change(userInput, { target: {value: testValue}  });
        fireEvent.click(buttonSubmit);
        const message=screen.getByText("Confirm Password should be combination of Captial and Small Alphabets and Numbers combination");
        expect(message).toBeInTheDocument();  
    });

    test("Password and Conformation Password Check", () => {
        render( <Router> <RegistrationForm /> </Router> );
        const password = screen.getByPlaceholderText("Password");
        const confirmPassword = screen.getByPlaceholderText("Confirm Password");
        const buttonSubmit=screen.getByRole("button");
        const testValue1 = "Test12345678";
        const testValue2 = "Test1234568";
        fireEvent.change(password, { target: {value: testValue1}  });
        fireEvent.change(confirmPassword, { target: {value: testValue2}  });
        fireEvent.click(buttonSubmit);
        const message=screen.getByText("Password and Conformation Password should match");
        expect(message).toBeInTheDocument();  
    });
    
})