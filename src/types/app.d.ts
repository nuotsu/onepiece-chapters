// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			chapters: OnePiece.Chapter
		}
		// interface PageState {}
		// interface Platform {}
	}

	namespace OnePiece {
		interface Chapter {
			[key: number]: {
				ja: string
				en: string | null
			}
		}
	}
}

export {}
