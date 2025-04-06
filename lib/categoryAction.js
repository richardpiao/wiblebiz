export async function categoryAction(searchParams) {
  const tab = searchParams.tab || 'CONSULT'

  const url = new URL(`${process.env.NEXT_PUBLIC_BASE_URL}/api/faq/category`)
  url.searchParams.set('tab', tab)

  try {
    const res = await fetch(url.toString(), { cache: 'no-store' })

    if (!res.ok) {
      console.error(
        `${res.error || '[FAQ Category API Error]'} Status: ${res.status}`
      )
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
