# Deno test console bug

Any uncaught errors are not printed to the console when a process is spawned inside a test function AND an npm import is present. For some reason as soon as one of them is commented out the uncaught error is printed as expected.

## Steps to reproduce

1. Clone repository
2. Run `deno test -A foo.ts`

## Actual output

```sh
$ deno test -A foo.ts
Check file:///Users/marvinhagemeister/dev/test/deno-bugs/test-console/foo.ts
running 1 test from ./foo.ts
Foo ... FAILED (12ms)
------- output -------
Server running: http://localhost:8080/
Listening on http://localhost:8300/
```

## Expected output

```sh
$ deno test -A foo.ts
Check file:///Users/marvinhagemeister/dev/test/deno-bugs/test-console/foo.ts
running 1 test from ./foo.ts
Foo ... FAILED (13ms)

 ERRORS

Foo => ./foo.ts:5:6
error: Error: This message should be printed to the terminal
  throw new Error("This message should be printed to the terminal");
        ^
    at file:///Users/marvinhagemeister/dev/test/deno-bugs/test-console/foo.ts:16:9

 FAILURES

Foo => ./foo.ts:5:6

FAILED | 0 passed | 1 failed (29ms)

error: Test failed
```
