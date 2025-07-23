import * as React from "react"
import { cn } from "@/lib/utils"

const ChartContainer = React.forwardRef(({ config = {}, className, children, ...props }, ref) => {
  const [colors, setColors] = React.useState({})

  React.useEffect(() => {
    const root = document.documentElement
    const computedStyles = getComputedStyle(root)

    const newColors = {}
    for (const [key, value] of Object.entries(config)) {
      if (value.color) {
        const colorValue = value.color.startsWith("hsl")
          ? value.color
          : computedStyles.getPropertyValue(value.color).trim()
        newColors[`--color-${key}`] = colorValue
      }
    }
    setColors(newColors)
  }, [config])

  return (
    <div
      ref={ref}
      className={cn("w-full [&_.recharts-tooltip-cursor]:fill-black/5", className)}
      style={colors}
      {...props}
    >
      {children}
    </div>
  )
})
ChartContainer.displayName = "ChartContainer"

const ChartTooltip = React.forwardRef(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>
    {children}
  </div>
))
ChartTooltip.displayName = "ChartTooltip"

const ChartTooltipContent = React.forwardRef(({ payload, hideLabel = false, ...props }, ref) => {
  if (!payload?.length) {
    return null
  }

  return (
    <div ref={ref} className="rounded-lg border bg-background p-2 shadow-sm" {...props}>
      {payload.map((item, index) => {
        const { color, value, name } = item
        const config = item.payload.config?.[item.dataKey]

        return (
          <div key={index} className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full" style={{ background: color }} />
            {!hideLabel && <span className="text-xs text-muted-foreground">{config?.label ?? name}:</span>}
            <span className="text-xs font-medium">{value}</span>
          </div>
        )
      })}
    </div>
  )
})
ChartTooltipContent.displayName = "ChartTooltipContent"

export { ChartContainer, ChartTooltip, ChartTooltipContent }

