import { randFullName, randStatus } from "@ngneat/falso";
import { rest } from "msw";

export const generateHandlers = () => {
  const data = Array.from({ length: 10 })
      .fill(null)
      .map(() => ({
        name: randFullName(),
        status: randStatus(),
      })),
    handlers = [
      rest.get("https://rickandmortyapi.com/api/character", (req, res, ctx) => {
        if (req.url.searchParams.get("error")) {
          return res(ctx.status(400));
        }

        return res(
          ctx.status(200),
          ctx.json({
            results: data,
          })
        );
      }),
    ];

  return { handlers, data };
};
