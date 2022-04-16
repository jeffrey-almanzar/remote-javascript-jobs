import PostCard from "./PostCard";

export default function CardLister({ posts, options }) {
  const { urlPrefix } = options;
  return (
    <>
      {posts.map(({ frontmatter, slug }, index) => (
        <div key={frontmatter.title + index} className="mb-5">
          <PostCard
            title={frontmatter.title}
            content={frontmatter.excerpt}
            url={`${urlPrefix}/${slug}`}
            image={frontmatter.cover_image}
          />
        </div>
      ))}
    </>
  );
}
