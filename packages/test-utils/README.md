# fkui/test-utils

Biblioteket innehåller en samling med funktioner och komponenter för **Vitest** och **Jest** för att underlätta utveckling av automatiska testfall.

## Stöd för Vitest och Jest

Detta paket fungerar med både **Vitest** och **Jest**.

### Installation

Installera peer dependencies i ditt projekt:

Installera med **Vitest**:

```
npm install --save-dev @fkui/test-utils vitest
```

eller med **Jest**:

```
npm install --save-dev @fkui/test-utils jest
```

> **Notera:** Du behöver bara installera det test-ramverk du faktiskt använder.

### Användning med Vitest

```ts
import "@fkui/test-utils/vitest";
// ...dina tester
```

### Användning med Jest

```ts
import "@fkui/test-utils/jest";
// ...dina tester
```
