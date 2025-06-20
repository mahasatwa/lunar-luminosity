export const KEYCODES = {
    GRID: "0",
    ESCAPE: 27,
    LEFT_ARROW: 37,
    RIGHT_ARROW: 39,
    ENTER: 13,
    SPACE: 32,
} as const;

export const BREAKPOINTS = {
    MOBILE: 300,
    TABLET: 600,
    DESKTOP: 1024,
    DESKTOP_LG: 1200,
    DESKTOP_XL: 1340,
} as const;

export const KALTURA_PARTNER_ID = 1423662;
export const KALTURA_UI_CONF_ID = 24701771;
export const KALTURA_SCRIPT_SRC = `https://cdnapisec.kaltura.com/p/${KALTURA_PARTNER_ID}/sp/${KALTURA_PARTNER_ID}00/embedIframeJs/uiconf_id/${KALTURA_UI_CONF_ID}/partner_id/${KALTURA_PARTNER_ID}`;
