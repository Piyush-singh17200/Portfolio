import { track } from "@vercel/analytics"

/**
 * Small wrapper so analytics failures can never break a user interaction.
 */
export function trackEvent(
  name: string,
  properties?: Record<string, string | number | boolean>
) {
  if (typeof window === "undefined") return

  try {
    track(name, properties)
  } catch {
    // Analytics is optional; ignore transport errors.
  }
}
