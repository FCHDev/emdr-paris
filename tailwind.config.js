/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                bleu: '#0B1F4E',
                vert: '#0D5B6A',
                orange: '#E1946B',
                orangePale: '#fff6ed',
                vertflash: '#1FC3AA',
                vertflashPale: '#DCF9F5',
                whitePale: '#F5F5F5',
            },

            fontFamily: {
                'classic': ['Montserrat'],
                'title': ['Playfair Display'],
                'hand': ['Dancing Script'],
            },
            keyframes: {
                appear: {
                    '0%': {opacity: '0'},
                    '100%': {opacity: '100'},
                }
            },
            animation: {
                appear: 'appear 0.5s ease-in',
            }
        },

    },

    plugins: [require('@headlessui/tailwindcss')],
}
