import { test, expect } from "@playwright/test";

test("send hello world message", async ({ page }) => {
  await page.goto("/chatbotfrontend/index.html");
  await page.screenshot({ path: "e2e/screenshots/hello-world/01-page-loaded.png", fullPage: true });

  await page.getByRole("textbox", { name: "Type your message..." }).fill("hello world");
  await page.screenshot({ path: "e2e/screenshots/hello-world/02-typed-hello-world.png", fullPage: true });

  await page.getByRole("button", { name: "Send" }).click();
  await expect(page.getByText("hello world")).toBeVisible();
  await page.screenshot({ path: "e2e/screenshots/hello-world/03-message-sent.png", fullPage: true });
});
