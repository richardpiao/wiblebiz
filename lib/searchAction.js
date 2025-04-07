export async function searchAction(searchParams) {
  const limit = parseInt(searchParams.limit, 10) || 10
  const offset = parseInt(searchParams.offset, 10) || 0
  const tab = searchParams.tab || 'CONSULT'
  const question = searchParams.question || ''
  const faqCategoryID = searchParams.faqCategoryID || ''

  const queryParams = new URLSearchParams({
    tab,
    question,
    limit: limit.toString(),
    offset: offset.toString(),
    faqCategoryID,
  })

  let baseUrl = ''
  if (typeof window === 'undefined') {
    baseUrl = process.env.BASE_URL || 'http://localhost:3000'
  } else {
    baseUrl = window.location.origin
  }
  const url = `${baseUrl}/api/faq?${queryParams.toString()}`

  try {
    const res = await fetch(url, { cache: 'no-store' })

    if (!res.ok) {
      console.error(`[FAQ API Error] Status: ${res.status}`)
      return { items: [], pageInfo: null, error: 'Server returned error.' }
    }

    const data = await res.json()
    return {
      items: data.items || [],
      pageInfo: data.pageInfo || null,
      error: null,
    }
  } catch (err) {
    console.error('[FAQ API Network Error]', err)
    return {
      items: [],
      pageInfo: null,
      error: 'Failed to fetch FAQ data.',
    }
  }
}
