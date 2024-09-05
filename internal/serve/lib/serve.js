/* eslint-disable no-console -- expected to log */
const dayjs = require("dayjs");
const express = require("express");
const kleur = require("kleur");

function statusColor(text, statusCode) {
    if (statusCode >= 200 && statusCode < 300) {
        return kleur.green(text);
    } else if (statusCode >= 400) {
        return kleur.red(text);
    } else {
        return kleur.cyan(text);
    }
}

function logger(req, res, next) {
    const originalEnd = res.end;
    const ip = req.socket.remoteAddress;
    const time = dayjs().format("YYYY-MM-DD HH:mm:ss");

    res.end = function (...args) {
        const { method, url } = req;
        const { statusCode } = res;
        const userAgent = `(${req.header("user-agent")})`;
        const separator = " - ";
        const request = `${method} ${url} ${statusCode}`;
        const message = [
            ip,
            time,
            statusColor(request, statusCode),
            userAgent,
        ].join(separator);
        console.log("  ", message);
        originalEnd.apply(res, args);
    };

    next();
}

/**
 * @param {number} port
 * @param {string[] | Record<string, string>} folders
 * @param {{ verbose: boolean, onReady: (addr) => void }} options
 * @returns {void}
 */
function serve(port, folders, options) {
    const app = express();

    if (options.verbose) {
        app.use(logger);
    }

    if (Array.isArray(folders)) {
        folders = Object.fromEntries(folders.map((it) => ["/", it]));
    }

    for (const [path, folder] of Object.entries(folders)) {
        app.use(path, express.static(folder));
    }

    const server = app.listen(port, "::", () => {
        if (options.onReady) {
            options.onReady(server.address(), folders);
        }
    });
}

module.exports = { serve };
