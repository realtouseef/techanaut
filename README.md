# Techanaut 🚀

Amazon Affiliate site built w/ NextJS, Contentful, Tailwind CSS, and Sass.

## Things to remember

1. anchor tag `<a></a>` inside and `h6` is the `Visit to Amazon` button

2. when new post is added in `contentful`, run `yarn build` to create static pages, and then run `yarn postBuild`, so sitemap is properly generated for `google bots`.

3. Manually add posts to `sitemap.xml`

## colors

- #054ada -- primary blue color
- #333333 -- primary text color
- #e5ecfb -- button background (before hover)
- #054ada -- button background (after hover)
- #054ada -- button text color (before hover)
- #ffffff -- button text color (after hover)
- #b4c9f4 -- navbar buttons (before hover)
- #ffffff -- navbar buttons (after hover)
- #ff6900 -- links (after hover)

## width

- Container -- 1190px (1200px)
- Actual article content -- 650px (255px x-padding)
- Table of content -- 240px
- author box -- 193px

## Priority TODOs

## TODOs

- [ ] Create a scraper that goes through the amazon products that are listed on my site and see if there's a discount going on, if yes, show the discounted price

## Delayed TODOs

- [ ] create an author page with all the blog posts shown `/author` (no need to make unnecessary api calls, will work on it if vercel kicks us out of their free plan)
- [ ] Pagination **using a `show more` button** (will start workin on this when the site is 10 articles published -- till that, it is delayed.)
  <!-- Page-1: skip=0, limit=10 -->
  <!-- Page-2: skip=10, limit=10 -->
  <!-- Page-3: skip=20, limit=10 -->

## Completed TODOs

- [x] add keys to twoarticlesunderarticle
- [x] change the footer
- [x] show latest articles headings
- [x] fix 404 page with similar design to other pages
- [x] increase the size of article box in smaller screens with increased heading
- [x] create an author box component to place next to articles
- [x] main image is not showing when shared on fb or twitter
- [x] Print 2 headings of latest articles under the article
  - both of the articles should be from the category the user is on. (just printed 2 articles from any category)
- [x] create another favicon with ahref style.
- [x] Write copy for about, gaming laptop, peripherals,
- [x] Copy ahrefs/blog design
- [x] fix the sitemap and robots.txt issue -- cannot be indexed cos of these.
- [x] GSC is crying about `cannot reach robots.txt`
- [x] fix the main page image when shared on fb
- [x] The image that shows up when you share the site on facebook/messenger is not working.
- [x] put a key in `TwoArticlesUnderArticle`

## Can't be complete

- [ ] add `rel=sponsor` to the `anchor tag` inside `h6` aka. view price button (returns every link of the post -- cant put `rel-sponsor` to linking to other articles)

- [ ] Add table of content (can't find the correct the content type for it, a bit confusing)

- [ ] create a breadcrump (created by didn't like the overall design of it and the placement then deleted.)
