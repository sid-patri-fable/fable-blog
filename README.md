# Fable Blog

<h2 id="embed-fable">Embed fable iframe</h2>
Following is an example file to embed fable in mdx file:

```mdx
---
frontmatter-content: frontmatter content will go here
---

import FableEmbed from "./.components/fable-embed";

## your mdx content

for the fable embed u will need to write the following snippet. u can change the src to the demo link u want to embed

<FableEmbed src="https://app.sharefable.com/embed/demo/home-page-demo-desktop-r52u9vcnfl0g1bq7" />

```

### Explanation:
- `import FableEmbed from "./.components/fable-embed";`
  
       - this is a must to embed the fable iframe
       - this should be pasted right after the frontmater and just before the mdx content
- `<FableEmbed src="https://app.sharefable.com/embed/demo/home-page-demo-desktop-r52u9vcnfl0g1bq7" />`

       - paste this snippet where u want to embed the iframe
       - src should include the demo embed link


## Template mdx file contents: 

```
---
title: The Ultimate Product Demo Guide for Sales Teams to Close More Deals
subtitle: In this comprehensive guide, we will dive into everything you want to know about product demos and how you can nail your demos to close more deals.
date: January 10, 2024
bannerImg: https://github.com/sid-patri-fable/fable-blog/assets/155963795/adbda461-871c-45e7-8583-559cd0cd42f3
ogTitle: The Ultimate Product Demo Guide for Sales Teams to Close More Deals
ogDescription: Wondering what product demos are and how they can boost your sales? Look no further! This ultimate guide provides valuable insights and strategies to help you master the art of product demos.
ogImage: https://github.com/sid-patri-fable/fable-blog/assets/155963795/adbda461-871c-45e7-8583-559cd0cd42f3)
bannerDate: January 10, 2024
bannerTitle: The Ultimate Product Demo Guide for Sales Teams to Close More Deals
bannerSubtitle: In this comprehensive guide, we will dive into everything you want to know about product demos and how you can nail your demos to close more deals.
promotionTitle: Start your 14-day free trial today!
promotionSubtitle: Want to get the right partner for your sales team and close more deals?
promotionCTA: Get started
promotionLink: https://app.sharefable.com/login
---


# your mdx content will go here


```

### Banner
The Banner will look this:

<img width="1470" alt="Screenshot 2024-01-10 at 10 56 48 AM" src="https://github.com/sid-patri-fable/fable-blog/assets/117962421/a4ebe657-20b9-4d54-bd27-1d8ff21adfb2">

### Content
The Content will look like this: If you want the mdx content to be centered like in the picture then use the Content component

<img width="1469" alt="Screenshot 2024-01-10 at 10 57 18 AM" src="https://github.com/sid-patri-fable/fable-blog/assets/117962421/07d09132-3424-4236-b9cc-ed5b8906d283">


### Promotion
The Promotion card will look like this:

<img width="1445" alt="Screenshot 2024-01-10 at 10 59 08 AM" src="https://github.com/sid-patri-fable/fable-blog/assets/117962421/c4a6df00-0122-401d-a498-746b31b55757">


### Latest Posts
The Latest Posts section will look like this:

<img width="1465" alt="Screenshot 2024-01-10 at 10 59 22 AM" src="https://github.com/sid-patri-fable/fable-blog/assets/117962421/3dba1d3c-d10b-4e2f-bf2b-0161d603b663">
 

-----------
Some assets:
Caret down white:



![caret-down-md-svgrepo-com](https://github.com/sid-patri-fable/fable-blog/assets/117962421/ce8148a2-9141-43be-ba29-d04c908af25d)


















