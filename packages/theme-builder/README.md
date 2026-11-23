# fkui/theme-builder

Toolchain to build an FKUI theme.

## Usage

```plaintext
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

### Palette metadata

The generated `metadata.mjs` contains a `palette` array of `{ name, value, group }` objects alongside the themes and semantic tokens.
Palette names include the `--fkds-palette-color-` prefix (or the corresponding configured prefix).
The group comes from the `@group` annotation in the palette source.

## File structure
