import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"

const basePath = import.meta.env.BASE_URL

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="outline"
      size="icon"
      className="h-12 w-12 cursor-pointer border-Neutral-200 transition-all hover:bg-Neutral-100 dark:border-Neutral-700 dark:bg-Neutral-700 dark:hover:bg-Neutral-600"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle Theme"
    >
      {/* Sun Icon (visible in dark mode) */}
      <img
        src={`${basePath}/icon-sun.svg`}
        alt=""
        className="scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
      />
      {/* Moon Icon (visible in light mode) */}

      <img
        src={`${basePath}/icon-moon.svg`}
        alt=""
        className="absolute scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
      />
    </Button>
  )
}
