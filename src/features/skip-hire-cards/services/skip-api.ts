import type { Skip } from "../types/skip"

const API_BASE_URL = "https://app.wewantwaste.co.uk/api"

export async function fetchSkipsByLocation(postcode: string, area: string): Promise<Skip[]> {
  const url = `${API_BASE_URL}/skips/by-location?postcode=${encodeURIComponent(postcode)}&area=${encodeURIComponent(area)}`

  console.log("Fetching skips from:", url)

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // Add any required headers here
    },
  })

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`)
  }

  const data = await response.json()

  if (!Array.isArray(data)) {
    throw new Error("Invalid response format: expected an array of skips")
  }

  return data
}

// Default location for demo purposes
export const DEFAULT_LOCATION = {
  postcode: "LE10",
  area: "Hinckley",
}
