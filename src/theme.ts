import {
	ActionIcon,
	Avatar,
	Button,
	createTheme,
	Image,
	Modal,
	MultiSelect,
	Pagination,
	PasswordInput,
	rem,
	Select,
	TextInput,
} from '@mantine/core';

export const theme = createTheme({
	colors: {
		// 'turquoise': generateColors('#40e0d0'),
		// 'steel-pink': generateColors('#d040e0'),
		// 'sandstorm': generateColors('#e0d040'),
		// 'neutral': generateColors('#ffffff'),
	},
	fontFamily: 'Jost, serif',
	// primaryColor: 'turquoise',
	headings: {
		sizes: {
			h1: {fontSize: rem(48), fontWeight: '700', lineHeight: '1.25'},
			h2: {fontSize: rem(36), fontWeight: '600', lineHeight: '1.3'},
			h3: {fontSize: rem(28), fontWeight: '600', lineHeight: '1.35'},
			h4: {fontSize: rem(24), fontWeight: '500', lineHeight: '1.4'},
			h5: {fontSize: rem(20), fontWeight: '500', lineHeight: '1.5'},
			h6: {fontSize: rem(16), fontWeight: '400', lineHeight: '1.6'},
		},
	},
	white: '#f2f2f2',
	black: '#0d0d0d',
	// primaryShade: { light: 5, dark: 7 },
	autoContrast: true,
	radius: {
		xs: '4px',
		sm: '8px',
		md: '12px',
		lg: '16px',
		xl: '24px',
		xxl: '32px',
	},
	defaultRadius: 'lg',
	fontSizes: {
		xs: rem(12),
		sm: rem(14),
		md: rem(16),
		lg: rem(20),
		xl: rem(24),
		xxl: rem(32),
	},
	lineHeights: {
		xs: '1.25',
		sm: '1.3',
		md: '1.4',
		lg: '1.5',
		xl: '1.6',
		xxl: '1.75'
	},
	defaultGradient: {},
	components: {
		Button: Button.extend({
			styles: {
				root: {
					height: 48,
				},
			},
		}),
		TextInput: TextInput.extend({
			styles: {
				section: {width: 24, margin: '0 16px'},
				wrapper: {marginBottom: 0},
				// label: { marginBottom: 8 },
				input: {
					padding: '0 16px 0px 56px',
					height: 48,
					// marginTop: 16,
				},
				// error: { marginTop: 8 },
			},
		}),
		PasswordInput: PasswordInput.extend({
			styles: {
				section: {width: 24, margin: '0 16px'},
				wrapper: {marginBottom: 0},
				// label: { marginBottom: 8 },
				innerInput: {
					padding: '0 56px',
				},
				input: {height: 48},
				// error: { marginTop: 8 },
			},
		}),
		Textarea: TextInput.extend({
			styles: {
				section: {width: 24, margin: '0 16px'},
				input: {
					padding: '12px 16px 12px 56px',
					height: 96,
				},
			},
		}),
		ActionIcon: ActionIcon.extend({
			defaultProps: {
				size: 48,
			},
		}),
		Select: Select.extend({
			defaultProps: {
				checkIconPosition: 'right',
				comboboxProps: {shadow: 'xs'},
				searchable: true,
				allowDeselect: false,
				nothingFoundMessage: 'Nothing found...',
			},
			styles: {
				root: {
					margin: 0,
				},
				section: {width: 24, margin: '0 16px'},
				input: {
					padding: '0 16px 0px 56px',
					height: 48,
				},
				option: {
					height: 48,
					padding: 16,
				},
				dropdown: {
					padding: 0,
				},
			},
		}),
		Modal: Modal.extend({
			defaultProps: {
				withCloseButton: false,
			},
		}),
		Pagination: Pagination.extend({
			defaultProps: {},
			styles: {
				control: {
					height: 48,
					width: 48,
					borderRadius: 16,
				},
			},
		}),
		Avatar: Avatar.extend({
			defaultProps: {
				radius: 16,
				color: 'blue',
			},
		}),
		MultiSelect: MultiSelect.extend({
			defaultProps: {
				clearable: true,
				searchable: true,
				checkIconPosition: 'right',
				hidePickedOptions: true,
				comboboxProps: {shadow: 'xs'},
			},
			styles: {
				input: {
					display: 'flex',
					padding: '10px 16px 10px 56px',
					minHeight: 48, // Tinggi input
				},
				dropdown: {
					padding: 0,
				},
				section: {width: 24, margin: '0 16px'},
				option: {
					height: 48,
					padding: 16,
				},
			},
		}),
		Image: Image.extend({
			defaultProps: {
				radius: 'lg',
			},
		}),
	},
});