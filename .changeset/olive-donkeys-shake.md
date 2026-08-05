---
"stera-ui": patch
---

Fix orientation and pressed-state styling in registry components

Several components used Tailwind variants that didn't match the data attributes Base UI actually emits, so the rules compiled to selectors that never matched:

- **Scroll Area** — the scrollbar used `data-horizontal:` / `data-vertical:` variants and therefore rendered with no width or height. Now uses `data-[orientation=…]:`. Also adds a Scroll Area docs page and examples, which is why this went unnoticed.
- **Toggle Group** — the root and item classNames used dead `data-vertical:` and `group-data-horizontal/toggle-group:` variants, breaking vertical layout and segmented corner rounding in both orientations. The selected-segment background used `data-[state=on]`, but Base UI's Toggle emits `data-pressed`.
- **Toggle Group / Tabs** — both destructured `orientation` and re-emitted it only as a hand-written `data-orientation` attribute without forwarding it to the underlying primitive. Base UI's internal orientation state stayed `horizontal`, so vertical layouts had horizontal arrow-key navigation. The prop is now forwarded and Base UI emits `data-orientation` itself.
