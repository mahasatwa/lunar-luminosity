# Atomic Design Style Mapping

## Introduction

This document serves as a mapping of Atomic Design components used within the STIE Dwimulya website project to the desired visual and interactive style guidelines. The goal is to ensure consistency across the user interface and effectively reflect the brand identity, which is defined by principles of being modern, minimalist, professional, future-aware, and inclusive, embodying the spirit of 'kampus perubahan'. Special attention should be given to implementing a sense of forward-thinking dynamism through subtle animations and interactions, and leveraging Swiss-style typography for clarity and a modern, structured feel. This mapping will guide designers and developers in applying styles and interactions consistently across all levels of the design system.

## Atoms

### src/components/atoms/BrandingText.astro
- Review and apply brand color palette for text.
- Use approved brand font and text styles (weight, size, line height) based on Swiss typography principles for clarity and professionalism.
- Ensure sufficient padding and minimal decorative elements.
- Check for color contrast ratios for accessibility.

### src/components/atoms/Button.astro
- Apply brand color for background and text based on button type (primary, secondary, etc.).
- Use approved brand font and text styles based on Swiss typography principles.
- Design hover/focus/active states that are subtle yet clear, reflecting a modern feel.
- Consider a simple, quick micro-interaction on click/tap to reinforce responsiveness.
- Ensure sufficient padding and consistent button sizing based on a minimalist grid.
- Check for color contrast ratios for accessibility.

### src/components/atoms/Icon.astro
- Ensure icons use approved brand colors or follow a consistent color scheme.
- Icons should be clean and simple (minimalist).
- Ensure icons are appropriately sized and have sufficient surrounding space.
- Consider subtle animations on hover or interaction if they serve a purpose (e.g., drawing attention).
- Ensure icons are accessible (e.g., have appropriate ARIA labels if interactive).

### src/components/atoms/NavLink.astro
- Apply brand color for text and potentially an indicator for the active state.
- Use approved brand font and text styles based on Swiss typography principles.
- Design hover/focus/active states that are subtle yet clear, consistent with the button states.
- Ensure sufficient padding around the link text.
- Consider a subtle underline or background change on hover/focus.
- Check for color contrast ratios for accessibility.

### src/components/atoms/button/Button.astro
- *Note: This appears to be a duplicate or alternative to src/components/atoms/Button.astro. Consolidate or apply guidelines consistently.*
- Apply brand color for background and text based on button type.
- Use approved brand font and text styles based on Swiss typography principles.
- Design hover/focus/active states (subtle, clear).
- Consider a simple micro-interaction on click/tap.
- Ensure sufficient padding and consistent sizing.
- Check for color contrast ratios for accessibility.

### src/components/atoms/buttons/Button.astro
- *Note: This appears to be a duplicate or alternative to src/components/atoms/Button.astro. Consolidate or apply guidelines consistently.*
- Apply brand color for background and text based on button type.
- Use approved brand font and text styles based on Swiss typography principles.
- Design hover/focus/active states (subtle, clear).
- Consider a simple micro-interaction on click/tap.
- Ensure sufficient padding and consistent sizing.
- Check for color contrast ratios for accessibility.

### src/components/atoms/heading/Heading.astro
- *Note: This appears to be an alternative to src/components/atoms/typography/Heading.astro. Consolidate or apply guidelines consistently.*
- Apply brand font and text styles (font-family, weight, size, line-height, margin) based on a clear typographic hierarchy aligned with Swiss principles.
- Use brand colors where appropriate for emphasis.
- Ensure sufficient vertical spacing around headings.
- Avoid excessive styling; maintain a clean and professional look.
- Check for color contrast ratios for accessibility.

### src/components/atoms/icons/Icon.astro
- *Note: This appears to be a duplicate or alternative to src/components/atoms/Icon.astro. Consolidate or apply guidelines consistently.*
- Ensure icons use approved brand colors or follow a consistent color scheme.
- Icons should be clean and simple (minimalist).
- Ensure icons are appropriately sized and have sufficient surrounding space.
- Consider subtle animations on hover or interaction if purposeful.
- Ensure icons are accessible.

