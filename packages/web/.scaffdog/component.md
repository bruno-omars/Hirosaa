---
name: "component"
description: "component of description"
message: "Please enter any text."
root: "."
output: "**/*"
ignore: []
---

# `{{ input | pascal }}/index.tsx`

```typescript
export * from "./{{ input | pascal }}";
```

# `{{ input | pascal }}/{{ input | pascal }}.tsx`

```typescript
import React from "react";

export type Props = {
}

export const {{ input | pascal }}: React.FC<Props> = () => {
  return (

  )
}
```
