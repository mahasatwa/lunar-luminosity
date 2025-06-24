import "./expanded-desktop-navigation.scss";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Icon } from "design-system/components/icons/icon";
import { Fragment, useState } from "react";
import { ExpandedLocalNavigationProps } from "../local/expanded-local-navigation";
import { HorizontalLayout } from "./horizontal-layout";
import { VerticalLayout } from "./vertical-layout";

/**
 * To facilitate future debugging:
 * Add `const value = items[0]?.title`
 * Add `value={value}` to the Root component
 * Add `value={title}` to the first Item component
 * This way the menu is rendered open and keeps open after inspection.
 */

export function ExpandedDesktopNavigation({
  expandedNavigationItems,
}: ExpandedLocalNavigationProps) {
  const [open, setOpen] = useState("");
  const items = expandedNavigationItems || [];

  return (
    <NavigationMenu.Root value={open} onValueChange={setOpen}>
      <NavigationMenu.List asChild>
        <ul className="expanded-navigation-menu">
          {items.map(
            ({ title, layoutType, pageGroups, cta, singleTopLink }, index) => (
              <Fragment key={title + index}>
                <NavigationMenu.Item asChild>
                  <li className="expanded-navigation__item">
                    <NavigationMenu.Trigger
                      asChild
                      /*
                      When the keyboard navigation leaves the content and
                      goes to the next menu, the dropdown closes.
                      This is "onFocus" and not "onBlur" because "onBlur"
                      triggers when the focus leaves the menu button to the component
                      */
                      onFocus={() => setOpen("")}
                    >
                      <NavigationMenu.Item asChild>
                        <button className="expanded-navigation__item-link">
                          {title}
                          <Icon
                            name="caret"
                            className="expanded-navigation__item-caret"
                            aria-hidden
                          />
                        </button>
                      </NavigationMenu.Item>
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content>
                      {pageGroups &&
                        pageGroups.length > 0 &&
                        (layoutType === "horizontal" ? (
                          <HorizontalLayout
                            singleTopLink={singleTopLink}
                            pageGroups={pageGroups}
                            cta={cta}
                          />
                        ) : (
                          <VerticalLayout
                            singleTopLink={singleTopLink}
                            pageGroups={pageGroups}
                            cta={cta}
                          />
                        ))}
                    </NavigationMenu.Content>
                  </li>
                </NavigationMenu.Item>
              </Fragment>
            ),
          )}
        </ul>
      </NavigationMenu.List>
      <div className="expanded-navigation--viewport">
        <NavigationMenu.Viewport />
      </div>
    </NavigationMenu.Root>
  );
}
