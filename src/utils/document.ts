const DOC_EXTENSIONS = [
    ".pdf",
    ".doc",
    ".docx",
    ".xls",
    ".xlsx",
    ".ppt",
    ".pptx",
];

/**
 * A link is a document if its pathname ends with a document extension.
 */
export function isDocumentLink(link: string): boolean {
    if (!link) return false;

    let pathname: string;

    try {
        const url = new URL(link);
        pathname = url.pathname;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
        pathname = link;
    }

    return DOC_EXTENSIONS.some((extension) => pathname.endsWith(extension));
}