### src/components/atoms/logo/Logo.astro
- Use the official STIE Dwimulya logo and wordmark assets.
- Ensure correct usage, size, and clear space according to brand guidelines.
- Avoid applying excessive filters or effects.
- Ensure high-quality image/SVG usage.

### src/components/atoms/typography/Heading.astro
- *Note: This appears to be an alternative to src/components/atoms/heading/Heading.astro. Consolidate or apply guidelines consistently.*
- Apply brand font and text styles (font-family, weight, size, line-height, margin) based on a clear typographic hierarchy aligned with Swiss principles.
- Use brand colors where appropriate for emphasis.
- Ensure sufficient vertical spacing around headings.
- Avoid excessive styling; maintain a clean and professional look.
- Check for color contrast ratios for accessibility.

## Molecules

### src/components/molecules/ControlButtons.tsx
- Ensure the visual style of the buttons themselves aligns with the Atom button guidelines (color, typography, states).
- Apply consistent spacing between the buttons within the molecule.
- Consider subtle animations for the buttons appearing or changing state.
- Ensure the molecule is responsive and functions well in different layouts.

### src/components/molecules/LocalNavigation.astro
- Design the layout and spacing to be clean and minimalist, adhering to Swiss-style principles.
- Use brand typography and colors for the navigation links (NavLink Atom).
- Ensure hover/active states for links are clear and consistent.
- Consider subtle transitions or animations for submenu display or active item highlighting.
- Ensure responsiveness and clear presentation on mobile devices.
- Implement accessibility features (e.g., keyboard navigation).

### src/components/molecules/LogoWithBranding.astro
- Ensure the Logo Atom is used correctly according to brand guidelines.
- Apply brand typography and color to the accompanying branding text (BrandingText Atom).
- Maintain appropriate spacing and alignment between the logo and text.
- Ensure the molecule scales correctly on different screen sizes.

### src/components/molecules/alert/Alert.astro
- Use brand colors for alert backgrounds and text based on alert type (success, warning, error).
- Apply clean typography and minimalist design (limited borders/shadows).
- Ensure alert icons (Icon Atom) are consistent with the style guide.
- Consider subtle animations for the alert appearing or disappearing.
- Ensure sufficient padding and readable text.
- Check for color contrast ratios for accessibility.

### src/components/molecules/card/Card.astro
- Design card layout with sufficient internal padding and spacing, emphasizing a minimalist look.
- Use subtle borders or shadows that fit the professional style.
- Apply brand typography and colors to card content (headings, text, buttons, links).
- Ensure images or media within the card are well-integrated visually.
- Consider hover effects or subtle transitions for the entire card to indicate interactivity.
- Ensure responsiveness and clean stacking/grid layout on different devices.

### src/components/molecules/event-feed-tease/EventFeedTease.astro
- Structure the information clearly using typographic hierarchy (Heading Atom).
- Apply brand typography and colors.
- Ensure consistent formatting for event details (date, time, location).
- Consider subtle visual cues or micro-interactions to highlight upcoming events.
- Ensure the layout is clean and easy to scan.

### src/components/molecules/media-asset-row/MediaAssetRow.astro
- Design the layout for clear presentation of media assets (images, videos).
- Ensure consistent spacing between media items.
- If applicable, ensure media player controls align with the minimalist style.
- Consider subtle animations when assets load or are interacted with.
- Ensure responsiveness for displaying assets on different screen sizes.

### src/components/molecules/nav-link/NavLink.astro
- *Note: This appears to be a duplicate or alternative to src/components/atoms/NavLink.astro. Consolidate or apply guidelines consistently.*
- Apply brand color for text and active state indicator.
- Use approved brand font and text styles (Swiss principles).
- Design hover/focus/active states (subtle, clear, consistent).
- Ensure sufficient padding.
- Consider a subtle underline or background change on hover/focus.
- Check for color contrast ratios for accessibility.

### src/components/molecules/navigation-bar/NavigationBar.astro
- Design the overall structure and spacing according to minimalist and Swiss-style grid principles.
- Ensure integrated NavLink Atoms follow their style guidelines.
- Implement sticky or fixed positioning with a subtle transition if desired.
- Design a clear and intuitive mobile navigation pattern (e.g., hamburger menu with smooth transition).
- Ensure accessibility for navigation (keyboard, screen reader).

