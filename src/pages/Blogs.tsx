import BlogPreview from '../components/BlogPreview';
import {posts} from '../posts/postUtils';

function Blogs() {
    return (
        <div>
            <h1>Articles</h1>
            {
                posts.map(post => {
                    return (
                        <BlogPreview
                            title={post.metadata.title}
                            publishedOn={post.metadata.publishedOn}
                            slug={post.slug}
                            key={post.slug}
                        />
                    )
                })
            }
        </div>
    )
}

export default Blogs