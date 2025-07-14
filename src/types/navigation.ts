export interface NavItem {
  id: string;
  title: string;
  description?: string;
  link?: string;
  isExternal?: boolean;
  subItems?: NavItem[];
}
