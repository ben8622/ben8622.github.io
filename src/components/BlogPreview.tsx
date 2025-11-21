function BlogPreview({title, publishedOn, slug, preview}: {title?: string, publishedOn?: string, slug: string, preview?: string}) {
    return (
        <div>
            <h2>
                <a href={`/blogs/${slug}`}>{title || slug}</a>
            </h2>
            <p><em>Published on: {publishedOn || "Unknown date"}</em></p>
            <p>{preview}</p> 
        </div>
    )
}

export default BlogPreview