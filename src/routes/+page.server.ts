import chapters from '@/data/chapters.yml'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
	return { chapters }
}
