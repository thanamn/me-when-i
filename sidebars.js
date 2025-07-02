// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  thesisSidebar: [
    '00_title-page',
    '01_abstract',
    '02_preface',
    '03_acknowledgments',
    '04_toc',
    {
      type: 'category',
      label: 'Chapters',
      collapsed: false,
      items: [
        '05_chapter1_intro',
        '06_chapter2_meme_evolution',
        '07_chapter3_linguistic_fragmentation',
        '08_chapter4_tim_cook',
        '09_chapter5_visual_compression',
        '10_chapter6_theoretical_lenses',
        '11_chapter7_affective_nonsense',
        '12_chapter8_discussion',
        '13_chapter9_conclusion',
      ],
    },
    '14_works_cited',
    '15_appendix',
  ],
};

export default sidebars;
