# Premium-Netz landing page example

A German, responsive landing page built inside F-Wilke's Preline fork. Uses the fork's actual HSAccordion, HSCollapse, and HSOverlay plugins, with locally compiled Tailwind CSS. No paid Preline Pro assets are required.

## Run

```sh
cd examples/premium-netz
npm ci
npm run build
# From the repository root:
python3 -m http.server 8080 --directory dist/premium-netz
```

Open http://localhost:8080. The build copies only the three used Preline plugins and the page assets; it does not rebuild or replace the library bundles. It writes the page to `dist/premium-netz/` and a root redirect to `dist/index.html`.

## Content and behavior

- Logo, favicon, and fiber countryside photograph are copied from premium-netz.de for this requested sample; retain appropriate rights for reuse.
- Adapted German copy and selected coverage locations are based on the existing website. No tariff prices or customer testimonials are invented.
- The availability form validates locally, then navigates to the existing Premium-Netz checker with its known postcode/city parameters. Street and house number are entered again there; no availability result is fabricated.
- Region buttons prefill postcode and city. FAQ, mobile navigation, and the chat dialog use Preline.
- Chat is explicitly labeled as a local demo with canned replies. No messages are transmitted or persisted.
- Existing customer-area and service links navigate to the current website. This example does not implement a customer portal or authentication.
- No runtime CDN, analytics, external fonts, or external JavaScript dependencies.

## Branding

Brand colors and type defaults live in `styles.css`: charcoal `#30363c`, gold `#c3a15b`, bright cyan `#00b5df`; a darker cyan `#007c9c` gives white button text stronger contrast. The page uses a system font stack. Rebuild after edits to HTML, CSS, or JS so Tailwind discovers utility classes.
