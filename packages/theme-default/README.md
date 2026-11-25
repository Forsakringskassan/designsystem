# fkui/theme-default

This package provides the FKUI default theme.

## Usage

### Sass

The default entry exposes a mixin for light, dark and auto mode.
Each mixin adds the theme's CSS custom properties to the selector where it is
included.
Apply it to an element that wraps the content that should use the
theme.

```scss
@use "@fkui/theme-default" as theme-default;
```

Use `light` or `dark` to force a color scheme for that scope:

```scss
.app {
    @include theme-default.light;
}
```

```scss
.app {
    @include theme-default.dark;
}
```

Use `auto` to select light or dark based on the user's operating-system or
browser color-scheme preference.
The theme updates if that preference changes:

```scss
.app {
    @include theme-default.auto;
}
```

#### Deprecated variables

For legacy CSS custom properties, include the deprecated variables.

```diff
.app {
    @include theme-default.light;
+   @include theme-default.deprecated-variables;
}
```

### CSS

To apply a theme to the whole page, import one stylesheet from
your application's entry point (for example, `main.ts` or `index.html`).
It defines the theme variables on `:root`, making them available globally on the page.

```js
import "@fkui/theme-default/theme-light";
```

Choose one stylesheet: `theme-light` always uses light mode,
`theme-dark` always uses dark mode, and `theme-auto` follows the
user's operating-system or browser color-scheme preference.

For legacy CSS custom properties, also import `deprecated-variables`.
It defines the deprecated variables on `:root` alongside the chosen theme:

```js
import "@fkui/theme-default/deprecated-variables";
```

### Metadata

Metadata for the themes, tokens and palette is available as a JavaScript
object:

```js
import metadata from "@fkui/theme-default/metadata";
```
