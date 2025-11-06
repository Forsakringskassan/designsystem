# fkui/theme-builder

Toolchain to build an FKUI theme.

## Usage

```
fkui-theme-builder [OPTIONS]

Options:
      --version  Show version number                                   [boolean]
  -o, --outdir   Output directory                     [string] [default: "dist"]
  -p, --prefix   Token prefix                         [string] [default: "fkds"]
      --help     Show help                                             [boolean]
```

### Semantic tokens

By default the semantic token prefix is `fkds`.

Any CSS-variable starting with this prefix is considered a semantic token.

```css
:root {
    --fkds-foobar: #fff;
    --something-else: #fff;
}
```

With `--prefix fkds` the `--fkds-foobar` would be a semantic token.

## File structure
