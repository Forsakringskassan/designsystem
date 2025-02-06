import { FInteractiveTablePageObject } from "@fkui/vue/cypress";

export class FInteractiveTableDocsPageObject {
    public route: string = "/#/Components/FInteractiveTable";

    public exampleTable(): FInteractiveTablePageObject {
        return new FInteractiveTablePageObject('[data-test="table-example"]');
    }
}
