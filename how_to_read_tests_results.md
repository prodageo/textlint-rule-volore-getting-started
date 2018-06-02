
# Reading test results

It has 1 header, N sections and 1 footer

## Header
```
> textlint-rule-volore-getting-started@1.0.0 test C:\Apps\laragon\www\volore\textlint-rule-volore-getting-started
> textlint-scripts test



  volore-getting-started
    1) It is bugs.
    2) It has many bugs.

One more bugs
    √ text


  1 passing (75ms)
  2 failing
```

# Other sections
```
  1) volore-getting-started
       It is bugs.:

      AssertionError [ERR_ASSERTION]: invalid: should have 1 errors but had 0:
===Text===:
It is bugs.

==Result==:
{
    "messages": [],
    "filePath": "<markdown>"
}
      + expected - actual

      -0
      +1

      at node_modules\textlint-tester\src\test-util.js:29:16
      at <anonymous>
```

```
  2) volore-getting-started
       It has many bugs.

One more bugs:

      AssertionError [ERR_ASSERTION]: invalid: should have 2 errors but had 0:
===Text===:
It has many bugs.

One more bugs

==Result==:
{
    "messages": [],
    "filePath": "<markdown>"
}
      + expected - actual

      -0
      +2

      at node_modules\textlint-tester\src\test-util.js:29:16
      at <anonymous>

```

# Footer

```
npm ERR! Test failed.  See above for more details.
```
