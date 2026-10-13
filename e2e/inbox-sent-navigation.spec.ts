import { test, expect } from "@playwright/test";

test("switches all message tabs inside View1 and preserves the URL", async ({ page }) => {
  await page.goto("/chatbotfrontend/index.html");
  await expect(page.getByText("Inbox messages")).toBeVisible();
  await expect(page).toHaveURL(/#\/?$/);
  await page.screenshot({ path: "e2e/screenshots/navigation/inbox.png", fullPage: true });

  await page.getByText("Sent", { exact: true }).click();
  await expect(page.getByText("Sent messages")).toBeVisible();
  await expect(page.getByText("Inbox messages")).toBeHidden();
  await expect(page).toHaveURL(/#\/sent$/);
  await page.screenshot({ path: "e2e/screenshots/navigation/sent.png", fullPage: true });

  await page.getByText("Spam", { exact: true }).click();
  await expect(page.getByText("Spam messages")).toBeVisible();
  await expect(page).toHaveURL(/#\/spam$/);
  await page.screenshot({ path: "e2e/screenshots/navigation/spam.png", fullPage: true });

  await page.getByText("Scheduled", { exact: true }).click();
  await expect(page.getByText("Scheduled messages")).toBeVisible();
  await expect(page).toHaveURL(/#\/scheduled$/);
  await page.screenshot({ path: "e2e/screenshots/navigation/scheduled.png", fullPage: true });

  await page.goto("/chatbotfrontend/index.html");
  await expect(page.getByText("Inbox messages")).toBeVisible();
  await expect(page).toHaveURL(/#\/?$/);

  await page.goto("/chatbotfrontend/index.html#/sent");
  await expect(page.getByText("Sent messages")).toBeVisible();
});
