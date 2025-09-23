import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		fontFamily: {
			'display': ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
			'heading': ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
			'body': ['Inter', 'system-ui', 'sans-serif'],
			'modern': ['Manrope', 'system-ui', 'sans-serif'],
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Cyberpunk Accent Colors
				crimson: 'hsl(var(--crimson))',
				azure: 'hsl(var(--azure))',
				gold: 'hsl(var(--gold))',
				violet: 'hsl(var(--violet))',
				'tech-cyan': 'hsl(var(--tech-cyan))',
				'brand-green': 'hsl(var(--brand-green))',
			},
			backgroundImage: {
				'gradient-sigil': 'var(--gradient-sigil)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-card': 'var(--gradient-card)',
				'gradient-neon': 'var(--gradient-neon)',
			},
			boxShadow: {
				'glow': 'var(--shadow-glow)',
				'card': 'var(--shadow-card)',
				'elevated': 'var(--shadow-elevated)',
				'glow-crimson': '0 0 20px hsl(var(--glow-crimson)), 0 0 40px hsl(var(--glow-crimson))',
				'glow-azure': '0 0 20px hsl(var(--glow-azure)), 0 0 40px hsl(var(--glow-azure))',
				'glow-gold': '0 0 20px hsl(var(--glow-gold)), 0 0 40px hsl(var(--glow-gold))',
				'glow-violet': '0 0 20px hsl(var(--glow-violet)), 0 0 40px hsl(var(--glow-violet))',
				'glow-cyan': '0 0 20px hsl(var(--glow-cyan)), 0 0 40px hsl(var(--glow-cyan))',
				'glow-green': '0 0 20px hsl(var(--glow-green)), 0 0 40px hsl(var(--glow-green))',
			},
			borderRadius: {
				lg: 'var(--radius-lg)',
				md: 'var(--radius)',
				sm: 'calc(var(--radius) - 4px)',
				xl: 'var(--radius-xl)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'glow-pulse': {
					'0%, 100%': { boxShadow: '0 0 20px hsl(var(--glow-green))' },
					'50%': { boxShadow: '0 0 40px hsl(var(--glow-green)), 0 0 60px hsl(var(--glow-green))' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'sigil-rotate': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'badge-infuse': {
					'0%': { opacity: '0.3', filter: 'grayscale(100%)' },
					'50%': { opacity: '0.8', filter: 'grayscale(50%)', boxShadow: '0 0 20px hsl(var(--glow-azure))' },
					'100%': { opacity: '1', filter: 'grayscale(0%)', boxShadow: '0 0 30px hsl(var(--glow-azure))' }
				},
				'seal-attach': {
					'0%': { transform: 'scale(0) rotate(180deg)', opacity: '0' },
					'50%': { transform: 'scale(1.2) rotate(90deg)', opacity: '0.8' },
					'100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' }
				},
				'gradient': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite',
				'float-delayed': 'float 3s ease-in-out infinite 1.5s',
				'sigil-rotate': 'sigil-rotate 20s linear infinite',
				'badge-infuse': 'badge-infuse 1.5s ease-out forwards',
				'seal-attach': 'seal-attach 0.8s ease-out forwards',
				'gradient': 'gradient 3s ease-in-out infinite',
				'fade-in': 'fade-in 0.8s ease-out',
				'spin-slow': 'spin-slow 8s linear infinite',
				'shimmer': 'shimmer 3s ease-in-out infinite',
			},
			transitionProperty: {
				'glow': 'box-shadow, transform',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
