import { useState } from 'react';
import BlogPreview from '../components/BlogPreview';
import {posts} from '../posts/postUtils';

function Blogs() {
    const [previewDrafts, setPreviewDrafts] = useState(false); 

    const draftsToggleButtonOnClickHandler = () => {
        setPreviewDrafts(!previewDrafts);
    }

    // simple flag to determine if we are running locally
    const isLocalHost = window.location.origin.includes('localhost')

    return (
        <div>
            <h1>Blogs</h1>
            {isLocalHost && 
                <button data-testid='preview-drafts' onClick={draftsToggleButtonOnClickHandler}>
                    {previewDrafts ? 'Hide Drafts' : 'Preview Drafts'}
                </button>}
            {
                posts.filter(post => {
                    console.log(`Evaluating post ${post.slug} for previewDrafts=${previewDrafts} with draft=${post.metadata.draft}`);
                    if(!previewDrafts && post.metadata.draft) {
                        return false;
                    }
                    return true;
                }).map(post => {
                    return (
                        <BlogPreview
                            title={post.metadata.title}
                            publishedOn={post.metadata.publishedOn}
                            slug={post.slug}
                            draft={post.metadata.draft}
                            key={post.slug}
                        />
                    )
                })
            }
        </div>
    )
}

export default Blogs