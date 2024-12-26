declare module '@/data/chapters.yml'

declare global {
	namespace OnePiece {
		interface Chapter {
			[key: number]: {
				ja: string
				en: string | null
			}
		}
	}
}
