// scripts/audit-nav.ts
import * as fs from 'fs';
import * as path from 'path';

function readFileSync(filepath: string): string | null {
    try {
        if (!fs.existsSync(filepath)) {
            return null;
        }
        return fs.readFileSync(filepath, 'utf-8');
    } catch (error) {
        console.error(`Error reading file ${filepath}:`, error);
        return null;
    }
}

function auditNavigation(): void {
    console.log(`--- Starting Navigation & Header Audit (TypeScript) ---`);
    const results: string[] = [];

    const projectRoot = process.cwd(); // Assuming script is run from project root

    const navDataPath = path.join(projectRoot, `src/data/NavigationData.ts`);
    const siteHeaderPath = path.join(projectRoot, `src/components/organisms/site-header/SiteHeader.astro`);
    const globalNavMenuPath = path.join(projectRoot, `src/components/organisms/site-header/GlobalNavMenu.tsx`);
    const hamburgerButtonPath = path.join(projectRoot, `src/components/organisms/site-header/HamburgerButton.tsx`);

    const filesToCheck = {
        "Navigation Data": navDataPath,
        "Site Header": siteHeaderPath,
        "Global Nav Menu": globalNavMenuPath,
        "Hamburger Button": hamburgerButtonPath
    };

    for (const name in filesToCheck) {
        const filePath = filesToCheck[name as keyof typeof filesToCheck];
        if (readFileSync(filePath)) {
            results.push(`[✓] File ${name} found: ${filePath}`);
        } else {
            results.push(`[✗] File ${name} NOT found: ${filePath}. This might indicate a structural issue.`);
        }
    }

    console.log(`
--- File Status ---`);
    results.forEach(res => console.log(res));

    console.log(`
--- Content Analysis: Header & Navigation ---`);

    // SiteHeader.astro Analysis
    const headerContent = readFileSync(siteHeaderPath);
    if (headerContent) {
        console.log(`
[Analysis] ${siteHeaderPath}:`);
        if (headerContent.includes(`<header`) && headerContent.includes(`</header>`)) {
            console.log(`  [✓] <header> tag found. Good semantic HTML.`);
        } else {
            console.log(`  [✗] <header> tag not found. Ensure semantic HTML is used.`);
        }

        if (headerContent.includes(`sticky top-0`)) {
            console.log(`  [✓] Header has 'sticky top-0' property. Verify its functionality across devices.`);
        } else {
            console.log(`  [?] Header does not appear to be sticky. Consider making it sticky for better UX.`);
        }

        if (headerContent.includes('a href="/" aria-label="Beranda STIE Dwimulya"')) {
            console.log(`  [✓] Logo link to homepage has good 'aria-label' for accessibility.`);
        } else {
            console.log(`  [✗] Logo link might be missing 'aria-label' or clear homepage link.`);
        }

        if (headerContent.includes(`GlobalNavMenu data={globalNavigationData}`)) {
            console.log(`  [✓] GlobalNavMenu component used, indicating centralized navigation data.`);
        } else {
            console.log(`  [✗] GlobalNavMenu not found or not using centralized navigation data.`);
        }

        if (headerContent.includes(`HamburgerButton client:load`)) {
            console.log(`  [✓] HamburgerButton component (for mobile) found.`);
        } else {
            console.log(`  [✗] HamburgerButton not found. Mobile responsiveness may be affected.`);
        }

        if (headerContent.includes(`hidden md:flex`) && headerContent.includes(`md:hidden`)) {
            console.log(`  [✓] Basic responsiveness indicators (hidden md:flex / md:hidden) found.`);
        } else {
            console.log(`  [✗] Basic responsiveness indicators not found. Re-check mobile adaptation.`);
        }

        if (headerContent.includes('Button href="/penerimaan" label="Pendaftaran"')) {
            console.log(`  [✓] 'Pendaftaran' CTA button found in the header.`);
        } else {
            console.log(`  [!] 'Pendaftaran' CTA button not explicitly found. Consider adding a clear CTA.`);
        }
    }

    // GlobalNavMenu.tsx Analysis
    const globalNavContent = readFileSync(globalNavMenuPath);
    if (globalNavContent) {
        console.log(`
[Analysis] ${globalNavMenuPath}:`);
        if (globalNavContent.includes(`useState(false)`) && globalNavContent.includes(`toggleAccordion`)) {
            console.log(`  [✓] State management for submenu toggling found.`);
        } else {
            console.log(`  [!] Submenu toggling mechanism is not clear.`);
        }

        if (globalNavContent.includes(`aria-expanded={isMobile && hasSubmenu ? isOpen : undefined}`)) {
            console.log(`  [✓] Dynamic 'aria-expanded' for mobile submenus found, good for accessibility.`);
        } else {
            console.log(`  [✗] 'aria-expanded' for submenus might not be correctly implemented.`);
        }

        if (globalNavContent.includes(`item.submenu?.map`)) {
            console.log(`  [✓] Recursive rendering for submenus found, supporting multi-level navigation.`);
        } else {
            console.log(`  [!] Submenus might not be rendered recursively.`);
        }
    }

    // HamburgerButton.tsx Analysis
    const hamburgerContent = readFileSync(hamburgerButtonPath);
    if (hamburgerContent) {
        console.log(`
[Analysis] ${hamburgerButtonPath}:`);
        if (hamburgerContent.includes(`aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}`)) {
            console.log(`  [✓] Dynamic 'aria-label' for hamburger button found, excellent for accessibility.`);
        } else {
            console.log(`  [✗] Dynamic 'aria-label' for hamburger button not found.`);
        }

        if (hamburgerContent.includes(`aria-expanded={isOpen}`)) {
            console.log(`  [✓] 'aria-expanded' found for hamburger button, good for accessibility.`);
        } else {
            console.log(`  [✗] 'aria-expanded' for hamburger button not found.`);
        }

        if (hamburgerContent.includes(`toggleMenu`) && hamburgerContent.includes(`mobileMenu.classList.remove`)) {
            console.log(`  [✓] JavaScript logic for mobile menu toggling found.`);
        } else {
            console.log(`  [✗] Mobile menu toggling logic is unclear or not found.`);
        }
    }

    // NavigationData.ts Analysis
    const navDataContent = readFileSync(navDataPath);
    if (navDataContent) {
        console.log(`
[Analysis] ${navDataPath}:`);
        if (navDataContent.includes(`export interface NavItem {`) && navDataContent.includes(`text: string;`) && navDataContent.includes(`href?: string;`)) {
            console.log(`  [✓] NavItem interface structure (text, href) found.`);
        } else {
            console.log(`  [✗] NavItem interface structure is unclear.`);
        }
        
        if (navDataContent.includes(`id: string;`)) {
            console.log(`  [✓] 'id' property found in NavItem, good for unique identification (e.g., React keys).`);
        } else {
            console.log(`  [!] 'id' property not found in NavItem. Consider adding it for better state management.`);
        }

        if (navDataContent.includes(`description?: string;`)) {
            console.log(`  [✓] 'description' property found in NavItem, can be used for tooltips/details in menus.`);
        } else {
            console.log(`  [!] 'description' property not found in NavItem. Consider adding it for additional UI info.`);
        }

        if (navDataContent.includes(`submenu?: NavItem[];`)) {
            console.log(`  [✓] 'submenu' property found in NavItem, supporting multi-level navigation.`);
        } else {
            console.log(`  [✗] 'submenu' property not found in NavItem. Multi-level navigation might not be supported.`);
        }
    }

    console.log(`
--- Audit Complete ---`);
}

auditNavigation();
