import { toUnicode } from "punycode/";

/**
 * Converts punycode labels (`xn--`) in the domain part of an email address to
 * unicode, e.g. `a@xn--5ca.example` becomes `a@å.example`.
 *
 * Browsers differ in how they handle the domain of an `<input type="email">`.
 * Some (e.g. Chromium-based ones) convert it to punycode but the user expects
 * to see what they typed. Labels which cannot be decoded are left untouched.
 *
 * @internal
 */
export function punycodeToUnicode(email: string): string {
    const at = email.lastIndexOf("@");
    if (at === -1) {
        return email;
    }

    const localPart = email.slice(0, at + 1);
    const domain = email
        .slice(at + 1)
        .split(".")
        .map((label) => {
            try {
                return toUnicode(label);
            } catch {
                return label;
            }
        })
        .join(".");

    return localPart + domain;
}
