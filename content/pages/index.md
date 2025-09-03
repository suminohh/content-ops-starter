---
title: Home
slug: /
numOfPostsPerPage: 8
enableSearch: true
topSections:
  - title:
      text: Sumin Oh
      color: text-dark
      styles:
        self:
          textAlign: center
          fontWeight: 700
      type: TitleBlock
    subtitle: Product Manager
    text: >
      Industrial designer turned product manager. 
      While my 9-to-5 is focused on optimizing ad ops workflows and improving attribution management, I also scratch my creative itch through painting, gardening, writing, and dreaming up my next home project.
    colors: bg-light-fg-dark
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
        fontSize: medium        
        letterSpacing: wide
      subtitle:
        textAlign: center
        fontWeight: 600
        color: text-orange

    type: GenericSection
    backgroundImage:
      backgroundPosition: center
      backgroundRepeat: no-repeat
      type: BackgroundImage
      altText: altText of the image
      backgroundSize: cover
      opacity: 100
      url: /images/beige-bg.svg
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
  metaTitle: Shower Thoughts
  metaDescription: >-
    The blog of Sumin Oh — thoughts on design, work, and the philosophies that shape how I think, build, and live.
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
