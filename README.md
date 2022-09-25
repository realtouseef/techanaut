# Techanaut 🚀

Amazon Affiliate site built w/ NextJS, Contentful, Tailwind CSS, and Sass.

## Things to remember

1. anchor tag `<a></a>` inside and `h6` is the `Visit to Amazon` button

2. when new post is added in `contentful`, run `yarn build` to create static pages, and then run `yarn postBuild`, so sitemap is properly generated for `google bots`.

3. Manually add posts to `sitemap.xml`

## colors

#054ada -- primary blue color
#333333 -- primary text color
#e5ecfb -- button background (before hover)
#054ada -- button background (after hover)
#054ada -- button text color (before hover)
#ffffff -- button text color (after hover)
#b4c9f4 -- navbar buttons (before hover)
#ffffff -- navbar buttons (after hover)
#ff6900 -- links (after hover)

## width

Container -- 1190px (1200px)
Actual article content -- 650px (255px x-padding)
Table of content -- 240px
author box -- 193px

## Priority TODOs

- [ ] put a key
- [ ] main image is not showing when shared on fb or twitter

## TODOs

- [ ] Create a scraper that goes through the amazon products that are listed on my site and see if there's a discount going on, if yes, show the discounted price

- [ ] create an author box component to place next to articles

- [ ] Pagination

## Completed TODOs

- [x] Print 2 headings of latest articles under the article
  - both of the articles should be from the category the user is on. (just printed 2 articles from any category)
- [x] create another favicon with ahref style.
- [x] Write copy for about, gaming laptop, peripherals,
- [x] Copy ahrefs/blog design
- [x] fix the sitemap and robots.txt issue -- cannot be indexed cos of these.
- [x] GSC is crying about `cannot reach robots.txt`
- [x] fix the main page image when shared on fb
- [x] The image that shows up when you share the site on facebook/messenger is not working.

## Can't be complete

- [ ] add `rel=sponsor` to the `anchor tag` inside `h6` aka. view price button (returns every link of the post -- cant put `rel-sponsor` to linking to other articles)

- [ ] Add table of content (can't find the correct the content type for it, a bit confusing)
