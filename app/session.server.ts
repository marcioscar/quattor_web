import { createCookieSessionStorage } from "@remix-run/node";
const SESSION_SECRET = process.env.SESSION_SECRET as string;

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    cookie: {
      name: "__session",
      httpOnly: true,
      maxAge: 60000,
      path: "/",
      sameSite: "lax",
      secrets: [SESSION_SECRET],
      secure: false,
    },
  });

export { getSession, commitSession, destroySession };
