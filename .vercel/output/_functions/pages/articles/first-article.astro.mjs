import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, e as renderSlot, u as unescapeHTML } from '../../chunks/astro/server_Dk22_GYL.mjs';
import { $ as $$Layout, a as $$SiteHeader, b as $$SiteFooter } from '../../chunks/Layout_3IfwthSu.mjs';
/* empty css                                            */
export { renderers } from '../../renderers.mjs';

const $$ArticlePageTemplate = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Article Page", "data-astro-cid-q63jksha": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SiteHeader", $$SiteHeader, { "data-astro-cid-q63jksha": true })} ${maybeRenderHead()}<main data-astro-cid-q63jksha> <div class="container" data-astro-cid-q63jksha> <!-- This template is focused on content consumption --> ${renderSlot($$result2, $$slots["default"])} </div> </main> ${renderComponent($$result2, "SiteFooter", $$SiteFooter, { "data-astro-cid-q63jksha": true })}  ` })}`;
}, "/Users/azimi.arsyad/Documents/astrodm/lumin/src/components/templates/article-page-template/ArticlePageTemplate.astro", void 0);

const $$FirstArticle = createComponent(($$result, $$props, $$slots) => {
  const articleData = {
    title: "STIE Dwimulya KKM: Empowering Local UMKM in Banten",
    description: "Learn about STIE Dwimulya's Kuliah Kerja Mahasiswa (KKM) program and its positive impact on local small and medium-sized businesses in the Banten region.",
    content: `
    <h2>Bringing Change to the Community</h2>
    <p>
      STIE Dwimulya is committed to making a tangible difference in the local community through its Kuliah Kerja Mahasiswa (KKM) program. This initiative allows students to apply their academic knowledge to real-world challenges, working directly with local Micro, Small, and Medium-sized Enterprises (UMKM) to help them grow and thrive.
    </p>
    <p>
      During the recent KKM cycle, students partnered with UMKM in several key areas, providing assistance with business planning, financial management, digital marketing strategies, and product development. The hands-on experience gained by students is invaluable, while the UMKM benefit from fresh perspectives and practical support.
    </p>
    <h3>Success Stories</h3>
    <p>
      We've seen remarkable success stories emerge from the KKM program. For example, a small handicraft business in Serang saw a significant increase in sales after implementing digital marketing techniques recommended by STIE Dwimulya students. Another food vendor improved their financial record-keeping, leading to better cost management.
    </p>
    <p>
      These examples highlight the 'kampus perubahan' spirit of STIE Dwimulya, demonstrating our dedication to not just educating students but also contributing to the economic development of Banten.
    </p>
    <h4>How to Get Involved</h4>
    <p>
      If you're a student interested in participating in KKM or an UMKM seeking assistance, visit our Community Engagement section for more information.
    </p>
    <!-- More article content here, potentially with images or other media from CMS -->
  `
    // other potential fields from CMS:
    // publishedDate: '2023-10-27',
    // author: 'STIE Dwimulya Media',
    // imageUrl: '/path/to/article-image.jpg',
    // imageAlt: 'STIE Dwimulya students working with UMKM',
  };
  return renderTemplate`${renderComponent($$result, "ArticlePageTemplate", $$ArticlePageTemplate, { "title": articleData.title, "description": articleData.description }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="prose lg:prose-xl mx-auto py-8"> <h1>${articleData.title}</h1> <!-- You might include author and date here --> <!-- <p>By {articleData.author} on {articleData.publishedDate}</p> --> <!-- You might include an image here --> <!-- <img src={articleData.imageUrl} alt={articleData.imageAlt} /> --> <div>${unescapeHTML(articleData.content)}</div> </div>  ` })}`;
}, "/Users/azimi.arsyad/Documents/astrodm/lumin/src/pages/articles/first-article.astro", void 0);

const $$file = "/Users/azimi.arsyad/Documents/astrodm/lumin/src/pages/articles/first-article.astro";
const $$url = "/articles/first-article";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$FirstArticle,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
