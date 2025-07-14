# STIE Dwimulya Design System Style Guide

## Brand Identity & Visual Guidelines

### Color Palette

#### Primary Colors
- **Primary Blue**: `rgb(0, 102, 204)` - Main brand color for headers, CTAs, and key elements
- **Primary Light**: `rgb(102, 153, 255)` - Used for highlights and hover states
- **Primary Dark**: `rgb(0, 51, 102)` - Used for text and strong accents

#### Secondary Colors
- **Secondary Gray**: `rgb(74, 85, 104)` - Professional secondary color
- **Secondary Light**: `rgb(113, 128, 150)` - Subtle backgrounds and borders
- **Secondary Dark**: `rgb(45, 55, 72)` - Text and strong contrasts

#### Accent Colors
- **Accent Purple**: `rgb(136, 58, 234)` - Used sparingly for special highlights
- **Accent Light**: `rgb(224, 204, 250)` - Subtle accent backgrounds
- **Accent Dark**: `rgb(49, 10, 101)` - Strong accent text

#### Neutral Colors
- **Text Default**: `rgb(51, 51, 51)` - Primary text color
- **Text Light**: `rgb(102, 102, 102)` - Secondary text and captions
- **Background Light**: `rgb(246, 246, 246)` - Page backgrounds
- **White**: `rgb(255, 255, 255)` - Pure white for cards and overlays
- **Black**: `rgb(0, 0, 0)` - Pure black for high contrast elements

### Typography

#### Font Families
- **Primary Font**: System fonts (font-sans) for optimal performance
- **Code Font**: Menlo, Monaco, monospace for technical content

#### Text Sizes & Hierarchy
- **H1**: 2.5rem (40px) - Page titles
- **H2**: 2rem (32px) - Section headers
- **H3**: 1.75rem (28px) - Subsection headers
- **Body**: 1rem (16px) - Standard body text
- **Small**: 0.875rem (14px) - Captions and metadata

### Spacing & Layout

#### Spacing Scale
- **xs**: 0.25rem (4px)
- **sm**: 0.5rem (8px)
- **md**: 1rem (16px)
- **lg**: 1.5rem (24px)
- **xl**: 2rem (32px)
- **2xl**: 3rem (48px)

#### Container Widths
- **Max Width**: 1280px (max-w-7xl)
- **Padding**: 1rem on mobile, 1.5rem on tablet, 2rem on desktop

### Component Guidelines

#### Buttons
- **Primary**: Blue background, white text, rounded corners
- **Secondary**: Gray outline, colored text
- **Hover States**: Slightly darker background, smooth transition

#### Cards
- **Elevated**: Subtle shadow, white background
- **Outlined**: Border, no shadow
- **Spacing**: 1rem padding, 0.5rem margin between elements

#### Navigation
- **Desktop**: Horizontal layout with dropdowns
- **Mobile**: Hamburger menu with slide-out panel
- **Active States**: Primary color indication

### Accessibility Standards

#### Color Contrast
- **Normal Text**: Minimum 4.5:1 contrast ratio
- **Large Text**: Minimum 3:1 contrast ratio
- **Interactive Elements**: Clear focus indicators

#### Keyboard Navigation
- **Tab Order**: Logical navigation flow
- **Focus States**: Visible focus indicators
- **Skip Links**: Available for screen readers

#### Screen Reader Support
- **Alt Text**: Descriptive image alternatives
- **ARIA Labels**: Proper labeling for interactive elements
- **Semantic HTML**: Proper heading hierarchy

### Responsive Design

#### Breakpoints
- **Mobile**: 0px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px and above

#### Layout Principles
- **Mobile First**: Design for smallest screen first
- **Progressive Enhancement**: Add features for larger screens
- **Flexible Grid**: Use CSS Grid and Flexbox for layouts

### Brand Voice & Tone

#### Voice Characteristics
- **Professional**: Authoritative yet approachable
- **Educational**: Informative and clear
- **Supportive**: Helpful and encouraging

#### Tone Guidelines
- **For Prospective Students**: Inspiring and welcoming
- **For Partners**: Professional and collaborative
- **For Community**: Respectful and engaging

### Image Guidelines

#### Photography Style
- **Authentic**: Real students, faculty, and campus life
- **Professional**: High-quality, well-lit images
- **Diverse**: Inclusive representation of community

#### Image Specifications
- **Aspect Ratios**: 16:9 for heroes, 4:3 for cards, 1:1 for profiles
- **Resolution**: Minimum 1920x1080 for hero images
- **Optimization**: WebP format when supported, progressive JPEG fallback

### Usage Examples

#### Do's
- Use primary colors for important actions
- Maintain consistent spacing throughout
- Ensure text is readable on all backgrounds
- Use proper heading hierarchy

#### Don'ts
- Don't use colors outside the defined palette
- Don't compromise accessibility for aesthetics
- Don't use generic stock photos
- Don't ignore mobile users

### Implementation Notes

This style guide should be referenced when:
- Creating new components
- Modifying existing designs
- Reviewing design proposals
- Onboarding new team members

Regular updates to this guide should reflect:
- Brand evolution
- New component additions
- Accessibility improvements
- User feedback integration
