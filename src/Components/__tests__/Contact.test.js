
import { render , screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

//this all is unit testing, testing a component in isolation

//basics of testing react
//render
//querying
//assertion


describe("Contact us page test case", ()=>{

  test ("Should load contact us componenet", () =>{
 render(<Contact/>);
 const heading =  screen.getByRole("heading");

 //assertion
 expect(heading).toBeInTheDocument();
 // tobeinthedocument, install a library jest-dom

});

  test ("Should load button inside contact componenet", () =>{
 render(<Contact/>);
 const button =  screen.getByRole("button");

 //assertion
 expect(button).toBeInTheDocument();
 // tobeinthedocument, install a library jest-dom

});

  test ("Should load button inside contact componenet", () =>{
 render(<Contact/>);
 const placeholderText =  screen.getByPlaceholderText("message");

 //assertion
 expect(placeholderText).toBeInTheDocument();
 // tobeinthedocument, install a library jest-dom

});

  test("should load two input boxes on the contact component", () => {
  render (<Contact/>);

  //querying 
  const inputBoxes = screen.getAllByRole("textbox");
  //console.log(inputBoxes[0]);
  //input box is an array
  //console.log returns jsx element, virtual dom

  //assertion
  expect(inputBoxes.length).toBe(2);

});
  
});


