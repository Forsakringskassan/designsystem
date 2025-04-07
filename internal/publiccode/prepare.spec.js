import os from "node:os";
import fs from "node:fs";
import path from "node:path";
import { jest } from "@jest/globals";

const mockGitAdd = jest.fn();

jest.unstable_mockModule("./git-add", () => ({
    gitAdd: mockGitAdd,
}));

const { verifyConditions, prepare } = await import("./index");

const tempdir = fs.realpathSync(os.tmpdir());
const mockfile = path.join(tempdir, "publiccode.yml");
const mockdata = `publiccodeYmlVersion: "0.4"
softwareVersion: 0.0.1
releaseDate: 2001-01-01
dummy: dummy
`;

fs.writeFileSync(mockfile, mockdata);

it("should prepare file with date and version", async () => {
    expect.assertions(2);
    jest.useFakeTimers();
    jest.setSystemTime(new Date("2001-02-03"));

    const contextMock = {
        nextRelease: { version: "1.2.3" },
        logger: {
            log: () => {},
            error: () => {},
        },
        cwd: tempdir,
    };

    verifyConditions({}, contextMock);
    await prepare({}, contextMock);

    const result = fs.readFileSync(mockfile).toString();
    const expectedResult = `publiccodeYmlVersion: "0.4"
softwareVersion: 1.2.3
releaseDate: 2001-02-03
dummy: dummy
`;
    expect(result).toBe(expectedResult);
    expect(mockGitAdd).toHaveBeenCalled();
});
