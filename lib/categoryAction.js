export async function categoryAction(searchParams) {
  const tab = searchParams.tab || 'CONSULT'

  let baseUrl = ''
  if (typeof window === 'undefined') {
    baseUrl = process.env.BASE_URL || 'http://localhost:3000'
  } else {
    baseUrl = window.location.origin
  }
  const url = new URL('/api/faq/category', baseUrl)
  url.searchParams.set('tab', tab)

  try {
    const res = await fetch(url, { cache: 'no-store' })

    if (!res.ok) {
      console.error(`[FAQ Category API Error] Status: ${res.status}`)
      return { categories: [], error: 'Server returned error.' }
    }

    const data = await res.json()

    return {
      categories: data.categories || [],
      error: null,
    }
  } catch (err) {
    console.error('[FAQ Category API Network Error]', err)
    return {
      categories: [],
      error: 'Failed to fetch category data.',
    }
  }
}
