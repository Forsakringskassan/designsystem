# fkui/test-utils

Biblioteket innehåller en samling med funktioner och komponenter till Jest, Vitest och Cypress för att underlätta utveckling av automatiska testfall.

## Stöd för Jest och Vitest

Detta paket fungerar med både **Jest** och **Vitest**.

### Installation

Installera peer dependencies i ditt projekt:

Installera med **Jest**:

```
npm install --save-dev @fkui/test-utils jest
```

eller med **Vitest**:

```
npm install --save-dev @fkui/test-utils vitest
```

> **Notera:** Du behöver bara installera det test-ramverk du faktiskt använder.

### Användning med Jest

```ts
import "@fkui/test-utils/jest";
// ...dina tester
```

### Användning med Vitest

```ts
import "@fkui/test-utils/vitest";
// ...dina tester
```
