import chapters from '@/data/chapters.yml'
import type { RequestHandler } from "./$types"

export const GET: RequestHandler = async ({  }) => {
  return Response.json(chapters)
}
