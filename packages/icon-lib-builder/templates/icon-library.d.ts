import { IconDefinition } from "./icon-definition";

export interface IconLibrary {
    /**
     * List of all icons in the library.
     */
    metadata: IconDefinition[];

    /**
     * A function to inject the spritesheet into DOM.
     */
    injectSpritesheet(): void;
}
