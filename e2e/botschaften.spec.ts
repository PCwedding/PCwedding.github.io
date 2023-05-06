// @ts-check
const { test, expect } = require('@playwright/test');

test('botschaft-1 youtube loading', async ({ page }) => {
  await page.goto('https://hochzeitmetz.jan-zaydowicz.de/botschaft-1');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Botschaft-1/);
  await expect(page.frameLocator('iframe').locator('body')).toHaveText(/Botschaft 1/)
  await expect(page.frameLocator('iframe').locator('video')).toHaveCount(1)
});

test('botschaft-2 youtube loading', async ({ page }) => {
  await page.goto('https://hochzeitmetz.jan-zaydowicz.de/botschaft-2');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Botschaft-2/);
  await expect(page.frameLocator('iframe').locator('a.ytp-title-link')).toHaveText(/Botschaft 2/)
  await expect(page.frameLocator('iframe').locator('video')).toHaveCount(1)
});

test('botschaft-3 youtube loading', async ({ page }) => {
  await page.goto('https://hochzeitmetz.jan-zaydowicz.de/botschaft-3');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Botschaft-3/);
  await expect(page.frameLocator('iframe').locator('a.ytp-title-link')).toHaveText(/Botschaft 3/)
  await expect(page.frameLocator('iframe').locator('video')).toHaveCount(1)
});

test('botschaft-4 youtube loading', async ({ page }) => {
  await page.goto('https://hochzeitmetz.jan-zaydowicz.de/botschaft-4');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Botschaft-4/);
  await expect(page.frameLocator('iframe').locator('a.ytp-title-link')).toHaveText(/Botschaft 4/)
  await expect(page.frameLocator('iframe').locator('video')).toHaveCount(1)
});

test('botschaft-5 youtube loading', async ({ page }) => {
  await page.goto('https://hochzeitmetz.jan-zaydowicz.de/botschaft-5');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Botschaft-5/);
  await expect(page.frameLocator('iframe').locator('a.ytp-title-link')).toHaveText(/Botschaft 5/)
  await expect(page.frameLocator('iframe').locator('video')).toHaveCount(1)
});

test('botschaft-6 youtube loading', async ({ page }) => {
  await page.goto('https://hochzeitmetz.jan-zaydowicz.de/botschaft-6');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Botschaft-6/);
  await expect(page.frameLocator('iframe').locator('a.ytp-title-link')).toHaveText(/Botschaft 6/)
  await expect(page.frameLocator('iframe').locator('video')).toHaveCount(1)
});

test('botschaft-7 youtube loading', async ({ page }) => {
  await page.goto('https://hochzeitmetz.jan-zaydowicz.de/botschaft-7');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Botschaft-7/);
  await expect(page.frameLocator('iframe').locator('a.ytp-title-link')).toHaveText(/Botschaft 7/)
  await expect(page.frameLocator('iframe').locator('video')).toHaveCount(1)
});

test('botschaft-8 youtube loading', async ({ page }) => {
  await page.goto('https://hochzeitmetz.jan-zaydowicz.de/botschaft-8');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Botschaft-8/);
  await expect(page.frameLocator('iframe').locator('a.ytp-title-link')).toHaveText(/Botschaft 8/)
  await expect(page.frameLocator('iframe').locator('video')).toHaveCount(1)
});

test('botschaft-9 youtube loading', async ({ page }) => {
  await page.goto('https://hochzeitmetz.jan-zaydowicz.de/botschaft-9');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Botschaft-9/);
  await expect(page.frameLocator('iframe').locator('a.ytp-title-link')).toHaveText(/Botschaft 9/)
  await expect(page.frameLocator('iframe').locator('video')).toHaveCount(1)
});

test('botschaft-10 youtube loading', async ({ page }) => {
  await page.goto('https://hochzeitmetz.jan-zaydowicz.de/botschaft-10');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Botschaft-10/);
  await expect(page.frameLocator('iframe').locator('a.ytp-title-link')).toHaveText(/Botschaft 10/)
  await expect(page.frameLocator('iframe').locator('video')).toHaveCount(1)
});

test('botschaft-11 youtube loading', async ({ page }) => {
  await page.goto('https://hochzeitmetz.jan-zaydowicz.de/botschaft-11');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Botschaft-11/);
  await expect(page.frameLocator('iframe').locator('a.ytp-title-link')).toHaveText(/Botschaft 11/)
  await expect(page.frameLocator('iframe').locator('video')).toHaveCount(1)
});

test('botschaft-12 youtube loading', async ({ page }) => {
  await page.goto('https://hochzeitmetz.jan-zaydowicz.de/botschaft-12');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Botschaft-12/);
  await expect(page.frameLocator('iframe').locator('a.ytp-title-link')).toHaveText(/Botschaft 12/)
  await expect(page.frameLocator('iframe').locator('video')).toHaveCount(1)
});

test('botschaft-13 youtube loading', async ({ page }) => {
  await page.goto('https://hochzeitmetz.jan-zaydowicz.de/botschaft-13');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Botschaft-13/);
  await expect(page.frameLocator('iframe').locator('a.ytp-title-link')).toHaveText(/Botschaft 13/)
  await expect(page.frameLocator('iframe').locator('video')).toHaveCount(1)
});

test('botschaft-14 youtube loading', async ({ page }) => {
  await page.goto('https://hochzeitmetz.jan-zaydowicz.de/botschaft-14');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Botschaft-14/);
  await expect(page.frameLocator('iframe').locator('a.ytp-title-link')).toHaveText(/Botschaft 14/)
  await expect(page.frameLocator('iframe').locator('video')).toHaveCount(1)
});

test('botschaft-15 youtube loading', async ({ page }) => {
  await page.goto('https://hochzeitmetz.jan-zaydowicz.de/botschaft-15');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Botschaft-15/);
  await expect(page.frameLocator('iframe').locator('a.ytp-title-link')).toHaveText(/Botschaft 15/)
  await expect(page.frameLocator('iframe').locator('video')).toHaveCount(1)
});

test('botschaft-16 youtube loading', async ({ page }) => {
  await page.goto('https://hochzeitmetz.jan-zaydowicz.de/botschaft-16');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Botschaft-16/);
  await expect(page.frameLocator('iframe').locator('a.ytp-title-link')).toHaveText(/Botschaft 16/)
  await expect(page.frameLocator('iframe').locator('video')).toHaveCount(1)
});

test('botschaft-17 youtube loading', async ({ page }) => {
  await page.goto('https://hochzeitmetz.jan-zaydowicz.de/botschaft-17');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Botschaft-17/);
  await expect(page.frameLocator('iframe').locator('a.ytp-title-link')).toHaveText(/Botschaft 17/)
  await expect(page.frameLocator('iframe').locator('video')).toHaveCount(1)
});

test('botschaft-18 youtube loading', async ({ page }) => {
  await page.goto('https://hochzeitmetz.jan-zaydowicz.de/botschaft-18');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Botschaft-18/);
  await expect(page.frameLocator('iframe').locator('a.ytp-title-link')).toHaveText(/Botschaft 18/)
  await expect(page.frameLocator('iframe').locator('video')).toHaveCount(1)
});

test('botschaft-19 youtube loading', async ({ page }) => {
  await page.goto('https://hochzeitmetz.jan-zaydowicz.de/botschaft-19');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Botschaft-19/);
  await expect(page.frameLocator('iframe').locator('a.ytp-title-link')).toHaveText(/Botschaft 19/)
  await expect(page.frameLocator('iframe').locator('video')).toHaveCount(1)
});
