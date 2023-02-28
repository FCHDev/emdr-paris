/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                bleu: '#0B1F4E',
                vert: '#0D5B6A',
                orange: '#E1946B',
                vertflash: '#1FC3AA',
            },
            fontFamily: {
                'classic': ['Montserrat'],
                'title': ['Playfair Display'],
                'hand': ['Dancing Script'],
            }
        },
    },
    plugins: [require('@headlessui/tailwindcss')],
}
