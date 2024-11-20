import { serve } from "bun";

serve({
  fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/") {
      return new Response("Hello MAH", { status: 2000 });
    } else if (url.pathname === "/my-email") {
      return new Response("hasnain.atta427@gmail.com", { status: 2000 });
    } else if (url.pathname === "/twitter") {
      return new Response("MAHasnain427", { status: 200 });
    } else {
      return new Response("404 Not Found", { status: 404 });
    }
  },

  port: 3000,
  hostname: "127.0.0.1"
});
