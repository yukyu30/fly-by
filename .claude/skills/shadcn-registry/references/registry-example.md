# Complete Registry Example

Full working example of a shadcn/ui registry setup.

## Directory Structure

```
my-registry/
├── registry.json
├── package.json
├── registry/
│   └── new-york/
│       ├── metric-card/
│       │   ├── metric-card.tsx
│       │   └── use-metric.ts
│       └── data-table-advanced/
│           ├── page.tsx
│           ├── data-table.tsx
│           └── columns.tsx
└── public/
    └── r/
        ├── metric-card.json
        └── data-table-advanced.json
```

## registry.json

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry.json",
  "name": "acme-ui",
  "homepage": "https://ui.acme.com",
  "items": [
    {
      "name": "metric-card",
      "type": "registry:block",
      "title": "Metric Card",
      "description": "A card component for displaying metrics with trends and sparklines.",
      "author": "Acme Team <team@acme.com>",
      "dependencies": ["recharts@^2.12.0"],
      "registryDependencies": ["card", "badge"],
      "files": [
        {
          "path": "registry/new-york/metric-card/metric-card.tsx",
          "type": "registry:component"
        },
        {
          "path": "registry/new-york/metric-card/use-metric.ts",
          "type": "registry:hook"
        }
      ],
      "cssVars": {
        "light": {
          "metric-positive": "142 76% 36%",
          "metric-negative": "0 84% 60%"
        },
        "dark": {
          "metric-positive": "142 76% 46%",
          "metric-negative": "0 84% 70%"
        }
      },
      "categories": ["dashboard", "analytics"]
    },
    {
      "name": "data-table-advanced",
      "type": "registry:block",
      "title": "Advanced Data Table",
      "description": "A data table with sorting, filtering, pagination and row selection.",
      "dependencies": ["@tanstack/react-table@^8.0.0"],
      "registryDependencies": [
        "table",
        "button",
        "input",
        "dropdown-menu",
        "checkbox"
      ],
      "files": [
        {
          "path": "registry/new-york/data-table-advanced/page.tsx",
          "type": "registry:page",
          "target": "app/data/page.tsx"
        },
        {
          "path": "registry/new-york/data-table-advanced/data-table.tsx",
          "type": "registry:component"
        },
        {
          "path": "registry/new-york/data-table-advanced/columns.tsx",
          "type": "registry:component"
        }
      ],
      "categories": ["table", "data"]
    }
  ]
}
```

## Component Example: metric-card.tsx

```tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { useMetric } from "@/registry/new-york/metric-card/use-metric"

interface MetricCardProps {
  title: string
  value: number
  previousValue?: number
  format?: "number" | "currency" | "percent"
}

export function MetricCard({
  title,
  value,
  previousValue,
  format = "number"
}: MetricCardProps) {
  const { formattedValue, trend, trendLabel } = useMetric(value, previousValue, format)

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">{formattedValue}</span>
          {trend && (
            <Badge
              variant="outline"
              className={cn(
                trend === "up" && "text-[hsl(var(--metric-positive))]",
                trend === "down" && "text-[hsl(var(--metric-negative))]"
              )}
            >
              {trendLabel}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
```

## Hook Example: use-metric.ts

```ts
import { useMemo } from "react"

type Format = "number" | "currency" | "percent"
type Trend = "up" | "down" | null

export function useMetric(
  value: number,
  previousValue?: number,
  format: Format = "number"
) {
  return useMemo(() => {
    const formattedValue = formatValue(value, format)
    
    if (previousValue === undefined) {
      return { formattedValue, trend: null, trendLabel: null }
    }

    const change = ((value - previousValue) / previousValue) * 100
    const trend: Trend = change > 0 ? "up" : change < 0 ? "down" : null
    const trendLabel = trend ? `${change > 0 ? "+" : ""}${change.toFixed(1)}%` : null

    return { formattedValue, trend, trendLabel }
  }, [value, previousValue, format])
}

function formatValue(value: number, format: Format): string {
  switch (format) {
    case "currency":
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
      }).format(value)
    case "percent":
      return `${value.toFixed(1)}%`
    default:
      return new Intl.NumberFormat("en-US").format(value)
  }
}
```

## package.json Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "registry:build": "shadcn build",
    "registry:serve": "npx serve public"
  },
  "dependencies": {
    "shadcn": "^2.0.0"
  }
}
```

## Installation Commands

```bash
# Install from URL
npx shadcn add https://ui.acme.com/r/metric-card.json

# Install with namespace (after configuring components.json)
npx shadcn add @acme/metric-card

# Install multiple
npx shadcn add @acme/metric-card @acme/data-table-advanced
```

## User's components.json

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "app/globals.css"
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "registries": {
    "@acme": "https://ui.acme.com/r/{name}.json"
  }
}
```
