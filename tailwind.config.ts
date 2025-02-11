import type { Config } from 'tailwindcss'

const config = {
	important: true,
	darkMode: 'class',
	content: [
		'./src/**/*.{svelte,ts}',
	],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			fontSize: {
				xs: ['0.75rem', { lineHeight: '1rem' }],
				sm: ['0.875rem', { lineHeight: '1.5rem' }],
				base: ['1rem', { lineHeight: '1.75rem' }],
				lg: ['1.125rem', { lineHeight: '1.75rem' }],
				xl: ['1.25rem', { lineHeight: '2rem' }],
				'2xl': ['1.5rem', { lineHeight: '2.25rem' }],
				'3xl': ['1.75rem', { lineHeight: '2.25rem' }],
				'4xl': ['2rem', { lineHeight: '2.5rem' }],
				'5xl': ['2.5rem', { lineHeight: '3rem' }],
				'6xl': ['3rem', { lineHeight: '3.5rem' }],
				'7xl': ['4rem', { lineHeight: '4.5rem' }],
			},
			fontFamily: {
				sans: ['var(--font-inter)'],
				mono: ['var(--font-roboto-mono)'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#000000',
					foreground: '#fff',
				},
				secondary: {
					DEFAULT: '#111111',
					foreground: '#fff',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: '#494949',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: '#ff5d73',
					foreground: 'hsl(var(--accent-foreground))',
					muted: 'hsl(var(--accent-muted))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'4xl': '2.5rem',
			},

			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fadeIn 0.5s ease-in-out',
			},
		},
	},
	plugins: [],
} satisfies Config

export default config
