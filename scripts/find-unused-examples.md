# `find-unused-examples.mjs`

Finds leftover examples that is not used by any documentation page or imported by any code.

```plaintext
usage: find-unused-examples.mjs [OPTIONS]

  -z             use \0 as line delimiter
  -h, --help     shows this help

Typical usage:
  node find-unused-examples.mjs -z | xargs -0 cmd...
```
