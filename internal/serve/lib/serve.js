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

/**
 * @param {{ verbose: boolean, silent: boolean }} options
 */
function logger(options) {
    return (req, res, next) => {
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
            if (statusCode >= 400 || options.verbose) {
                console.log("  ", message);
            }
            originalEnd.apply(res, args);
        };

        next();
    };
}

/**
 * @param {string[] | Record<string, string>} folders
 * @returns {Array<[string, string]>}
 */
function normalizeFolders(folders) {
    if (Array.isArray(folders)) {
        return folders.map((it) => {
            if (it.includes(":")) {
                const [folder, url] = it.split(":");
                return [`/${url}`, folder];
            } else {
                return ["/", it];
            }
        });
    } else {
        return Object.entries(folders);
    }
}

/**
 * @param {number} port
 * @param {string[] | Record<string, string>} folders
 * @param {{ verbose: boolean, silent: boolean, onReady: (addr, folders) => void }} options
 * @returns {void}
 */
function serve(port, folders, options) {
    const app = express();

    if (!options.silent) {
        app.use(logger(options));
    }

    const normalized = normalizeFolders(folders);
    for (const [path, folder] of normalized) {
        app.use(path, express.static(folder));
    }

    const server = app.listen(port, "::", () => {
        if (options.onReady) {
            options.onReady(server.address(), normalized);
        }
    });
}

module.exports = { serve };
