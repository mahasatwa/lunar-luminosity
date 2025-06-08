// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import icon from "astro-icon";
import compress from "astro-compress";

import vercel from "@astrojs/vercel/serverless";

// Add path resolution if needed
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Toggle based on your needs
const hasExternalScripts = true;

export default defineConfig({
  site: "https://www.stiedwimulya.ac.id",
  integrations: [
    react({
      include: ["**/components/**/*.{jsx,tsx}"],
    }),
    tailwind({
      applyBaseStyles: false,
    }),

    sitemap(),
    mdx(),
    icon({
      include: {
        tabler: ["*"], // Add other icon sets as needed
      },
    }),
    hasExternalScripts &&
      partytown({
        config: { forward: ["dataLayer.push"] },
      }),
    compress({
      CSS: true,
      HTML: true,
      JavaScript: true,
    }),
  ].filter(Boolean),

  // Image handling
  image: {
    domains: ["res.cloudinary.com"], // Add Cloudinary domain
    // Re-adding Cloudinary image service configuration
    service: {
      entrypoint: "@astrojs/cloudinary/image-service", // Specify the Cloudinary image service entrypoint
      config: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME, // Pass config options here
      },
    },
  },

  // Markdown processing
  markdown: {
    // remarkPlugins: [/* your plugins */],
    // rehypePlugins: [/* your plugins */],
  },

  // Vite configuration
  vite: {
    server: {
      allowedHosts:
        process.env.NODE_ENV === "production"
          ? ["stiedwimulya.ac.id"]
          : ["he.stiedwimulya.ac.id"], // Keep your existing allowedHosts logic

      headers: {
        "Content-Security-Policy":
          process.env.NODE_ENV === "production"
            ? // Production CSP (example - adjust as needed for your actual production setup)
              "default-src 'self'; img-src 'self' res.cloudinary.com; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'"
            : // Development CSP (example - adjust as needed for your local dev environment)
              "default-src 'self'; img-src 'self' http://localhost:4321 res.cloudinary.com; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'",
      },
    },
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "./src"),
      },
    },
    css: {
      transformer: "postcss",
      devSourcemap: true,
      // Add if using SCSS
      preprocessorOptions: {
        scss: {
          additionalData: `@import "src/styles/variables.scss";`,
        },
      },
    },
  },

  output: "server",
  adapter: vercel({
    imageService: true,
    webAnalytics: {
      enabled: true,
    },
  }),
  build: {
    inlineStylesheets: "auto",
  },
});
