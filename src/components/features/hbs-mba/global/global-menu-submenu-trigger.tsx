import { MouseEvent, forwardRef, useContext, useMemo } from "react";
import {
  GlobalMenuLevelContext,
  GlobalMenuNavContext,
} from "./global-menu-nav";
import { GlobalMenuItemContext } from "./global-menu-item";
import { toggleNavStack } from "./toggle-nav-stack";
import { Icon } from "design-system/components/icons/icon";
import { styleTransitionDelay } from "design-system/utils/style-transition-delay";

interface GlobalMenuSubmenuTriggerProps {
  index: number;
  label: string;
  isVisible?: boolean;
}

export const GlobalMenuSubmenuTrigger = forwardRef<
  HTMLButtonElement,
  GlobalMenuSubmenuTriggerProps
>(({ label, index, isVisible }, ref) => {
  const context = useContext(GlobalMenuNavContext);
  const { id: controls } = useContext(GlobalMenuItemContext);
  const { level } = useContext(GlobalMenuLevelContext);

  const isExpanded = useMemo(
    () => context.navStack.includes(controls),
    [controls, context.navStack]
  );

  const openSubmenu = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    context.setNavStack((prevStack) =>
      toggleNavStack(controls, level, prevStack)
    );
  };

  const classPrefix =
    level > 0 ? "hbs-global-menu__submenu-" : "hbs-global-menu__";

  let lastWord;
  let firstWords;
  if (typeof label === "string") {
    const words = label.trim().split(" ");
    lastWord = words.pop();
    firstWords = words.join(" ");
  }

  const withSplitWords = (
    <span className={`${classPrefix}bg`}>
      {firstWords}{" "}
      <span className={`${classPrefix}last-word`}>
        <span className={`${classPrefix}bg`}>{lastWord}</span>
        <Icon name="arrowOpen" className={`${classPrefix}trigger-icon`} />
      </span>
    </span>
  );

  return (
    <button
      ref={ref}
      className={`${classPrefix}trigger`}
      onClick={openSubmenu}
      aria-controls={controls}
      aria-expanded={isExpanded}
    >
      <div
        className={`${classPrefix}trigger-text`}
        style={styleTransitionDelay({ index, isVisible })}
      >
        {withSplitWords}
      </div>
    </button>
  );
});
