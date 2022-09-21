# Techanaut 🚀

Amazon Affiliate site built w/ NextJS, Contentful, Tailwind CSS, and Sass.

## Things to remember

1. anchor tag `<a></a>` inside and `h6` is the `Visit to Amazon` button

2. when new post is added in `contentful`, run `yarn build` to create static pages, and then run `yarn postBuild`, so sitemap is properly generated for `google bots`.

3. Manually add posts to `sitemap.xml`

## TODOs

- [x] fix the sitemap and robots.txt issue -- cannot be indexed cos of these.
- [x] GSC is crying about `cannot reach robots.txt`

- [x] fix the main page image when shared on fb

- [ ] Create a scraper that goes through the amazon products that are listed on my site and see if there's a discount going on, if yes, show the discounted price

- [ ] Print 2 headings of latest articles under the article

  - both of the articles should be from the category the user is on.

- [x] The image that shows up when you share the site on facebook/messenger is not working.

- [ ] Add table of content

- [ ] Pagination
