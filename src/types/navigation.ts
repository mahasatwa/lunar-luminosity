// src/types/navigation.d.ts

// Tipe UserRole dihapus karena tidak lagi digunakan.

export interface NavItem {
  id: string; // ID unik untuk routing/tracking
  title: string;
  link?: string; // Jika ini adalah link langsung
  path?: string; // Path relatif untuk link internal (bisa digunakan untuk routing)
  subItems?: NavItem[];
  // Properti 'roles' telah dihapus.

  // Properti untuk konten kaya (rich content) di MegaMenu
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

  isExternal?: boolean; // Untuk menandai link eksternal seperti portal
  // Tambahkan properti lain seperti 'icon' jika diperlukan
}

export interface QuickLink {
  title: string;
  link: string;
  isExternal?: boolean;
}