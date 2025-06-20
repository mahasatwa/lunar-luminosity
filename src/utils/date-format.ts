import { format, getDate, getMonth, getYear } from "date-fns";
import { zhCN } from "date-fns/locale";

export function convertToDate(dateString?: string) {
    if (!dateString) return;

    try {
        const date = new Date(dateString);
        // check if is valid date
        if (!isNaN(date.getTime())) return date;
    } catch (e) {
        console.error(e);
    }
}

// Convert from YYYY-MM-DD (contentful date field format) to MM/DD/YYYY
// See https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off
export function reformatDateString(input = "") {
    const dateOnlyPattern = /^(\d{4})-(\d{2})-(\d{2})$/;
    const dateTimePattern = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})Z$/;
    if (!input?.match(dateOnlyPattern) && !input?.match(dateTimePattern)) {
        return input;
    }
    let reformattedDate;
    if (input?.match(dateOnlyPattern)) {
        reformattedDate = input.replace(dateOnlyPattern, "$2/$3/$1");
    } else if (input?.match(dateTimePattern)) {
        reformattedDate = input.replace(dateTimePattern, "$2/$3/$1");
    }
    return reformattedDate;
}

// Return date string formatted as "LLL d, yyyy"
// Example: Jan 1, 2024
export function formatDate(dateString?: string, isChinese = false) {
    if (!dateString) return;
    const date = convertToDate(reformatDateString(dateString));
    const locale = isChinese ? zhCN : undefined;
    const formatOptions = { locale };
    const dateFormat = isChinese ? "yyyy年M月d日" : "LLL d, yyyy";

    return date ? format(date, dateFormat, formatOptions) : undefined;
}

/**
 * HBS Marketing & Communications mandates date range strings do not duplicate
 * month or year when both start and end dates share the same month or year.
 *
 * @param startDateString - Start of a date range
 * @param endDateString - End of a date range
 * @returns The human readable string representation of the date range
 */
export function stringDateRange(
    startDateString: string | undefined,
    endDateString: string | undefined,
    isChinese = false,
): string {
    if (!startDateString || !endDateString) return "";
    const startDate = convertToDate(reformatDateString(startDateString));
    const endDate = convertToDate(reformatDateString(endDateString));

    if (!startDate || !endDate) return "";

    const delimeter = " – ";
    const locale = isChinese ? zhCN : undefined;
    const formatOptions = { locale };
    const dateFormat = isChinese ? "yyyy年M月d日" : "LLL d, yyyy";

    // A range range with different years should display both dates in full.
    // Example: Jan 1, 2023 - Feb 29, 2024
    if (getYear(startDate) !== getYear(endDate)) {
        return (
            format(startDate, dateFormat, formatOptions) +
            delimeter +
            format(endDate, dateFormat, formatOptions)
        );
    }

    // A range with different months in the same year should not duplicate the year.
    // Example: Jan 1 - Feb 29, 2024
    if (getMonth(startDate) !== getMonth(endDate)) {
        const startDateFormat = isChinese ? "yyyy年M月d日" : "LLL d";
        const endDateFormat = isChinese ? "M月d日" : "LLL d, yyyy";
        return (
            format(startDate, startDateFormat, formatOptions) +
            delimeter +
            format(endDate, endDateFormat, formatOptions)
        );
    }

    // A range with different days in the same month should not duplicate the month.
    // Example: Jan 1 - 9, 2024, YYYY年MM月DD — DD日
    if (getDate(startDate) !== getDate(endDate)) {
        const startDateFormat = isChinese ? "yyyy年M月d" : "LLL d";
        const endDateFormat = isChinese ? "d日" : "d, yyyy";
        return (
            format(startDate, startDateFormat, formatOptions) +
            delimeter +
            format(endDate, endDateFormat, formatOptions)
        );
    }

    // It looks like we have the same day in this date range.
    // Example: Jan 1, 2024
    return format(startDate, dateFormat, formatOptions);
}

export function timeSince(date?: Date) {
    if (!date) return "never";
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);

    let interval = seconds / 31536000;

    if (interval > 1) {
        return Math.floor(interval) + " years ago";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + " months ago";
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + " days ago";
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + " hours ago";
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
}
