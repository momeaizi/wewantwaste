import { useState, useEffect } from "react"
import type { SkipWithDetails } from "../types/skip"
import { enhanceSkipData } from "../utils/skip-helpers"
import { fetchSkipsByLocation } from "../services/skip-api"

interface UseSkipDataProps {
  postcode: string
  area: string
}

export function useSkipData({ postcode, area }: UseSkipDataProps) {
  const [skips, setSkips] = useState<SkipWithDetails[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const loadSkips = async () => {
    try {
      setLoading(true)
      setError(null)

      const data = await fetchSkipsByLocation(postcode, area)
      const enhancedData = enhanceSkipData(data)
      enhancedData.sort((a, b) => a.size - b.size)

      setSkips(enhancedData)
      console.log("Loaded skips:", enhancedData)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to fetch skip data"
      setError(errorMessage)
      console.error("Error fetching skips:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadSkips()
  }, [postcode, area])

  return {
    skips,
    loading,
    error,
    refetch: loadSkips,
  }
}
