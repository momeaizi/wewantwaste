import type { Skip, SkipWithDetails } from "../types/skip"

// Calculate total price including VAT
export function calculateTotalPrice(skip: Skip): string {
  const vatAmount = (skip.price_before_vat * skip.vat) / 100
  const totalPrice = skip.price_before_vat + vatAmount
  return `£${Math.round(totalPrice)}`
}

// Get skip dimensions based on size
export function getSkipDimensions(size: number): string {
  const dimensions: Record<number, string> = {
    2: "1.5m × 1.0m × 0.8m",
    4: "1.8m × 1.2m × 1.2m",
    5: "1.8m × 1.5m × 1.2m",
    6: "2.1m × 1.5m × 1.2m",
    8: "3.4m × 1.7m × 1.2m",
    10: "3.7m × 1.8m × 1.4m",
    12: "3.9m × 1.8m × 1.8m",
    14: "4.1m × 1.8m × 1.8m",
    16: "4.3m × 1.8m × 1.8m",
    20: "5.2m × 2.3m × 1.8m",
    40: "7.5m × 2.3m × 2.3m",
  }

  return dimensions[size] || "Dimensions not available"
}

// Get skip capacity based on size
export function getSkipCapacity(size: number): string {
  const capacities: Record<number, string> = {
    2: "20-25 bin bags",
    4: "40-45 bin bags",
    5: "50-60 bin bags",
    6: "60-70 bin bags",
    8: "80-90 bin bags",
    10: "100-120 bin bags",
    12: "120-140 bin bags",
    14: "140-160 bin bags",
    16: "160-180 bin bags",
    20: "200-220 bin bags",
    40: "400+ bin bags",
  }

  return capacities[size] || "Capacity not available"
}

// Get best uses for skip based on size
export function getSkipUses(size: number): string[] {
  const uses: Record<number, string[]> = {
    2: ["Small clearouts", "Garden waste", "Home decluttering"],
    4: ["Small renovations", "Garden waste", "Household clearance"],
    5: ["Kitchen renovations", "Bathroom refits", "Office clearance"],
    6: ["Home renovations", "Garden landscaping", "Commercial waste"],
    8: ["Major renovations", "Construction debris", "Large clearances"],
    10: ["Commercial projects", "Large construction", "Factory clearance"],
    12: ["Industrial use", "Major construction", "Large commercial projects"],
    14: ["Heavy construction", "Industrial waste", "Large site clearance"],
    16: ["Commercial demolition", "Industrial waste", "Large site clearance"],
    20: ["Major demolition", "Construction sites", "Industrial clearance"],
    40: ["Large demolition", "Major construction sites", "Industrial projects"],
  }

  return uses[size] || ["General waste"]
}

// Enhance skip data with additional details
export function enhanceSkipData(skips: Skip[]): SkipWithDetails[] {
  // Find the most popular skip size (usually 4 or 6 yards)
  const popularSizes = [4, 6]

  return skips.map((skip) => {
    return {
      ...skip,
      dimensions: getSkipDimensions(skip.size),
      capacity: getSkipCapacity(skip.size),
      bestFor: getSkipUses(skip.size),
      imageUrl: `https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${skip.size}-yarder-skip.jpg`,
      popular: popularSizes.includes(skip.size),
    }
  })
}
