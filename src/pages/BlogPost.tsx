import { useParams } from "react-router"
import  {postsRecord} from "../posts/postUtils"
import Markdown from 'react-markdown'
import NotFound from "./NotFound"
import Tag from "../components/Tag"
import './BlogPost.css'

function BlogPost() {
    const {slug = ""} = useParams()
    const post = postsRecord[slug]

    return post ? (
        <div className="blog-post-container">
            <div className="blog-post-header">
                { post.metadata.draft && <h1 data-testid="draft-blog-indicator">DRAFT</h1>}
                <h1 data-testid="blog-title">{post.metadata.title}</h1>
                { post.metadata.author && <p>post.metadata.author</p>}
                <p data-testid="blog-publish-date">Published on {post.metadata.publishedOn}</p>
                { post.metadata.tags && post.metadata.tags.length > 0 && (
                    <div className="tags-container">
                        {post.metadata.tags.map(tag => <Tag name={tag} key={tag}/> )}
                    </div>
                )}
            </div>
            <div data-testid="blog-content">
                <Markdown>
                    {post.content}
                </Markdown>
            </div>
        </div>
    ) : (
        <NotFound />
    )
}

export default BlogPost