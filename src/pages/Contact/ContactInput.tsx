import { useState } from "react";

export const ContactInput = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  interface FormDataType {
    firstName: string;
    lastName: string;
  }
  const responseBody: FormDataType = { firstName: "", lastName: "" };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    responseBody.firstName = firstName;
    responseBody.lastName = lastName;
    console.log(JSON.stringify(responseBody));
    //Form submission happens here
  };
  const inputChangeHandler = (
    setFunction: React.Dispatch<React.SetStateAction<string>>,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFunction(event.target.value);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <label htmlFor="first_name">Name</label>
      </div>
      <div>
        <input
          id="first_name"
          onChange={(e) => inputChangeHandler(setFirstName, e)}
          type="text"
        />
      </div>
      <div>
        <label htmlFor="last_name">Email</label>
      </div>
      <div>
        <input
          id="last_name"
          onChange={(e) => inputChangeHandler(setLastName, e)}
          type="email"
        />
      </div>

      <input type="submit" />
    </form>
  );
};
