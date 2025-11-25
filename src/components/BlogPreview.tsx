function BlogPreview({title, publishedOn, slug, preview}: {title?: string, publishedOn?: string, slug: string, preview?: string}) {
    return (
        <div>
            <a href={`/#/blogs/${slug}`}>
                <h2>
                    {title || slug}
                </h2>
                <p>{publishedOn || "Unknown date"}</p>
                <p>{preview}</p> 
            </a>
        </div>
    )
}

export default BlogPreview