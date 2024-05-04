---
title: "My First Blog Post"
date: "2023-04-02"
author: "John Doe"
tags: ["blog", "personal"]
excerpt: "This is my first blog post, where I share my thoughts and experiences."
image: "post-1.jpg"
isFeatured: true
---

# This is the title

This blog post covers the following topics:

1. Introduction
   to the blog post
2. Key takeaways and lessons learned
3. Conclusion and next steps
   This blog post is the first in a series where I share my personal experiences and insights. In this post, I introduce the purpose of the blog and provide an overview of the topics covered. The key takeaways focus on the important lessons I've learned, and I conclude by outlining my plans for future blog posts. Stay tuned for more updates!

![Some Image](post-1.jpg)

```js
const blogPost = {
  title: "My First Blog Post",
  date: "2023-04-02",
  author: "John Doe",
  tags: ["blog", "personal"],
  excerpt:
    "This is my first blog post, where I share my thoughts and experiences.",
  image: "post-1.jpg",
  isFeatured: true,
};
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
```
