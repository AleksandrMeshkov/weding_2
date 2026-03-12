interface ImportMetaEnv {
	readonly VITE_RSVP_EMAIL?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

declare module '*.mp3';
declare module '*.png';
