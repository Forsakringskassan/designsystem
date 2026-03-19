import { isVisibleInViewport } from "./is-visible-in-viewport";

const screenWidth = 1280;
const screenHeight = 800;

Object.assign(window, { innerWidth: screenWidth });
Object.assign(window, { innerHeight: screenHeight });

it.each`
    elementBounds                                     | expected | description
    ${{ left: 0, top: 0, right: 1280, bottom: 800 }}  | ${true}  | ${"element taking fullscreen"}
    ${{ left: 1, top: 1, right: 1279, bottom: 799 }}  | ${true}  | ${"element inside screen"}
    ${{ left: -1, top: 0, right: 1280, bottom: 800 }} | ${false} | ${"element outside left side of screen"}
    ${{ left: 0, top: 0, right: 1281, bottom: 800 }}  | ${false} | ${"element outside right side of screen"}
    ${{ left: 0, top: -1, right: 1280, bottom: 800 }} | ${false} | ${"element outside top of screen"}
    ${{ left: 0, top: 0, right: 1280, bottom: 801 }}  | ${false} | ${"element outside bottom of screen"}
`(
    'should return "$expected" when element bounds are $elementBounds because $description',
    ({ elementBounds, expected }) => {
        const element = document.createElement("input");
        const mock = jest.fn();
        mock.mockReturnValue(elementBounds);
        element.getBoundingClientRect = mock;

        expect(isVisibleInViewport(element)).toEqual(expected);
    },
);
