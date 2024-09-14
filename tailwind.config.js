/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
  	extend: {
  		colors: {
  			'custom-color': '#37BCF8',
  			'gr-logo-blue': 'rgb(51,163,237)',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		
  		margin: {
  			'6.95%': '6.95%'
  		},
  		spacing: {
  			'1/6%': '16.667vh',
  			'1/10': '10%',
  			'1/6': '16.667%',
  			'1/8': '12.5vw',
  			navbar_calc: 'calc(16.66% + 50px)',
  			sidebar_main: '25vw',
  			form_calc: 'calc(75vh - 30px - 52.5px)',
  			'1/24': '4.1667%',
  			'200vh': '200vh',
  			'1.5px': '1.5px',
  			'49px': '49px',
  			'70px': '70px',
  			'9px': '`${count}`',
  			'67px': '67px',
  			'50px': '50px',
  			'75px': '75px',
  			'200px': '200px',
  			'25px': '25px',
  			'152px': '152px',
  			'30px': '30px',
  			main_height: 'calc(83.33vh - 40px)'
  		},
  		fontFamily: {
  			oswald: ['Oswald','sans-serif'],
  			roboto: ['Roboto', 'sans-serif'],
  			inter: ['Inter','sens-serif'],
  			mplus: ["M PLUS 1 Code", "monospace"]
  		},
  		keyframes: {
  			grow: {
  				'0%': {
  					width: '0%',
  					border: '2px solid white ',
  					borderRight: 'none',
  					borderLeft: 'none'
  				},
  				'100%': {
  					width: '100%',
  					border: '2px solid white ',
  					borderRight: 'none',
  					borderLeft: 'none'
  				}
  			},
  			logo_anim_prop: {
  				'0%': {
  					width: '20%',
  					height: '60%'
  				},
  				'100%': {
  					width: '70%'
  				}
  			},
  			fade_in_prop: {
  				'0%': {
  					opacity: '1'
  				},
  				'100%': {
  					opacity: '0.1'
  				}
  			},
  			fade_out_prop: {
  				'0%': {
  					opacity: '0.1'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			},
  			sidebar_anim_hide_prop: {
  				'0%': {
  					width: 'calc(325px + 30px)'
  				},
  				'100%': {
  					width: '0%'
  				}
  			},
  			sidebar_anim_show_prop: {
  				'0%': {
  					width: '0'
  				},
  				'100%': {
  					width: 'calc(325px + 30px)'
  				}
  			},
  			anim_hover_line_prop_0: {
  				'100%': {
  					'margin-left': '`${25+(0*132)}px`'
  				}
  			},
  			anim_hover_line_prop_1: {
  				'100%': {
  					'margin-left': '`${25+(1*132)}px`'
  				}
  			},
  			anim_hover_line_prop_2: {
  				'100%': {
  					'margin-left': '`${25+(2*132)}px`'
  				}
  			},
  			anim_hover_line_prop_3: {
  				'100%': {
  					'margin-left': '`${25+(3*132)}px`'
  				}
  			},
  			anim_phone_num_prop: {
  				'0%': {
  					left: '-226.73px'
  				},
  				'100%': {
  					left: 'calc(100%)'
  				}
  			},
  			anim_shrink_head_prop: {
  				'100%': {
  					'height': '0px'
  				}
  			},
  			anim_grow_head_prop: {
  				'0%': {
  					'height': '0px'
  				},
  				'100%': {
  					'height': '1/6%'
  				}
  			},
  			anim_shrink_line_prop: {
  				'100%': {
  					'height': '0px'
  				}
  			},
  			anim_grow_line_prop: {
  				'100%': {
  					'height': '15%'
  				}
  			}
  		},
  		backgroundPosition: {
  			pos: 'center -100px'
  		},
  		animation: {
  			expand: 'grow 1s ease-in-out 0.5s 1 forwards',
  			logo_anim: 'logo_anim_prop 0.5s linear forwards',
  			fade_in: 'fade_in_prop 0.2s ease-in-out forwards',
  			sidebar_anim_show: 'sidebar_anim_show_prop 0.2s ease-out forwards',
  			sidebar_anim_hide: 'sidebar_anim_hide_prop 0.2s ease-out forwards',
  			fade_out: 'fade_out_prop 0.2s ease-in-out forwards',
  			anim_hover_line_0: '`anim_hover_line_prop_0 1s ease-in-out forwards`',
  			anim_hover_line_1: '`anim_hover_line_prop_1 1s ease-in-out forwards`',
  			anim_hover_line_2: '`anim_hover_line_prop_2 1s ease-in-out forwards`',
  			anim_hover_line_3: '`anim_hover_line_prop_3 1s ease-in-out forwards`',
  			anim_phone_num: 'anim_phone_num_prop 6s linear infinite',
  			anim_shrink_head: 'anim_shrink_head_prop 1s  ease-in-out forwards',
  			anim_grow_head: 'anim_grow_head_prop 1s ease-in-out forwards',
  			anim_shrink_line: 'anim_shrink_line_prop 1s ease-in-out forwards',
  			anim_grow_line: 'anim_grow_line_prop 1s ease-in-out forwards'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	},
  	plugins: []
  },
    plugins: [require("tailwindcss-animate")]

}

