---
"stera-ui": minor
---

Split the shipped stylesheet into concern-based partials.

`init` now writes a `ui/` folder next to your `globals.css` instead of a single
`stera-ui.css`:

```text
styles/
├── globals.css          # yours — imports ui/index.css
└── ui/
    ├── index.css        # wires the partials together
    ├── colors.css       # color tokens, light + dark
    ├── typography.css   # type tokens + st-* utilities
    ├── scrollbar.css
    ├── scroll-fade.css
    └── base.css
```

- **Colors and typography are yours.** `add globals` refreshes the other
  partials in place but asks before replacing `ui/colors.css` or
  `ui/typography.css`, so theme edits and font setup survive a refresh. Pass
  `--overwrite` to take the registry version anyway. This fixes font variables
  and `@font-face` imports being silently reverted by `add globals`.
- **Nothing is branded.** No shipped path contains `stera`, so the styles read
  as part of your project.
- **Existing projects migrate automatically.** The first `add globals` after
  upgrading removes the old `stera-ui.css`, swaps its `@import` for
  `@import "./ui/index.css"`, and writes the `ui/` folder.
