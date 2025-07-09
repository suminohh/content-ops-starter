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
      type: TitleBlock
    subtitle: Product Manager
    text: >
      Trained as an industrial designer, I am a product manager for a performance 
      marketing agency in Atlanta. While my 9-to-5 is focused on optimizing workflows 
      for ad ops and improving attribution, I also scratch my creative itch through 
      painting, gardening, writing, and dreaming up my next home project.
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
    This is the blog of Sumin Oh, where I share my thoughts on design, work, and the philosophies that shape the way I live.
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
