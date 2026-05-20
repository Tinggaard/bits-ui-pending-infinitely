# Steps to reproduce

> [!NOTE]
> This is the branch using svelte `5.55.5`, which is KNOWN GOOD.

```
pnpm i
pnpm dev
```

Head to <http://localhost:5173>

Observe that the date is not initialized properly (though the time zone is there - so something works under the hood).

There are a few ways to "overcome" this.

Either remove one of the two boundaries (one in `+layout.svelte`, or the (empty) one in `$lib/components/Boundary.svelte`).

Also, if the value is set initially (before `onMount`), it displays correctly.

---

I have not had the time to test if this can be reproduced with something else (non external library).
