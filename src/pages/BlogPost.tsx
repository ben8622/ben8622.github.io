import { useParams } from "react-router"
import  {posts, postsRecord} from "../posts/postUtils"
import Markdown from 'react-markdown'
import { Navigate } from "react-router"
import NotFound from "./NotFound"

function BlogPost() {
    const {slug = ""} = useParams()
    console.log("loaded posts:", posts)

    return postsRecord[slug] ? (
        <Markdown>
            {postsRecord[slug].content}
        </Markdown>
    ) : (
        <NotFound />
    )
}

export default BlogPost