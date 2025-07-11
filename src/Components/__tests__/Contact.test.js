
import { render , screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

 describe("Contact us page test case", ()=>{

 test ("Should load contact us componenet", () =>{
 render(<Contact/>);
 const heading =  screen.getByRole("heading");
 expect(heading).toBeInTheDocument();

});

  test ("Should load button inside contact componenet", () =>{
 render(<Contact/>);
 const button =  screen.getByRole("button");
 expect(button).toBeInTheDocument();


});

  test ("Should load button inside contact componenet", () =>{
 render(<Contact/>);
 const placeholderText = screen.getByPlaceholderText("message");

 expect(placeholderText).toBeInTheDocument();

});

  test("should load 4 input boxes on the contact component", () => {
  render (<Contact/>);

  //querying 
  const inputBoxes = screen.getAllByRole("textbox");
  expect(inputBoxes.length).toBe(4);

});
  
});


