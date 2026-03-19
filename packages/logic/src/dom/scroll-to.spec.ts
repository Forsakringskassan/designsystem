import flushPromises from "flush-promises";
import { scrollTo } from "./scroll-to";

const spyScrollTo = jest.fn();

describe("scrollTo with offset signature", () => {
    beforeEach(() => {
        Object.defineProperty(window, "scrollTo", { value: spyScrollTo });
        spyScrollTo.mockClear();
    });

    it("calls window.scrollTo with default top 0px when no top is specified", () => {
        const element = document.createElement("input");

        scrollTo(element);
        expect(spyScrollTo).toHaveBeenCalledWith({
            top: 0,
            behavior: "smooth",
        });
    });

    it("calls window.scrollTo with top 50px", () => {
        const element = document.createElement("input");

        scrollTo(element, 50);
        expect(spyScrollTo).toHaveBeenCalledWith({
            top: -50,
            behavior: "smooth",
        });
    });
});

describe("scrollTo with options signature", () => {
    const elementPositionAboveScreen = -300;
    const windowScrollPosition = 1000;
    const frameDuration = 1000 / 60;

    beforeEach(() => {
        jest.spyOn(
            document.documentElement,
            "clientTop",
            "get",
        ).mockImplementation(() => 0);
        Object.assign(global.window, { pageYOffset: windowScrollPosition });
        Object.defineProperty(window, "scrollTo", { value: spyScrollTo });
        spyScrollTo.mockClear();
        jest.useFakeTimers();
    });

    function mockElement(): Element {
        const element = document.createElement("input");
        const mock = jest.fn();
        mock.mockReturnValue({ top: elementPositionAboveScreen });
        element.getBoundingClientRect = mock;

        return element;
    }

    it("should call scrollTo 60 times when duration is 1000 ms (60FPS)", () => {
        const element = mockElement();

        scrollTo(element, { duration: 1000 });

        jest.advanceTimersByTime(frameDuration * 60);
        expect(spyScrollTo).toHaveBeenCalledTimes(60);
    });

    it("should resolve promise when scroll is finished", async () => {
        const element = mockElement();

        let resolved = false;
        scrollTo(element, { duration: frameDuration * 60 }).then(() => {
            resolved = true;
        });

        jest.advanceTimersByTime(frameDuration * 59);
        await flushPromises();
        expect(resolved).toBeFalsy();

        jest.advanceTimersByTime(frameDuration * 1);
        await flushPromises();
        expect(resolved).toBeTruthy();
    });

    it("should call scrollTo 30 times and scroll from 1000 to 700 so element (-300) will be in viewport", () => {
        const element = mockElement();

        scrollTo(element, { duration: 500 }); //30 frames

        jest.advanceTimersByTime(frameDuration * 30);

        expect(spyScrollTo).toHaveBeenCalledTimes(30);

        const values = spyScrollTo.mock.calls.map((call) => call[0].top);
        expect(values).toEqual([
            999.178284305241, 996.7221401100709, 992.6584774442731,
            987.0318186463901, 979.9038105676658, 971.352549156242,
            961.4717238216092, 950.3695909538287, 938.167787843871, 925,
            911.01049646137, 896.3525491562422, 881.1867536226639,
            865.679269490148, 850, 834.3207305098521, 818.8132463773362,
            803.647450843758, 788.9895035386301, 775, 761.8322121561291,
            749.6304090461713, 738.528276178391, 728.647450843758,
            720.0961894323342, 712.9681813536099, 707.3415225557269,
            703.2778598899291, 700.821715694759, 700,
        ]);
    });

    it("should call scrollTo 30 times and scroll from 1000 to 650 when adding offset 50", () => {
        const element = mockElement();

        scrollTo(element, { duration: 500, offset: 50 });

        jest.advanceTimersByTime(frameDuration * 30);

        expect(spyScrollTo).toHaveBeenCalledTimes(30);
        expect(spyScrollTo.mock.calls[0][0].top).toMatchInlineSnapshot(
            `999.0413316894478`,
        );
        expect(spyScrollTo.mock.calls[29][0].top).toMatchInlineSnapshot(`650`);
    });
});
