import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "App";
import ThemeContextProvider from "context/ThemeContext";

describe("App", () => {
  it("renders theme correctly upon changing state", async () => {
    const { getByText } = render(
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    );
    const container = screen.getByTestId("container");

    fireEvent.click(getByText("Toggle Theme"));

    await waitFor(() => {
      expect(container).toHaveClass("bg-slate-800");
    });
  });
});
