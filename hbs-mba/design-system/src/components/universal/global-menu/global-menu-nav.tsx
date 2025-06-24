import cn from "clsx";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { SocialMediaLinks } from "design-system/components/primitives/social-media-links/social-media-links";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { SocialMediaIconProps } from "design-system/components/primitives/social-media-links/social-media-icon";
import { Theme } from "design-system/utils/theme";

interface GlobalMenuNavContextProps {
  open: boolean;
  navStack: Array<string>;
  setNavStack: Dispatch<SetStateAction<Array<string>>>;
}

/** Tracks active states for menu */
export const GlobalMenuNavContext = createContext<GlobalMenuNavContextProps>({
  open: false,
  navStack: [],
  setNavStack: () => false,
});

interface GlobalMenuLevelContextProps {
  level: number;
}

/** Tracks current nav level for menu */
export const GlobalMenuLevelContext =
  createContext<GlobalMenuLevelContextProps>({
    level: 0,
  });

export interface GlobalMenuNavMainProps {
  id: string;
  socialLinks?: Array<SocialMediaIconProps>;
  label?: string;
  open?: boolean;
  theme?: Theme;
  numBanners?: 0 | 1 | 2;
}

export type GlobalMenuNavProps = GlobalMenuNavMainProps & {
  children: ReactNode;
};

export function GlobalMenuNav({
  id,
  children,
  socialLinks,
  label = "Global Menu",
  open = false,
  theme = "dark",
  numBanners,
}: GlobalMenuNavProps) {
  if (!Array.isArray(socialLinks)) socialLinks = [];

  const [navStack, setNavStack] = useState<Array<string>>([]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Close all submenus when the menu is closed
    if (!open) {
      setNavStack([]);
    }

    if (!ref.current) {
      return;
    }

    // Prevent scrolling when the menu is open
    if (open) {
      disableBodyScroll(ref.current);
    } else {
      enableBodyScroll(ref.current);
    }
  }, [open]);

  const classname = cn(
    "hbs-global-menu",
    open && "hbs-global-menu--open",
    navStack.length > 0 && `hbs-global-menu--nav-stack-${navStack.length}`,
  );

  return (
    <GlobalMenuNavContext.Provider
      value={{
        open,
        navStack,
        setNavStack,
      }}
    >
      <GlobalMenuLevelContext.Provider
        value={{
          level: 0,
        }}
      >
        <div
          id={id}
          className={classname}
          data-theme={theme}
          ref={ref}
          data-region="uc__global-menu"
        >
          <div className="hbs-global-menu__wrapper">
            <nav
              className={cn(
                "hbs-global-menu__nav",
                numBanners && `hbs-global-menu__nav--banners-${numBanners}`,
              )}
              aria-label={label}
            >
              {children}
              <div className="hbs-global-menu__social">
                <SocialMediaLinks links={socialLinks} />
              </div>
            </nav>
          </div>
        </div>
      </GlobalMenuLevelContext.Provider>
    </GlobalMenuNavContext.Provider>
  );
}
