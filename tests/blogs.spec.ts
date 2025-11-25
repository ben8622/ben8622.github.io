import { test, expect } from '@playwright/test';
import { env } from 'process';

const BASE_URL = env.PLAYWRIGHT_BASE_URL || 'http://localhost:5173';

test('Can navigate to a blogs', async ({ page }) => {
    await page.goto(BASE_URL + '/#/blogs');
    await expect(page.getByRole('heading', { name: 'Articles' })).toBeVisible();
});