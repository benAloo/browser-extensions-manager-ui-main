import { ThemeProvider } from "@/components/theme-provider"
import { ExtensionsProvider, useExtensions } from "@/context/extensions-context"
import { Navbar } from "@/components/navbar"
import {
  TypographyH1,
  TypographyH2,
  TypographyP,
} from "@/components/typography"
import { FilterTabsButton } from "@/components/extensions-tab-filter"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "./components/ui/switch"

const basePath = import.meta.env.BASE_URL
function MainDashboard() {
  const { filteredExtensions, removeExtension, toggleExtension } =
    useExtensions()

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <Navbar />
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <TypographyH1 />
        <FilterTabsButton />
      </div>
      <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredExtensions.map((item) => (
          <Card
            key={item.name}
            className="rounded-2xl border border-Neutral-200 bg-white p-3 shadow-sm dark:border-Neutral-700 dark:bg-Neutral-800"
          >
            <div className="flex gap-4">
              <img
                src={`${basePath}/${item.logo}`}
                alt={item.name}
                className="h-12 w-12"
              />

              <div>
                <CardHeader className="">
                  <TypographyH2>{item.name}</TypographyH2>
                </CardHeader>
                <CardDescription>
                  <TypographyP className="text-Neutral-600 dark:text-Neutral-300">
                    {item.description}
                  </TypographyP>
                </CardDescription>
              </div>
            </div>
            <CardFooter className="mt-10 justify-between pb-3">
              <Button
                onClick={() => removeExtension(item.name)}
                className="dark:bg-Neutral-500 border-Neutral-400 cursor-pointer rounded-full border bg-transparent px-6 py-5 text-Neutral-800 transition-colors duration-300 hover:bg-Red-700 hover:text-Neutral-0 dark:text-Neutral-200 dark:hover:bg-Red-500 dark:hover:text-Neutral-900"
              >
                Remove
              </Button>
              <Switch
                checked={item.isActive}
                onCheckedChange={() => toggleExtension(item.name)}
                className="cursor-pointer transition-colors data-checked:bg-Red-500 data-unchecked:bg-Neutral-300 dark:data-unchecked:text-Neutral-700"
              />
            </CardFooter>
          </Card>
        ))}

        {filteredExtensions.length === 0 && (
          <div className="col-span-full py-12 text-center text-Neutral-600 dark:text-Neutral-300">
            No extensions found.
          </div>
        )}
      </main>
    </div>
  )
}

export function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <ExtensionsProvider>
        <MainDashboard />
      </ExtensionsProvider>
    </ThemeProvider>
  )
}

export default App
