import { renderHook, waitFor } from "@testing-library/react";
import { useApi } from "hooks/useApi";
import { generateHandlers } from "mocks/characters";
import { setupServer } from "msw/node";

const { handlers, data } = generateHandlers();
export const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("useApi", () => {
  it("should return the proper data", async () => {
    const hook = renderHook(() =>
      useApi("https://rickandmortyapi.com/api/character")
    );

    await waitFor(() => {
      expect(hook.result.current.data).toEqual(data);
    });
  });

  it("should set the status to true when there's an error", async () => {
    const hook = renderHook(() =>
      useApi("https://rickandmortyapi.com/api/character?error=true")
    );

    await waitFor(() => {
      expect(hook.result.current.error).toBe(true);
    });
  });

  it("should store the loading state properly", async () => {
    const hook = renderHook(() =>
      useApi("https://rickandmortyapi.com/api/character")
    );

    expect(hook.result.current.loading).toBe(true);
    await waitFor(() => {
      expect(hook.result.current.loading).toBe(false);
    });
  });
});
