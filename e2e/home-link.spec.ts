import { test, expect } from "@playwright/test";

test("home link", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.click('a[href="/"]');
  await expect(page.locator('body')).toContainText("Dashboard");
});
