"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

type Theme = "light" | "dark" | "system"

interface ThemeContextProps {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: "system",
  setTheme: () => {},
})

export const ThemeProvider = ({
  attribute,
  defaultTheme,
  enableSystem,
  disableTransitionOnChange,
  children,
}: {
  attribute: string
  defaultTheme: Theme
  enableSystem: boolean
  disableTransitionOnChange: boolean
  children: React.ReactNode
}) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme") as Theme | null
      if (storedTheme) {
        return storedTheme
      } else {
        return defaultTheme
      }
    }
    return defaultTheme
  })

  useEffect(() => {
    const root = document.documentElement
    
    if (theme === "system" && enableSystem) {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      root.setAttribute(attribute, systemTheme)
    } else {
      root.setAttribute(attribute, theme)
    }

    localStorage.setItem("theme", theme)
  }, [theme, attribute, enableSystem])

  // Add listener for system theme changes
  useEffect(() => {
    if (enableSystem && theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
      
      const handleChange = () => {
        const newTheme = mediaQuery.matches ? "dark" : "light"
        document.documentElement.setAttribute(attribute, newTheme)
      }
      
      mediaQuery.addEventListener("change", handleChange)
      return () => mediaQuery.removeEventListener("change", handleChange)
    }
  }, [theme, attribute, enableSystem])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)
