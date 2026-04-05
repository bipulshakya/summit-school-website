# Summit School Website

Official website source for Summit English Boarding School.

## Project Structure

- `docs/index.html` - Homepage
- `docs/aboutus.html` - About Us page
- `docs/notice.html` - Notices and announcements
- `docs/message.html` - Leadership messages
- `docs/management.html` - Management information
- `docs/staff.html` - Staff page
- `docs/contact.html` - Contact page
- `docs/style.css` - Shared styles
- `docs/script.js` - Shared frontend scripts
- `docs/admin/` - Admin pages
- `docs/imges/` - Local image assets (including logo)

## Recent Updates

- Fixed logo visibility on inner pages by switching to local logo asset.
- Fixed homepage navbar logo alignment.
- Fixed footer logo visibility across pages.

## Run Locally

This is a static website. You can open the pages directly in your browser, or run a local static server.

### Option 1: Open directly

Open `docs/index.html` in a browser.

### Option 2: Local server (Node)

From the repository root:

```bash
npx serve docs
```

Then open the printed local URL.

## Deployment

Deploy the contents of the `docs/` directory to any static hosting provider.
