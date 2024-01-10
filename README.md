# Fable Blog

## Template mdx file contents: 

```
---
title: what is a product demo? the full guide for sales teams,how to deliver a successful product demo
subtitle: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et ma
date: October 4, 2022
bannerImg: https://assets.website-files.com/632d5bc0374819cb83880d61/632efe9d047920775fad3c3f_Main%20Image-p-800.png
ogTitle: og title for meta tag
ogDescription: og description for meta tag
ogImage: og image for meta tag
website: website
ogUrl: og url for meta tag
summary_large_card: summary large card for meta tag
twitterDomain: a domain name for twitter
twitterUrl: url for twitter meta tag
twitterTitle: title for twitter
twitterDescription: description for twitter
twitterImage: image for twitter seo
---

import Banner from '../.components/banner'
import LatestPosts from '../.components/LatestPosts'
import Promotion from '../.components/Promotion'
import Content from '../.components/Content'
import CoverImg from '../.components/CoverImg'
import PromotionBannerCta from '../.components/PromotionBannerCta'


<Banner config={props.config}>
  <div style={{ maxWidth: '768px' }}>
    10 Jan 2024
    # Banner title
    Banner subtitle or desctiption
  </div>
  <CoverImg src={bannerImg} />
</Banner>

<Content>
  # main content will go here
</Content>

<Promotion config={props.config}>
  ## Ready to get started? Start your 7-day free trial today!
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.
  <PromotionBannerCta href="/#" cta='Get started' />
</Promotion>

<LatestPosts manifest={props.manifest} config={props.config} />

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
 




















