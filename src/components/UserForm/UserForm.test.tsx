import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserForm from "@/components/UserForm/UserForm";

test("2개의 인풋 존재", async () => {
  render(<UserForm />);

  const inputs = screen.getAllByRole("textbox");

  expect(inputs).toHaveLength(2);
});