### src/components/molecules/program-card/ProgramCard.astro
- Combine elements (image, text, heading, link/button) with clean spacing and layout.
- Apply card style guidelines (borders, shadows, padding).
- Use brand typography and colors for all text elements.
- Ensure the call to action (link/button) is clear and follows Atom guidelines.
- Consider hover effects or subtle animations on the card.
- Ensure responsiveness within grid layouts.

### src/components/molecules/search-box/SearchBox.astro
- Design input field and button (Button Atom) with a clean, minimalist style.
- Use subtle borders or focus indicators.
- Apply brand typography to input text and placeholder.
- Consider a subtle transition for the search box appearing or expanding.
- Ensure accessibility for form input.

### src/components/molecules/statistic-item/StatisticItem.astro
- Clearly present the number and label using distinct typographic styles based on brand guidelines and Swiss principles.
- Use brand colors for numbers or icons (Icon Atom) if applicable.
- Ensure sufficient spacing between the number and label.
- Consider a simple animation for the number count-up if used (aware masa depan feel).

### src/components/molecules/statistic-topper/StatisticTopper.astro
- Arrange multiple StatisticItem Molecules with consistent spacing and alignment.
- Ensure the overall layout is clean and balances visual weight.
- Apply any background or container styling according to minimalist principles.
- Ensure responsiveness for displaying statistics on different screen sizes.

### src/components/molecules/testimonial-card/TestimonialCard.astro
- Design the card layout to clearly present the quote, author, and image/avatar.
- Use subtle styling for the quote (e.g., italics, different color) that fits the brand.
- Apply brand typography for all text elements.
- Ensure image/avatar is presented cleanly.
- Consider subtle animations or transitions for the card appearing or in a carousel.
- Ensure responsiveness.

## Organisms

### src/components/organisms/AccordionFAQ.astro
- Define the structure with clear visual separation between items, using minimalist lines or subtle borders.
- Apply brand typography for questions (headings) and answers (body text).
- Design the expand/collapse interaction with a smooth, subtle animation or transition (modern, minimalist).
- Ensure the interactive element (header) has a clear hover/focus state.
- Use Icon Atoms for indicators (e.g., plus/minus) that align with the brand style.
- Ensure accessibility for keyboard navigation and screen readers.

### src/components/organisms/CardGrid.astro
- Define the grid structure with consistent spacing (gutters) between cards, adhering to minimalist layout principles.
- Ensure the individual Card Molecules within the grid follow their style guidelines.
- Ensure responsiveness, allowing the grid to adapt gracefully to different screen sizes (changing column counts).
- Consider a subtle staggered entrance animation for the cards when they come into view (optional, for future-aware feel).

### src/components/organisms/Columns.astro
- Define the column structure and spacing for different screen sizes.
- Ensure content within columns (Atoms, Molecules, other Organisms) adheres to their respective style guidelines.
- Maintain sufficient internal padding within columns.
- Ensure responsiveness, allowing columns to stack or rearrange on smaller screens.
- Use this organism to create clean and structured layouts, leveraging Swiss-style principles of grid and alignment.

### src/components/organisms/ContentList.astro
- Define the list item styling with clear visual separation, using minimalist dividers or spacing.
- Apply brand typography to list item content (headings, text, metadata).
- If list items are interactive, design subtle hover/focus states.
- Ensure consistent formatting for recurring elements within the list items.
- Consider subtle animations for list items appearing.
- Ensure responsiveness for different list lengths and content types.

### src/components/organisms/Courses.astro
- Design the layout to present course information clearly, perhaps using a grid or list structure.
- Apply brand typography and colors to course titles, descriptions, and details.
- Ensure consistent formatting for course attributes (e.g., credits, duration).
- If interactive (e.g., course filtering/sorting), design controls with a minimalist style.
- Consider using AccordionFAQ or Card components for detailed course information display.
- Ensure responsiveness for different course listing styles.

### src/components/organisms/EventSchedule.astro
- Design a clear and readable layout for event listings, possibly using a timeline or calendar-like structure.
- Apply brand typography and colors.
- Ensure consistent formatting for event details (date, time, location, description).
- Highlight upcoming or featured events visually.
- Consider subtle animations or transitions for navigating between dates or filtering events.
- Ensure responsiveness for displaying schedules on different screen sizes.

