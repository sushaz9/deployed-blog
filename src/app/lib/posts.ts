const CATEGORIES = [
  { name: "Productivity", catslug: "productivity" },
  { name: "Health", catslug: "health" },
  { name: "Technology", catslug: "technology" },
];

const POSTS = [
  // existing posts...
  {
    title: "10 Tips for Effective Time Management",
    slug: "productivity",
    content:
      "In today's fast-paced world, managing your time effectively is crucial...",
    category: "productivity",
  },
  {
    title: "Exploring the Wonders of Machine Learning",
    slug: "technology",
    content:
      "Machine learning is a fascinating field that continues to evolve rapidly...",
    category: "technology",
  },
  {
    title: "Healthy Eating Habits for a Balanced Life",
    slug: "health",
    content:
      "Maintaining a well-balanced diet is essential for overall health and well-being...",
    category: "health",
  },
  {
    title: "Browser Compatibility: The Eternal Torment",
    slug: "technology",
    content:
      "Browser compatibility is a cruel joke. You align everything perfectly in one browser, and it's a disaster in another. It's like playing whack-a-mole with CSS!",
    category: "technology",
  },
];

// get all posts
// you can replace the content inside with a db call or something.
export function getPosts() {
  return POSTS;
}

// gets one of the posts by its slug
export function getPostsBySlug(slug: string) {
  return POSTS.find((post) => post.slug === slug);
}

export function getCategory() {
  return CATEGORIES;
}

export function getPostsByCategory(catslug: string) {
  return POSTS.filter((post) => post.category === catslug);
}
