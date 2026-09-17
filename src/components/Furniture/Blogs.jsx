import { blogs } from "./data";

export const Blogs = () => (
  <section className="section__container blog_container" id="blog">
    <h2 className="section__header">Recent Blog</h2>
    <div className="blog__grid">
      {blogs.map((blog) => (
        <div className="blog__card" key={blog.title}>
          <img src={blog.image} alt="blog" loading="lazy" />
          <h4>{blog.title}</h4>
          <p>
            <span>by</span> {blog.by} <span>on</span> {blog.on}
          </p>
        </div>
      ))}
    </div>
  </section>
);