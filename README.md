Learnings
=========

1. Why we use or why popular frameworks go with min-width media queries rather than max-width query even though max-width seems more natural to mind?

Ans: The reason is because mobile styles need very little css as they are stacked-up right! The complexity increases when we move to larger devices, so code should also scale according to that => write extra code when you need it, Right!

But in the case of max-width what happens - you write all the complex code for that element and using max-width you keep removing the extra properties => uneccessary code for smaller devices.

2. `node-sass` is **Depricated**, don't use it, Use the `sass` package instead. But what I understood is always do the research, then only proceed.

```js
const sass = require("gulp-sass")(require("sass"));
```