import * as openModalModule from "../open-modal/open-modal";
import { type MaybeComponent } from "../maybe-component";
import { MaybeWithFKUIContext } from "../../config";
import { formModal } from "./form-modal";

const callingInstance = { $fkui: {} } as MaybeWithFKUIContext;

it("should return data without reason on submit", async () => {
    expect.assertions(1);
    jest.spyOn(openModalModule, "openModal").mockResolvedValue({
        reason: "submit",
        data: { field1: "" },
    });
    const result = await formModal(callingInstance, {} as MaybeComponent);
    expect(result).toEqual({ field1: "" });
});

it("should not return reason on cancel or close and reject the promise", async () => {
    expect.assertions(1);
    jest.spyOn(openModalModule, "openModal").mockResolvedValue({
        reason: "cancel",
        data: { field1: "" },
    });
    const promise = formModal(callingInstance, {} as MaybeComponent);
    await expect(promise).rejects.toBe("cancel");
});

it("should set size prop when size option is used", async () => {
    expect.assertions(1);

    const openModal = jest
        .spyOn(openModalModule, "openModal")
        .mockResolvedValue({
            reason: "submit",
            data: { field1: "" },
        });
    await formModal(callingInstance, {} as MaybeComponent, { size: "large" });

    expect(openModal).toHaveBeenCalledWith(
        expect.anything(),
        expect.anything(),
        {
            props: {
                size: "large",
            },
        },
    );
});

it("should set custom prop when prop option is used", async () => {
    expect.assertions(1);

    const openModal = jest
        .spyOn(openModalModule, "openModal")
        .mockResolvedValue({
            reason: "submit",
            data: { field1: "" },
        });
    await formModal(callingInstance, {} as MaybeComponent, {
        props: {
            myStringProp: "myProp",
            myBooleanProp: true,
        },
    });

    expect(openModal).toHaveBeenCalledWith(
        expect.anything(),
        expect.anything(),
        {
            props: {
                size: "",
                myStringProp: "myProp",
                myBooleanProp: true,
            },
        },
    );
});
