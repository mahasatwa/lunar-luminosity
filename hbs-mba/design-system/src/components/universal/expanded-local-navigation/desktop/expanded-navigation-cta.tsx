import {
  CtaLink,
  CtaLinkProps,
} from "design-system/components/primitives/cta-link/cta-link";
import { FC } from "react";

interface ExpandedNavigationCTAProps extends CtaLinkProps {
  layout: "horizontal" | "vertical";
}

export const ExpandedNavigationCTA: FC<ExpandedNavigationCTAProps> = ({
  layout,
  ...ctaProps
}) => {
  return (
    <div className={`expanded-navigation-cta-${layout}`}>
      <CtaLink {...ctaProps} type="primary-button" isSmall />
    </div>
  );
};
