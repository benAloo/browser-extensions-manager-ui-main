import { useExtensions } from "@/context/extensions-context"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function FilterTabsButton() {
  const { filter, setFilter } = useExtensions()

  return (
    <Tabs
      value={filter}
      onValueChange={(value) =>
        setFilter(value as "all" | "active" | "inactive")
      }
    >
      <TabsList className="h-auto gap-2 p-0">
        <TabsTrigger
          value="all"
          className="cursor-pointer rounded-full border border-Neutral-200 bg-white px-6 py-5 text-base font-medium text-Neutral-600 shadow-none transition-all hover:bg-Neutral-0 hover:text-Neutral-300 dark:border-Neutral-700 dark:bg-Neutral-800 dark:text-Neutral-300 dark:hover:bg-Neutral-600 data-active:border-transparent data-active:bg-Red-500 data-active:text-Neutral-0 data-active:shadow-md hover:data-active:bg-Red-700 hover:data-active:text-Neutral-0 dark:data-active:bg-Red-500 dark:data-active:text-Neutral-900 dark:hover:data-active:bg-Red-700"
        >
          All
        </TabsTrigger>
        <TabsTrigger
          value="active"
          className="cursor-pointer rounded-full border border-Neutral-200 bg-white px-6 py-5 text-base font-medium text-Neutral-600 shadow-none transition-all hover:bg-Neutral-0 hover:text-Neutral-300 dark:border-Neutral-700 dark:bg-Neutral-800 dark:text-Neutral-300 dark:hover:bg-Neutral-600 data-active:border-transparent data-active:bg-Red-500 data-active:text-Neutral-0 data-active:shadow-md hover:data-active:bg-Red-700 hover:data-active:text-Neutral-0 dark:data-active:bg-Red-500 dark:data-active:text-Neutral-900 dark:hover:data-active:bg-Red-700"
        >
          Active
        </TabsTrigger>
        <TabsTrigger
          value="inactive"
          className="cursor-pointer rounded-full border border-Neutral-200 bg-white px-6 py-5 text-base font-medium text-Neutral-600 shadow-none transition-all hover:bg-Neutral-0 hover:text-Neutral-300 dark:border-Neutral-700 dark:bg-Neutral-800 dark:text-Neutral-300 dark:hover:bg-Neutral-600 data-active:border-transparent data-active:bg-Red-500 data-active:text-Neutral-0 data-active:shadow-md hover:data-active:bg-Red-700 hover:data-active:text-Neutral-0 dark:data-active:bg-Red-500 dark:data-active:text-Neutral-900 dark:hover:data-active:bg-Red-700"
        >
          Inactive
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
