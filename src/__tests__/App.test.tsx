import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "App";

describe("App", () => {
  it("renders theme correctly upon changing state", async () => {
    const { getByText } = render(<App />);
    const container = screen.getByTestId("container");

    fireEvent.click(getByText("Toggle Theme"));

    await waitFor(() => {
      expect(container).toHaveClass("bg-slate-800");
    });
  });
});
