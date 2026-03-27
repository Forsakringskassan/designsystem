import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

const tempdir = fs.realpathSync(os.tmpdir());
const mockfile = path.join(tempdir, "publiccode.yml");
const mockdata = `publiccodeYmlVersion: "0.4"
softwareVersion: 0.0.1
releaseDate: 2001-01-01
dummy: dummy
`;

fs.writeFileSync(mockfile, mockdata);

test("should prepare file with date and version", async (t) => {
    const gitAdd = t.mock.fn();

    t.mock.module("./git-add.js", {
        namedExports: { gitAdd },
    });
    t.mock.timers.enable({ apis: ["Date"], now: new Date("2001-02-03") });

    const { verifyConditions, prepare } = await import("./index.js");

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
    t.assert.deepStrictEqual(result, expectedResult);
    t.assert.strictEqual(gitAdd.mock.callCount(), 1);
});
