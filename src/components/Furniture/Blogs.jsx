import { blogs } from "./data";

const sectionHeader = "mb-4 text-[2.5rem] font-bold text-[#18181b]";
const imgClass = "mb-4 w-full rounded-[10px] shadow-[5px_5px_20px_rgba(0,0,0,0.2)]";
const metaSpan = "font-normal italic text-[#71717a]";

export const Blogs = () => (
  <section className="mx-auto w-full max-w-[1200px] px-4 py-20" id="blog">
    <h2 className={sectionHeader}>Recent Blog</h2>
    <div className="mt-16 grid grid-cols-3 gap-8 max-[900px]:grid-cols-2 max-[900px]:gap-4 max-[600px]:grid-cols-1 max-[600px]:gap-y-8">
      {blogs.map((blog) => (
        <div key={blog.title}>
          <img src={blog.image} alt="blog" loading="lazy" className={imgClass} />
          <h4 className="text-[1.2rem] font-semibold text-[#18181b]">{blog.title}</h4>
          <p className="font-medium text-[#18181b]">
            <span className={metaSpan}>by</span> {blog.by} <span className={metaSpan}>on</span>{" "}
            {blog.on}
          </p>
        </div>
      ))}
    </div>
  </section>
);