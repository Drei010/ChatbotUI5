Agent Directives

## Code Generation and Modification

When generating, writing, or modifying any code in this project:

1. Use the Ponytail skill for all code-related tasks
2. Apply the Ponytail skill's guidelines for code structure, style, and best practices
3. Reference the Ponytail skill documentation for language-specific conventions

## Testing and Quality Assurance

- Configure and use Playwright as the testing framework
- All new features must include Playwright test coverage
- Use Playwright CLI for automated testing and screenshot capture
- Screenshots should document:
  - UI state before and after functionality
  - Edge cases and error states
  - Cross-browser rendering (if applicable)

## Playwright CLI Setup

### Prerequisites

Confirm the following are installed:

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation Steps

1. **Install Playwright:**

   ```bash
   npm install -D @playwright/test
   ```
2. **Initialize Playwright configuration:**

   ```bash
   npx playwright install
   ```
3. **Create playwright.config.ts (or .js) if it doesn't exist:**

   - Location: Project root directory
   - Purpose: Configure test execution, browsers, and output directories
   - Reference: [Playwright Config Documentation](https://playwright.dev/docs/test-configuration)
4. **Set up screenshots directory:**

   - Configure screenshot output in `playwright.config.ts`.

### Verification

Run this command to confirm setup:

```bash
npx playwright --version
```

## Working with Playwright

- Write tests in a `tests/` directory or `*.spec.ts` files
- Run all tests: `npx playwright test`
- Run tests for a specific browser: `npx playwright test --project=chromium`
- View test reports: `npx playwright show-report`

Screenshots can be captured in tests with:

```javascript
await page.screenshot({ path: 'screenshots/my-feature.png' });
```

## Document All Changes

When modifying this AGENTS.md file:

1. Keep the structure above intact
2. Add new directives in a new section (e.g., Section 6, 7, etc.)
3. Maintain clarity and specificity in all instructions
4. Ensure changes are backward-compatible with prior directives

## Continuous Compliance

- Re-read this file at the beginning of each work session
- Ensure all outputs align with the directives above

## Quick Reference Checklist

- [ ] AGENTS.md exists in project root
- [ ] Ponytail skill is active for all code work
- [ ] Playwright is installed and configured
- [ ] Test directories and output folders are set up
- [ ] Screenshot capture is configured in playwright.config.ts
- [ ] Verification command runs without errors
