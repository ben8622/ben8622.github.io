import { useParams } from "react-router"
import  {posts, postsRecord} from "../posts/postUtils"
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
                <h1>{post.metadata.title}</h1>
                { post.metadata.author && <p>post.metadata.author</p>}
                { post.metadata.publishedOn && <p>Published on {post.metadata.publishedOn}</p>}
                { post.metadata.modifiedOn && <p>Modified on {post.metadata.modifiedOn}</p>}
                { post.metadata.tags && post.metadata.tags.length > 0 && (
                    <div className="tags-container">
                        {post.metadata.tags.map(tag => <Tag name={tag} key={tag}/> )}
                    </div>
                )}
            </div>
            <Markdown>
                {post.content}
            </Markdown>
        </div>
    ) : (
        <NotFound />
    )
}

export default BlogPost