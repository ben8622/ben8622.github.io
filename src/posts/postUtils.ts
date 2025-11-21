import matter from 'gray-matter';
import type { Post } from './Post';

// load in the raw .md files 
const files = import.meta.glob('./*.md', { as: 'raw', eager: true });

// build and export the Posts[] from the raw files
export const posts: Post[] = Object.entries(files).map(([path, fileContents]) => {
    // slug is built from name of the file, this will be used in the URL
    const slug = path.replace('./', '').replace('.md', '');
    // extract meta data from markdown file using gray-matter
    const { data, content } = matter(fileContents as string);
    // build Post object using slug, metadata, and raw content
    const post: Post = {
        "slug": slug,
        "content": content,
        "metadata": data
    };
    return post;
})

// Build a record of posts for quick lookup by slug
export const postsRecord: Record<string, Post> =posts.reduce<Record<string, Post>>((postsRecord, post) => {
    postsRecord[post.slug] = post;
    return postsRecord
}, {} as Record<string, Post>)