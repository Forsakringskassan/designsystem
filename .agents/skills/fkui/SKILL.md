---
name: fkui
description: Use FKUI components
---

# FKUI Skill (FKDS / FK Designsystem)

This skill provides expert guidance on using the FKUI components (also known as FKDS, FK Designsystem, or Kassans designsystem) in Vue.js applications.

## Goal

Help developers write correct, accessible, and maintainable Vue code using the FKUI components by leveraging the API specifications provided in JSON files.

## Knowledge Base

The API definitions for each component are located in: [`./json/`](./json/)
The mapping between Swedish component names and technical names is located in: [`./component-map.json`](./component-map.json)

Each JSON file contains:

- `name`: The component name (e.g., `FBadge`).
- `props`: Detailed specifications of properties, including:
    - `name`: Property name.
    - `description`: What the prop does.
    - `type`: The expected TypeScript type.
    - `required`: Whether the prop must be provided.
    - `default`: The default value.
    - `deprecated`: If the prop is no longer recommended.
- `events`: Events emitted by the component.
- `slots`: Available slots for content injection.

## Workflow when helping with components

When a user asks to use a component or asks how a component works:

1. **Identify the Component**:
    - If the user uses a technical name (e.g., `FBadge`), use it directly.
    - If the user uses a Swedish name (e.g., "Bricka"), look up the technical name in [`./component-map.json`](./component-map.json).
    - Search for the resulting component name in the [`./json/`](./json/) directory.
2. **Retrieve Specification**: Read the corresponding `.json` file to get the full API contract.
    - Use the component name (e.g., `<f-badge />`).
    - Use the correct types for props based on the `type` field.
    - Use the `description` to provide helpful comments or guidance to the user.
3. **Validate & Warn**:
    - If the user provides a value that doesn't match the `type` (especially unions like `"default" | "warning" | ...`), correct it.
    - If a prop is marked as `deprecated`, inform the user and suggest the modern alternative if available.
4. **Slots and Events**:
    - When generating code, show how to use the defined `slots` for content.
    - When suggesting interaction, use the defined `events` (e.g., `@some-event="handleEvent"`).

## Terminology Mapping

The following terms all refer to the same system:

- FKUI
- FKDS
- FK Designsystem
- Försäkringskassans designsystem