### src/components/organisms/EventsGrid.astro
- Use a grid structure (similar to CardGrid) to display event items.
- Ensure individual event items (potentially a custom Molecule) follow style guidelines for cleanliness and branding.
- Apply consistent spacing.
- Consider subtle animations for events appearing or filtering.
- Ensure responsiveness.

### src/components/organisms/FeaturedPrograms.astro
- Design a layout to highlight specific academic programs, potentially using ProgramCard Molecules.
- Ensure visual hierarchy clearly distinguishes featured programs.
- Apply brand typography and colors.
- Consider a carousel or grid layout with subtle transitions or animations.
- Ensure call-to-action elements are prominent and follow button/link guidelines.
- Ensure responsiveness.

### src/components/organisms/FeaturedStories.astro
- Design a visually engaging layout for highlighting key news or stories, potentially using a slider or grid.
- Ensure individual story items (potentially a custom Molecule/Organism) align with style guidelines.
- Apply brand typography and colors.
- Consider using GSAP for smooth transitions in a slider or complex entrance animations.
- Ensure clear navigation for sliders (ControlButtons Molecule).
- Ensure responsiveness.

### src/components/organisms/Gallery.astro
- Design the layout for displaying images or media in a clean grid or mosaic.
- Ensure sufficient spacing between images.
- Implement a lightbox or modal for viewing full-size images with a smooth transition.
- Consider subtle hover effects on images.
- Ensure responsiveness for different gallery layouts on various devices.

### src/components/organisms/GalleryCarousel.astro
- Design the carousel structure and navigation (ControlButtons Molecule or custom).
- Ensure individual gallery items (images/media) are presented cleanly.
- Implement smooth transitions between slides using CSS transitions or GSAP for more control and a polished feel.
- Ensure responsiveness for different screen sizes.
- Consider autoplay with pause-on-hover for a subtle dynamic touch.

### src/components/organisms/Gazette.astro
- Design a layout for presenting a collection of news or updates in a structured format (e.g., list, grid, or magazine-style).
- Apply brand typography and colors.
- Ensure visual hierarchy guides the user through the content.
- Consider subtle animations for loading more items or filtering.
- Ensure responsiveness.

### src/components/organisms/GlobalNav.astro
- Design the main navigation bar with a clean, minimalist aesthetic, adhering to Swiss-style principles for clarity and structure.
- Ensure NavLink and LogoWithBranding Molecules are integrated seamlessly and follow their style guidelines.
- Implement dropdown menus or overlays with smooth transitions (modern feel).
- Design the mobile navigation toggle and overlay with smooth animations.
- Ensure sticky or fixed header behavior has a subtle transition if used.
- Prioritize accessibility for keyboard navigation and screen readers.
- This organism is key for conveying professionalism and ease of use.

### src/components/organisms/GridLists.astro
- Combine grid and list layouts within one organism.
- Ensure consistency in spacing and typography across both list and grid items.
- Apply style guidelines from CardGrid and ContentList Organisms where applicable.
- Ensure responsiveness, allowing layouts to adapt.

### src/components/organisms/Hero.astro
- Design the layout to be visually impactful yet clean, using large imagery or video with clear typography overlay.
- Apply brand typography for the main title and subtitle (Heading and BrandingText Atoms).
- Ensure sufficient contrast between text and background image/video.
- Consider subtle parallax scrolling or a smooth fade-in animation for the hero content (future-aware feel).
- Ensure the hero scales well on different screen sizes.

### src/components/organisms/HeroSplit.astro
- Divide the hero area into distinct sections (e.g., image on one side, text on the other) with clear visual separation.
- Apply brand typography and colors.
- Ensure images or media fit the minimalist aesthetic.
- Consider subtle animations for elements entering from different sides on load (GSAP potential).
- Ensure responsiveness, allowing the split layout to adapt to a single column on smaller screens.

### src/components/organisms/HeroStatement.astro
- Focus on presenting a key message or quote prominently.
- Use large, impactful typography that aligns with Swiss principles for emphasis.
- Apply brand colors strategically.
- Ensure ample white space around the statement (minimalist).
- Consider a subtle fade-in or typewriter-like animation for the text to draw attention (optional).

