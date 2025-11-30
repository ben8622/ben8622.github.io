function BlogPreview({title, publishedOn, slug, preview, draft}: {title?: string, publishedOn?: string, slug: string, preview?: string, draft?: boolean}) {
    return (
        <div>
            <a data-testid={`blog-preview-${slug}`} href={`/#/blogs/${slug}`}>
                <h2>
                    {draft ? 'DRAFT: ' : ''} {title || slug}
                </h2>
                <p>{publishedOn || "Unknown date"}</p>
                <p>{preview}</p> 
            </a>
        </div>
    )
}

export default BlogPreview