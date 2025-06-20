import { useContext } from "react";
import { GlobalMenuLevelContext } from "./global-menu-nav";
import { LinkProps, Link } from "design-system/components/primitives/link/link";
import { styleTransitionDelay } from "../../../utils/style-transition-delay";

interface GlobalMenuLinkProps extends LinkProps {
  index: number;
  isVisible?: boolean;
}

export function GlobalMenuLink({
  children,
  index,
  isVisible,
  ...props
}: GlobalMenuLinkProps) {
  const { level } = useContext(GlobalMenuLevelContext);

  const classPrefix =
    level === 0 ? "hbs-global-menu__" : "hbs-global-menu__submenu-";

  return (
    <Link className={`${classPrefix}link`} {...props}>
      <span
        className={`${classPrefix}link-text`}
        style={styleTransitionDelay({ index, isVisible })}
      >
        {children}
      </span>
    </Link>
  );
}
