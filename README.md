# Steps to reproduce

```
pnpm i
pnpm build
pnpm preview
```

Head to <http://localhost:4173>

Now, observe that the pending snippet to `<TableView />` is _always_ rendered.

This behavior disappears when removing the `compatibility.componentApi = 4` option in `svelte.config.js`.

Furthermore, this behavior does not reproduce on the dev server.
