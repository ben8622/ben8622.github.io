import { test, expect } from '@playwright/test';
import { env } from 'process';

const BASE_URL = env.PLAYWRIGHT_BASE_URL || 'http://localhost:5173';

test('Can navigate to a blog post', async ({ page }) => {
    // init at home page
    await page.goto('http://localhost:5173/');

    // use nav bar to get to blogs page
    await page.getByRole('link', { name: 'Blogs' }).click();
    // validate we are on blogs page
    await expect(page.getByRole('heading', { name: 'Blogs' })).toBeVisible();

    // visit a blog post
    await page.getByRole('link', { name: 'My first blog!' }).click();
    // validate we have reached the blog
    await expect(page.getByRole('heading', { name: 'My first blog!' })).toBeVisible();
    // validate it has the publish date
    await expect(page.getByText('Published on 11-21-25')).toBeVisible();
});