import SiteHeader from "./site-header/site-header/SiteHeader";
import type { NavItem, QuickLink } from "@/types/navigation";

interface InteractiveHeaderProps {
  logoUrl: string;
  wordmarkUrl: string;
  navigationData: NavItem[];
  quickLinksData: QuickLink[];
}

const InteractiveHeader: React.FC<InteractiveHeaderProps> = (props) => {
  return <SiteHeader {...props} />;
};

export default InteractiveHeader;
