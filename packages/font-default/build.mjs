import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

await fs.rm("fonts", { recursive: true, force: true });
await fs.mkdir("fonts");

const variants = [
    "Inter-Bold",
    "Inter-Light",
    "Inter-Medium",
    "Inter-Regular",
    "Inter-SemiBold",
];

await Promise.all(
    variants.map((variant) => {
        const filename = `${variant}.woff2`;
        const src = fileURLToPath(
            import.meta.resolve(`inter-ui/web/${filename}`),
        );
        const dst = path.join("fonts", filename);
        return fs.cp(src, dst);
    }),
);
