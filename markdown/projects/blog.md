# Blog Site

A site I built to share thoughts on software and technology. While I could've used an off-the-shelf blog platform, I
wanted full control—and it seemed like a fun project.

Since I was the only author, I didn’t need a full CMS. At the same time, I didn’t want to write everything in raw HTML.
I wanted the simplicity of markdown, with the flexibility to include custom components when needed. `react-markdown` was
a good fit—it turns markdown into HTML and became the foundation for the site.

I chose `Next.js` because it simplified deployment, especially with Vercel handling the infrastructure, just like my
portfolio. Initially, I served blog pages by dynamically reading markdown files, but this caused performance issues.
Switching to static generation solved it—building all pages at build time made everything faster and more reliable.

In the end, I had a manual CMS based on markdown files. Each `.md` file was paired with a metadata file to support
features like tagging, hiding posts, and showing placeholder images.

I made some test articles for development, if you want to see they are:

- [article1](http://blog.dominicwild.com/blogs/article1)
- [article2](http://blog.dominicwild.com/blogs/article2)
- [article3](http://blog.dominicwild.com/blogs/article3)
- [article4 (advanced)](http://blog.dominicwild.com/blogs/article4)
