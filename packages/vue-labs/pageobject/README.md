# FKUI Vue Labs page objects

Page objects for FKUI Vue labs components. All page objects are dependent on Cypress commands.

## Best practices for FKUI Vue Labs

- All page objects should follow the following naming convention:

    ```text
    <ComponentName>.pageobject.{js,ts}

    # example
    XFoo.pageobject.ts
    XBar.pageobject.js
    ```

- All page objects should implement the `BasePageObject` interface. This ensures that all page objects at least contains a the selector that was used and the element itself.

- All page objects MUST use relative imports, this is to ensure that all consumers can use them.
