import React, { createContext, useContext, useState, useEffect } from "react"
import type { Extension, ExtensionFilter } from "@/types/extension"
import rawData from "@/data/data.json"
import { assignSequentialIds } from "@/lib/utils"

const initialExtensions = assignSequentialIds(rawData as Extension[])

function normalizeExtensions(data: Extension[]) {
  return data.some((item) => item.id == null) ? assignSequentialIds(data) : data
}

interface ExtensionsContextType {
  extensions: typeof initialExtensions
  filteredExtensions: Extension[]
  filter: ExtensionFilter
  setFilter: (filter: ExtensionFilter) => void
  toggleExtension: (name: string) => void
  removeExtension: (name: string) => void
}

const ExtensionsContext = createContext<ExtensionsContextType | undefined>(
  undefined
)

const LOCAL_STORAGE_KEY = "browser_extensions_data"

function loadExtensions(): Extension[] {
  if (typeof window === "undefined") {
    return initialExtensions
  }

  try {
    const saved = window.localStorage.getItem(LOCAL_STORAGE_KEY)
    if (!saved) {
      return initialExtensions
    }

    const parsed = JSON.parse(saved) as Extension[]
    return assignSequentialIds(parsed)
  } catch {
    return initialExtensions
  }
}

export function ExtensionsProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [filter, setFilter] = useState<ExtensionFilter>("all")
  const [extensions, setExtensions] = useState<typeof initialExtensions>(() =>
    loadExtensions()
  )

  // Persist state updates to localStorage
  useEffect(() => {
    try {
      window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(extensions))
    } catch {
      // ignore storage write failures
    }
  }, [extensions])

  // Toggle active status
  const toggleExtension = (name: string) => {
    setExtensions((prev) =>
      prev.map((item) =>
        item.name === name ? { ...item, isActive: !item.isActive } : item
      )
    )
  }

  // Remove extension item
  const removeExtension = (name: string) => {
    setExtensions((prev) => prev.filter((item) => item.name !== name))
  }

  // Apply filters
  const filteredExtensions = extensions.filter((item) => {
    if (filter === "active") return item.isActive
    if (filter === "inactive") return !item.isActive
    return true
  })

  return (
    <ExtensionsContext.Provider
      value={{
        extensions,
        filteredExtensions,
        filter,
        setFilter,
        toggleExtension,
        removeExtension,
      }}
    >
      {children}
    </ExtensionsContext.Provider>
  )
}

// Custom hook for accessing the state
export function useExtensions() {
  const context = useContext(ExtensionsContext)
  if (!context) {
    throw new Error("useExtensions must be used within an ExtensionsProvider")
  }
  return context
}
