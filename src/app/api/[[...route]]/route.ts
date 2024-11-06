import { Hono } from "hono";
import { handle } from "hono/vercel";

const app = new Hono().basePath("/api");

app.get("/hello", (c) => {
  return c.json({ hello: "World" });
});

app.get("/project/:projectId", (c) => {
  const params = c.req.param("projectId");
  return c.json({ project: params });
});

export const GET = handle(app);
