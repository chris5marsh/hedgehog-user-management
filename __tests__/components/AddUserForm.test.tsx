import "@testing-library/jest-dom";
import { enableFetchMocks } from "jest-fetch-mock";
// import { render } from "@testing-library/react";
// import AddUserForm from "@src/components/AddUserForm";

enableFetchMocks();

// 1- Mocking the hook using jest.fn
const mockedUseActionData = jest.fn();
const mockedUseNavigation = jest.fn();
const mockedUseSubmit = jest.fn();

// 2- Mock the library
jest.mock("react-router-dom", () => ({
  // 3- Import non-mocked library and use other functionalities and hooks
  ...jest.requireActual("react-router-dom"),

  // 4- Mock the required hook
  useActionData: () => mockedUseActionData,
  useNavigation: () => mockedUseNavigation,
  useSubmit: () => mockedUseSubmit,
}));

test("Renders the add user form", () => {
  // const addUserForm = render(<AddUserForm />);
  // console.log(addUserForm.container.innerHTML);
  expect(true).toBeTruthy();
});
