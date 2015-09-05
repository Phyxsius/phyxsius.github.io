---
layout: post
title: Animation
author: Andy
image: animation.jpg
---

Next step is CSS transition animations between pages. I'm sure I'll have to use a JS library to smooth the timings out between page loading but I'll take it one step at a time.

<!--more-->

The plan is to expand the post image, on the home page, to the size and location of itself on the post's page. Here's how I envision it looking when clicking on a post:

1. All other post summaries, including the about card, will swipe away in a slight easing animation from top to bottom (top would exit first, followed shorterly after by the next one down, etc)
2. Excerpt copy from the chosen post will ease out to only show the post image (maybe title)
3. The card will expand and move toward the top position to where it would be on the post page
4. Once the post page loads, the card expands and the copy eases in
