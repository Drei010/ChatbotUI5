import { test, expect } from "@playwright/test";

test("can input text and send message", async ({ page }) => {
  await page.goto("/chatbotfrontend/index.html");

  await page.getByRole("textbox", { name: "Type your message..." }).fill("Hello AI");
  await page.getByRole("button", { name: "Send" }).click();

  await expect(page.getByText("Hello AI")).toBeVisible();
});

test("can send message with Enter key", async ({ page }) => {
  await page.goto("/chatbotfrontend/index.html");

  await page.getByRole("textbox", { name: "Type your message..." }).click();
  await page.getByRole("textbox", { name: "Type your message..." }).fill("Hi AI");
  await page.getByRole("textbox", { name: "Type your message..." }).press("Enter");

  await expect(page.getByText("Hi AI")).toBeVisible();
});
