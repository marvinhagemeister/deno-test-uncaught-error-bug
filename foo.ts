// Commenting this unused import that has no side effects somehow
// fixes the missing error message in the test output.
// import * as kl from "npm:kolorist";

Deno.test("Foo", async () => {
  // Commenting either this or the `kolorist` import makes the
  // error message show up, but when both are present it somehow
  // doesn't print the error message
  new Deno.Command(Deno.execPath(), {
    args: ["run", "-A", "server.ts"],
    stdin: "null",
    stdout: "inherit",
    stderr: "inherit",
  }).spawn();

  throw new Error("This message should be printed to the terminal");
});
