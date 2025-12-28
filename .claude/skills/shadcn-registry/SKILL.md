---
name: shadcn-registry
description: Create and manage shadcn/ui component registries. Use when building custom component registries, distributing React components via shadcn CLI, creating registry.json or registry-item.json files, or setting up a component distribution system for shadcn/ui compatible projects.
---

# shadcn/ui Registry Skill

Create and manage custom component registries compatible with the `shadcn` CLI.

## Quick Start

1. Create `registry.json` at project root
2. Add components to `registry/[STYLE]/[NAME]/` directory
3. Run `shadcn build` to generate JSON files
4. Serve at `/r/[NAME].json`

## registry.json Structure

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry.json",
  "name": "my-registry",
  "homepage": "https://example.com",
  "items": []
}
```

## Registry Item Types

| Type | Use Case | Target Path |
|------|----------|-------------|
| `registry:block` | Complex multi-file components | components/ |
| `registry:component` | Simple components | components/ |
| `registry:ui` | UI primitives | components/ui/ |
| `registry:hook` | Custom hooks | hooks/ |
| `registry:lib` | Utilities | lib/ |
| `registry:page` | Routes (requires `target`) | specified target |
| `registry:file` | Config/misc (requires `target`) | specified target |
| `registry:style` | Style presets | - |
| `registry:theme` | Themes | - |
| `registry:item` | Universal items | - |

## Adding a Component

### 1. Create Component File

```
registry/new-york/my-component/
└── my-component.tsx
```

### 2. Add to registry.json

```json
{
  "items": [
    {
      "name": "my-component",
      "type": "registry:block",
      "title": "My Component",
      "description": "Description for LLMs and users.",
      "dependencies": ["zod@^3.20.0"],
      "registryDependencies": ["button", "input"],
      "files": [
        {
          "path": "registry/new-york/my-component/my-component.tsx",
          "type": "registry:component"
        }
      ]
    }
  ]
}
```

## File Properties

```json
{
  "path": "registry/new-york/component/file.tsx",
  "type": "registry:component",
  "target": "app/page.tsx"  // Required for registry:page, registry:file
}
```

Use `~` for project root: `"target": "~/config.js"`

## Dependencies

```json
{
  "dependencies": ["zod", "motion@^11.0.0"],
  "registryDependencies": [
    "button",
    "@acme/custom-input",
    "https://example.com/r/component.json"
  ]
}
```

## CSS Variables

```json
{
  "cssVars": {
    "theme": { "font-heading": "Inter, sans-serif" },
    "light": { "brand": "220 90% 50%" },
    "dark": { "brand": "220 90% 60%" }
  }
}
```

## CSS Rules

```json
{
  "css": {
    "@layer base": { "body": { "font-size": "1rem" } },
    "@utility text-gradient": { "background": "linear-gradient(...)" },
    "@keyframes fade": { "from": { "opacity": "0" } }
  }
}
```

## Environment Variables

```json
{
  "envVars": {
    "NEXT_PUBLIC_API_URL": "http://localhost:3000",
    "API_KEY": ""
  }
}
```

## Build & Serve

```bash
# package.json
"scripts": {
  "registry:build": "shadcn build"
}

# Build
pnpm registry:build

# Output: public/r/[name].json
```

## Installation

```bash
# By URL
npx shadcn add https://example.com/r/my-component.json

# By namespace (if configured)
npx shadcn add @my-registry/my-component
```

## Namespace Configuration

In user's `components.json`:

```json
{
  "registries": {
    "@my-registry": "https://example.com/r/{name}.json"
  }
}
```

## Guidelines

- Use `registry/[STYLE]/[NAME]/` directory structure
- Always set `name`, `type`, `title`, `description`, `files`
- Use `@/registry/` imports in component code
- List all `registryDependencies` for shadcn components
- Include proper `dependencies` with versions
- Add descriptive `title` and `description` for LLM discoverability

## Full Example

See `references/registry-example.md` for complete registry setup.
