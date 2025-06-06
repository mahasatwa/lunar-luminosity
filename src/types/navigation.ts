// src/types/navigation.d.ts

export interface NavItem {
  id: string; 
  title: string;
  link?: string; 
  path?: string; 
  subItems?: NavItem[];

  heading?: string;
  description?: string;
  featured?: {
    title: string;
    text: string;
    image: string;
    link: string;
  };
  quote?: {
    text: string;
    author: string;
  };

  isExternal?: boolean; 
  // Tambahkan properti lain seperti 'icon' jika diperlukan
}

export interface QuickLink {
  title: string;
  link: string;
  isExternal?: boolean;
}