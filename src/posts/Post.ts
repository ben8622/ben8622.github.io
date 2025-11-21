import type { PostMetaData } from "./PostMetaData"

export type Post = {
    slug: string
    content: string
    metadata: PostMetaData
}