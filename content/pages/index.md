---
title: Home
slug: /
numOfPostsPerPage: 8
enableSearch: true
topSections:
  - title:
      text: A team that works closely together
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: Section subtitle
    text: >
      There are many variations of passages of Lorem Ipsum available, but the
      majority have suffered alteration in some form, by injected humour, or
      randomised words which don't look even slightly believable. If you are
      going to use a passage of Lorem Ipsum, you need to be sure there isn't
      anything embarrassing hidden in the middle of text.
    colors: bg-neutral-fg-dark
    styles:
      self:
        padding:
          - pt-40
          - pl-4
          - pb-40
          - pr-4
        alignItems: center
        flexDirection: row-reverse
        justifyContent: center
      text:
        textAlign: center
      subtitle:
        textAlign: center
    type: GenericSection
    backgroundImage:
      type: BackgroundImage
      altText: altText of the image
      backgroundSize: cover
      backgroundPosition: center
      backgroundRepeat: no-repeat
      opacity: 100
      url: /images/abstract-background.svg
  - title:
      text: Latest Post
      color: text-dark
      type: TitleBlock
    subtitle: My Shower Thoughts
    posts:
      - content/pages/blog/finding-your-visual-identity.md
    showThumbnail: true
    showExcerpt: true
    showDate: true
    showAuthor: true
    variant: big-list
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-28
          - pb-0
          - pl-4
          - pr-4
        justifyContent: flex-start
    type: FeaturedPostsSection
    hoverEffect: move-up
styles:
  title:
    textAlign: center
seo:
  metaTitle: Blog
  metaDescription: >-
    This is the blog of Sumin Oh where I post about technology, product,
    and design.
  socialImage: /images/img-placeholder.svg
  type: Seo
type: PostFeedLayout
bottomSections: []
postFeed:
  type: PagedPostsSection
  title: null
  subtitle: null
  showThumbnail: true
  showExcerpt: true
  showDate: true
  showAuthor: true
  actions: []
  elementId: null
  variant: three-col-grid
  colors: bg-light-fg-dark
  hoverEffect: move-up
---
