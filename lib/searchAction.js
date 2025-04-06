export async function searchAction(searchParams) {
  const limit = parseInt(searchParams.limit, 10) || 10
  const offset = parseInt(searchParams.offset, 10) || 0
  const tab = searchParams.tab || 'CONSULT'
  const question = searchParams.question || ''
  const faqCategoryID = searchParams.faqCategoryID || ''

  const url = new URL(`${process.env.NEXT_PUBLIC_BASE_URL}/api/faq`)
  url.searchParams.set('tab', tab)
  url.searchParams.set('question', question)
  url.searchParams.set('limit', limit)
  url.searchParams.set('offset', offset)
  url.searchParams.set('faqCategoryID', faqCategoryID)

  try {
    const res = await fetch(url.toString(), { cache: 'no-store' })

    if (!res.ok) {
      console.error(`${res.error || '[FAQ API Error] Status'}: ${res.status}`)
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
