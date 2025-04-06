import { consultListData, usageListData } from './mockData/faqData'
import { consultData, usageData } from './mockData/categoryData'

export async function GET(request) {
  const { searchParams } = new URL(request.url)

  const tab = searchParams.get('tab')
  const limitParam = searchParams.get('limit')
  const offsetParam = searchParams.get('offset')
  const question = searchParams.get('question')?.trim().toLowerCase() || ''
  const faqCategoryID = searchParams.get('faqCategoryID')

  const validTabs = ['CONSULT', 'USAGE']
  if (!validTabs.includes(tab)) {
    return Response.json(
      {
        error: "Invalid 'tab'. Must be CONSULT or USAGE.",
        code: 'INVALID_TAB',
      },
      { status: 400 }
    )
  }

  if (limitParam === null) {
    return Response.json(
      { error: "'limit' parameter is required.", code: 'LIMIT_REQUIRED' },
      { status: 400 }
    )
  }

  const limit = parseInt(limitParam, 10)
  if (isNaN(limit) || limit <= 0 || !Number.isInteger(limit)) {
    return Response.json(
      { error: "'limit' must be a positive integer.", code: 'INVALID_LIMIT' },
      { status: 400 }
    )
  }

  if (offsetParam === null) {
    return Response.json(
      { error: "'offset' parameter is required.", code: 'OFFSET_REQUIRED' },
      { status: 400 }
    )
  }

  const offset = parseInt(offsetParam, 10)
  if (isNaN(offset) || offset < 0 || !Number.isInteger(offset)) {
    return Response.json(
      {
        error: "'offset' must be a non-negative integer.",
        code: 'INVALID_OFFSET',
      },
      { status: 400 }
    )
  }

  if (question && question.length < 2) {
    return Response.json(
      {
        error: "'question' must be at least 2 characters.",
        code: 'SHORT_QUERY',
      },
      { status: 400 }
    )
  }

  const dataSet = tab === 'CONSULT' ? consultListData : usageListData
  const categoryList = tab === 'CONSULT' ? consultData : usageData

  let cat = null
  if (faqCategoryID) {
    const foundCategory = categoryList.find(
      (cat) => cat.categoryID === faqCategoryID
    )

    if (!foundCategory) {
      return Response.json(
        { error: "Invalid 'faqCategoryID'.", code: 'INVALID_CATEGORY_ID' },
        { status: 400 }
      )
    }
    cat = foundCategory.name
  }

  const filtered = dataSet.filter((item) => {
    const matchesQuestion = item.question.toLowerCase().includes(question)

    const matchesCategory =
      !cat ||
      (tab === 'CONSULT'
        ? item.subCategoryName === cat
        : item.categoryName === cat)

    return matchesQuestion && matchesCategory
  })

  const paginated = filtered.slice(offset, offset + limit)
  const total = filtered.length

  const pageInfo = {
    totalRecord: total,
    offset,
    limit,
    prevOffset: offset,
    nextOffset: offset + limit,
  }

  return Response.json({
    pageInfo,
    items: paginated,
  })
}
