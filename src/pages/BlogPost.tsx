import { useParams } from "react-router"
import  {posts, postsRecord} from "../posts/postUtils"
import Markdown from 'react-markdown'

function BlogPost() {
    const {slug = ""} = useParams()
    console.log("loaded posts:", posts)

    return postsRecord[slug] ? (
        <div>
            {postsRecord[slug].content}
        </div>
    ) : (
        <div>
            not found
        </div>
    )
}

export default BlogPost