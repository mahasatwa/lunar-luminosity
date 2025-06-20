/**
 * A link is external if host does not contain hbs.edu.
 */
export function isExternalLink(href: string): boolean {
    if (!href) {
        return false;
    }

    try {
        const url = new URL(href);
        return !url.host.endsWith("hbs.edu");
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return false;
    }
}
