import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Link } from "design-system/components/primitives/link/link";
import {
  MediaAsset,
  MediaAssetProps,
} from "design-system/components/primitives/media-asset/media-asset";
import { FC } from "react";
import { NavigationLink } from "../../local-navigation/local-navigation";

interface FeatureLinkProps extends NavigationLink {
  mediaAsset?: MediaAssetProps;
  featureOptions?: {
    featureCard?: boolean;
    featureMedia?: boolean;
    featureDescription?: boolean;
  };
}

export const FeatureLink: FC<FeatureLinkProps> = ({
  title,
  description,
  url,
  featureOptions,
  mediaAsset,
}) => {
  if (!url) return null;

  const className = "expanded-navigation-feature-item";

  const { featureCard, featureDescription, featureMedia } =
    featureOptions || {};

  const descriptionComponent = featureDescription && description && (
    <p className={`${className}-description`}>{description}</p>
  );

  if (featureCard) {
    return (
      <NavigationMenu.Item asChild>
        <NavigationMenu.Link asChild className={`${className}-link`}>
          <div className={`${className}-card`}>
            <Link href={url} className={`${className}-linkbox`}>
              <div className={`${className}-card__title`}>{title}</div>
            </Link>
            {descriptionComponent}
          </div>
        </NavigationMenu.Link>
      </NavigationMenu.Item>
    );
  }

  if (featureMedia && mediaAsset) {
    return (
      <NavigationMenu.Item asChild>
        <NavigationMenu.Link asChild className={`${className}-link`}>
          <div className={`${className}-media__media`}>
            <MediaAsset {...mediaAsset} />
          </div>
          <div className={`${className}-media__content`}>
            <Link href={url} className={`${className}-linkbox`}>
              <div className={`${className}-media__title`}>{title}</div>
            </Link>
            {descriptionComponent}
          </div>
        </NavigationMenu.Link>
      </NavigationMenu.Item>
    );
  }

  return (
    <NavigationMenu.Item asChild>
      <NavigationMenu.Link asChild className={`${className}-link`}>
        <>
          <Link href={url} className={`${className}__title`}>
            <div className={`${className}__title`}>{title}</div>
          </Link>
          {descriptionComponent}
        </>
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  );
};
