# Website font approach

The corporate website uses a system font stack to keep production builds independent from external font fetching.

Current stack:

```css
-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif
```

Do not add font binaries or switch to `next/font/google`. Only use `next/font/local` if licensed local font files already exist and the project intentionally adopts them.
