import { serve } from "https://deno.land/std@0.178.0/http/server.ts";

console.log(`Server running: http://localhost:8080/`);
await serve(() => new Response("hello world", { status: 200 }), { port: 8300 });