### src/components/organisms/IconTextCluster.astro
- Arrange Icon Atoms and associated text (potentially using BrandingText or simple paragraphs) in a clean cluster.
- Ensure consistent spacing and alignment between icons and text blocks.
- Use brand colors for icons and typography.
- Consider a grid or flexible layout that adapts responsively.
- Ensure the combination is easy to scan and understand.

### src/components/organisms/InlineStat.astro
- Present a single statistic or key number prominently within a flow of text or content.
- Use distinct typography (Heading Atom or specific style) for the number and a clear label.
- Apply brand colors for emphasis on the number.
- Ensure sufficient spacing around the inline stat.
- Consider a subtle count-up animation for the number if appropriate.

### src/components/organisms/Interstitial.astro
- Design a full-width or prominent section to break up content, often with a background image or color and a key message or call to action.
- Use strong, clear typography (Heading Atom).
- Apply brand colors.
- Ensure sufficient padding and a clear focal point.
- Consider a subtle background animation or parallax effect.
- Ensure responsiveness.

### src/components/organisms/LatestPosts.astro
- Present a list or grid of recent blog posts or news articles.
- Use components like Card or ContentList for individual post items.
- Apply consistent spacing and typography.
- Consider subtle animations for new posts appearing.
- Ensure clear links to read more.
- Ensure responsiveness.

### src/components/organisms/LeadForm.astro
- Design the form layout with clean input fields (Atoms) and clear labels.
- Use subtle borders and focus states for inputs.
- Apply brand typography to labels, placeholders, and button text.
- Ensure clear validation messages with appropriate brand colors (Alert Molecule).
- Consider a subtle animation on form submission success or error.
- Ensure responsiveness and accessibility for form elements.

### src/components/organisms/MediaCarousel.astro
- Similar to GalleryCarousel, design the structure and navigation.
- Ensure integrated media assets (images, videos) are presented cleanly.
- Implement smooth transitions using CSS or GSAP.
- Ensure responsiveness.

### src/components/organisms/MediaText.astro
- Arrange a media element (image or video) alongside a block of text.
- Define the layout for different screen sizes (e.g., side-by-side on desktop, stacked on mobile).
- Ensure media and text spacing is clean and balanced.
- Apply brand typography to the text block.
- Consider subtle animations for the media or text block appearing.
- Ensure responsiveness.

### src/components/organisms/ProgramAbout.astro
- Design a section that provides an overview or key details about an academic program.
- Use a combination of headings, text blocks, lists (ContentList), and possibly statistics (Statistics Organism) or testimonials (Testimonials Organism).
- Apply consistent brand typography and colors.
- Ensure visual hierarchy guides the user through program information.
- Consider using accordions or tabs for organizing detailed information with smooth transitions.
- Ensure responsiveness.

### src/components/organisms/Quote.astro
- Present a testimonial or significant quote prominently.
- Use distinct typography (perhaps italicized or a different weight/color) for the quote itself.
- Clearly identify the source/author with brand typography.
- Use sufficient white space around the quote.
- Consider subtle visual cues like quotation marks styled to fit the brand.
- Ensure responsiveness.

### src/components/organisms/SiteFooter.astro
- Design the layout for multiple sections (navigation links, contact info, social media, copyright).
- Apply brand typography and colors for all text and links (NavLink Atom).
- Ensure social media icons (Icon Atom) are consistent with the style guide.
- Ensure consistent spacing and alignment across columns/rows.
- Design a clean, minimalist look with clear separation between sections.
- Ensure accessibility for navigation links.

### src/components/organisms/SiteHeader.astro
- *Note: This might overlap with GlobalNav. Prioritize one or ensure clear responsibilities.*
- Design the header structure including logo area (LogoWithBranding Molecule), main navigation (GlobalNav or NavLink Molecules), and potentially utility links or search (SearchBox Molecule).
- Implement sticky or fixed behavior with subtle transitions.
- Design the mobile header and navigation toggle with smooth animations.
- Apply brand colors and typography.
- Ensure accessibility.
- This organism, along with GlobalNav, is crucial for establishing the initial visual impression.

