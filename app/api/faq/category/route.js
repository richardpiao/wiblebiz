import { consultData, usageData } from '../mockData/categoryData'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const tab = searchParams.get('tab')

  const validTabs = ['CONSULT', 'USAGE']

  if (!tab || !validTabs.includes(tab)) {
    return Response.json(
      { error: "Invalid 'tab'. Must be either CONSULT or USAGE." },
      { status: 400 }
    )
  }

  const data = tab === 'CONSULT' ? consultData : usageData

  return Response.json({
    tab,
    count: data.length,
    categories: data,
  })
}
