import { getGridClasses } from "./get-grid-classes";

function toClassList(obj: Record<string, boolean>): string[] {
    return Object.entries(obj)
        .filter(([, enabled]) => enabled)
        .map(([key]) => key);
}

it("should set correct screen type depending on width", () => {
    expect.assertions(4);
    expect(toClassList(getGridClasses(639))).toEqual([
        "grid--force",
        "grid--force-sm",
    ]);
    expect(toClassList(getGridClasses(640))).toEqual([
        "grid--force",
        "grid--force-sm",
        "grid--force-md",
    ]);
    expect(toClassList(getGridClasses(1024))).toEqual([
        "grid--force",
        "grid--force-sm",
        "grid--force-md",
        "grid--force-lg",
    ]);
    expect(toClassList(getGridClasses(1280))).toEqual([
        "grid--force",
        "grid--force-sm",
        "grid--force-md",
        "grid--force-lg",
        "grid--force-xl",
    ]);
});