### src/components/organisms/SplitHero.astro
- *Note: This appears to be a duplicate or alternative to src/components/organisms/HeroSplit.astro. Consolidate or apply guidelines consistently.*
- Divide the hero area into distinct sections (e.g., image on one side, text on the other).
- Apply brand typography and colors.
- Ensure images or media fit the minimalist aesthetic.
- Consider subtle animations for elements entering from different sides on load (GSAP potential).
- Ensure responsiveness, allowing the split layout to adapt.

### src/components/organisms/Statistics.astro
- Present a collection of key statistics or numbers (StatisticItem or StatisticTopper Molecules).
- Arrange the statistics in a clear layout (grid or list).
- Ensure consistent spacing and alignment.
- Consider animating the numbers counting up when they become visible (aware masa depan, engaging).
- Apply brand typography and colors.
- Ensure responsiveness.

### src/components/organisms/Testimonials.astro
- Present a collection of testimonial quotes, potentially using TestimonialCard Molecules.
- Arrange testimonials in a grid, list, or carousel.
- If using a carousel, implement smooth transitions (CSS or GSAP).
- Apply consistent spacing.
- Ensure clear attribution for each testimonial.
- Consider subtle animations for testimonials appearing or transitioning.
- Ensure responsiveness.

## Templates

### src/components/templates/ArticlePageTemplate.astro
- Define the overall page structure for articles (e.g., header, hero/title section, main content area, sidebar, footer).
- Ensure consistent application of spacing and layout across different sections (Organisms like Hero, ContentList, LatestPosts).
- Apply typographic hierarchy for article content (headings, paragraphs, lists, blockquotes) based on Swiss principles for readability and structure.
- Ensure images, videos, or other media embedded within the article content are styled consistently and fit the minimalist look.
- Consider subtle animations for elements (like images or sidebars) appearing as the user scrolls.
- Ensure all interactive elements (links, buttons) within the article follow their Atom/Molecule guidelines.
- Prioritize readability and focus on the content.
- Ensure the template is fully responsive and provides an optimal reading experience on all devices.
- Reflect the 'kampus perubahan' identity through a clean, modern presentation of information.

### src/components/templates/HomepageTemplate.astro
- Define the overall layout and flow of the homepage, arranging key Organisms (Hero, FeaturedPrograms, LatestPosts, Testimonials, etc.) in a logical and visually appealing sequence.
- Ensure consistent application of spacing and visual separation between different sections.
- Use animations and transitions strategically to guide the user through the page, highlight key content, and create a dynamic but not overwhelming experience. Consider GSAP for orchestrating sequences of animations.
- Ensure all interactive elements across the homepage function cohesively and follow their design guidelines.
- Apply typographic hierarchy consistently across all headings and text blocks from various Organisms.
- Ensure the template is fully responsive and provides an optimal experience on all devices, with smooth transitions between layouts.
- This template is crucial for establishing the initial brand impression and should strongly reflect the modern, aware masa depan, and 'kampus perubahan' identity through layout, visuals, and subtle motion.

### src/components/templates/ProgramDetailTemplate.astro
- Define the page structure for presenting detailed information about a specific academic program (e.g., header, program hero, overview, curriculum, faculty, career prospects, testimonials, contact/apply section).
- Arrange relevant Organisms (ProgramAbout, Courses, Testimonials, LeadForm, etc.) in a clear and logical flow.
- Ensure consistent spacing and layout.
- Apply brand typography consistently for program details.
- Consider how animations or transitions can reveal information progressively or highlight key sections (e.g., curriculum modules expanding).
- Ensure interactive elements (accordions, tabs, forms) function smoothly and have clear states.
- Ensure the template is fully responsive.

### src/components/templates/ProgramPageTemplate.astro
- Define the page structure for listing or introducing multiple academic programs (e.g., header, hero, list/grid of programs, general program information).
- Arrange Organisms like Hero, ProgramPageTemplate, CardGrid/List of programs, and potentially others.
- Ensure consistent spacing and layout that allows for easy comparison or scanning of programs.
- Ensure interactive elements like filters or sorting controls follow minimalist style guidelines.
- Apply brand typography and colors consistently.
- Ensure responsiveness for displaying program listings on different screen sizes.

## Pages

