import { test, expect, Page } from '@playwright/test';

test('Can navigate to a blog post', async ({ page }) => {
    await navigateToBlogsPage(page);

    // visit a blog post
    await page.getByTestId(/blog-preview.*/).first().click();

    // validate blog post has required base attributes
    await blogPostHasRequiredBaseAttributes(page);
});

test('Draft blogs work locally', async ({ page }) => {
    // first navigate to home page so page has correct base URL
    await page.goto('/')

    // only run this test if we are running locally
    test.skip(page.url().includes('localhost') === false, 'Skipping draft blog test - not running locally');

    await navigateToBlogsPage(page);

    // enable draft previewing
   const previewDraftsButton =  await page.getByRole('button', { name: 'Preview Drafts' })
   await expect(previewDraftsButton).toBeVisible();
   await previewDraftsButton.click();

    // visit a draft blog post
    const draftBlogPreviews = page.getByTestId(/blog-preview.*/).filter({ hasText: 'DRAFT' });
    const draftBlogPreview = draftBlogPreviews.first()
    await expect(draftBlogPreview).toBeVisible();
    await draftBlogPreview.click() // click first to avoid potential flakiness

    // validate blog post has required base attributes
    await blogPostHasRequiredBaseAttributes(page);

    // validate draft indicator is visible
    await expect(page.getByTestId('draft-blog-indicator')).toBeVisible();
})

async function blogPostHasRequiredBaseAttributes(page: Page) {
    // validate we have reached a blog via URL pathing
    const matches = page.url().match(/\/blogs\/.*/)
    expect(matches).not.toBeNull();
    expect(matches?.length).toBeGreaterThan(0);

    // validate it has a title
    const blogTitle = page.getByTestId('blog-title');
    await expect(blogTitle).toBeVisible();

    // validate it has a publish date
    const blogPublishDate = page.getByTestId('blog-publish-date');
    await expect(blogPublishDate).toBeVisible();

    // validate it has content
    const blogContent = page.getByTestId('blog-content');
    const innerText = await blogContent.allInnerTexts();
    const innerTextJoined = innerText.join('').trim();
    await expect(innerText).not.toBe('');
}

async function navigateToBlogsPage(page: Page) {
    // init at home page
    await page.goto('/')
    // use nav bar to get to blogs page
    await page.getByRole('link', { name: 'Blogs' }).click();
    // validate we are on blogs page
    await expect(page.getByRole('heading', { name: 'Blogs' })).toBeVisible();
}