let words: string[] = [
    'COMPUTADORA',
    'AGUACATE',
    'PAPAYA',
    'ANIMAL',
    'VETERINARIO',
    'CELULAR',
    'TELEFONO',
    'PANTALLA',
    'PERRO',
    'GATO',
    'VASO',
    'VENTILADOR',
    'CALOR',
    'FRIO',
    'PLAYA',
    'UVA',
    'PELUSA'
];


export const getRandomWord = () => {

    const randomIndex = Math.floor( Math.random() * words.length ) ;
    return words[randomIndex];
}