### src/pages/index.astro (Homepage)
- This is the primary entry point and should strongly embody the desired visual identity and the 'kampus perubahan' message.
- Ensure a strong visual hierarchy, guiding users to key information (featured programs, news, events).
- Optimize the arrangement and interaction of Organisms (Hero, FeaturedPrograms, LatestPosts, Testimonials) for a smooth user journey.
- Implement strategic use of animations (potentially with GSAP) for elements entering the viewport to create a dynamic and engaging feel.
- Ensure all interactive elements across the page are cohesive in style and behavior.
- Verify consistent application of brand typography and color palette.
- Optimize for fast loading performance.
- Ensure full responsiveness across all devices.
- Overall impression should be modern, inviting, and clearly communicate STIE Dwimulya's forward-looking vision.
- *Note: Requires specific brand guidelines for precise implementation details.*

### src/pages/[...slug].astro (Catch-all/Content Pages)
- This template handles a variety of content pages. The focus is on presenting content cleanly and readably.
- Ensure the layout provides ample white space and clear typographic hierarchy based on Swiss principles.
- Content within the main body (markdown-rendered HTML) should be styled consistently (paragraphs, lists, blockquotes, images).
- Ensure images and media embedded in the content are responsive and styled to fit the minimalist look.
- Sidebars or supplementary sections (if used) should integrate seamlessly with the main content flow.
- Consider subtle animations for sections or images appearing on scroll.
- Ensure all interactive elements (links within text, buttons in organisms) are consistent.
- Prioritize accessibility for content consumption.
- Ensure full responsiveness.
- *Note: Requires specific brand guidelines for precise implementation details.*

### src/pages/akreditasi.astro
- Present accreditation information clearly and professionally.
- Use a clean layout, possibly with a list or table format for details.
- Apply brand typography and colors.
- Highlight key information or accreditation levels visually.
- Ensure any official seals or logos are displayed correctly according to their guidelines.
- Ensure responsiveness.
- *Note: Requires specific brand guidelines for precise implementation details.*

### src/pages/beasiswa.astro
- Structure scholarship information logically (list of scholarships, eligibility, application process, deadlines).
- Use clear headings (Heading Atom) and organized text blocks.
- Apply brand typography and colors.
- Consider using components like AccordionFAQ for detailed eligibility criteria or application steps.
- Ensure links to application forms or external sites are prominent and follow button/link guidelines.
- Ensure responsiveness.
- *Note: Requires specific brand guidelines for precise implementation details.*

### src/pages/berita.astro
- This page combines various news/media sections (Latest News, Press Releases, Media Highlights, Social Feed).
- Ensure a clear visual separation between sections.
- Use Organisms like LatestPosts, CardGrid, and potentially custom sections for releases/highlights.
- Apply consistent typography and spacing across all sections.
- Consider subtle animations for news items appearing or filtering.
- Integrate social media feeds or links cleanly, adhering to minimalist principles even with external content.
- Ensure responsiveness.
- *Note: Requires specific brand guidelines for precise implementation details.*

### src/pages/kontak.astro
- Present contact information (address, phone, email, map) clearly.
- Integrate a contact form (LeadForm Organism) styled according to guidelines.
- Ensure the map component is visually integrated cleanly.
- Apply brand typography and colors to all text elements.
- Ensure responsiveness.
- *Note: Requires specific brand guidelines for precise implementation details.*

### src/pages/penerimaan.astro
- Structure information for prospective students (admission steps, requirements, deadlines, fees, FAQs).
- Use clear sections, headings, lists, and potentially AccordionFAQ components.
- Apply brand typography and colors.
- Ensure calls to action (e.g., "Apply Now" buttons) are prominent and follow style guidelines.
- Consider visual elements or icons that convey guidance and support.
- Ensure responsiveness.
- *Note: Requires specific brand guidelines for precise implementation details.*

### src/pages/penelitian/index.astro
- Present research activities, focus areas, publications, and faculty research profiles.
- Use clear lists, grids, or featured sections to organize information.
- Apply brand typography and colors.
- Ensure consistent formatting for publications or project details.
- Consider filtering or sorting options with minimalist controls.
- Ensure responsiveness.
- *Note: Requires specific brand guidelines for precise implementation details.*
