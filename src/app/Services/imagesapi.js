

// Dynamically load all images from the folder
const importAllImages = (requireContext) =>
  requireContext.keys().map(requireContext);

export const images = importAllImages(
  require.context('../images/Services Gallary/', false, /\.(png|jpe?g|svg)$/)
);


















// import i1 from '../images/Services Gallary/Day view.jpg'
// import i2 from '../images/Services Gallary/IMG-20240926-WA0005.jpg'
// import i3 from '../images/Services Gallary/IMG-20240926-WA0006.jpg'
// import i4 from '../images/Services Gallary/IMG-20240926-WA0007.jpg'
// import i5 from '../images/Services Gallary/IMG-20240926-WA0008.jpg'
// import i6 from '../images/Services Gallary/IMG-20240926-WA0009.jpg'

// export const images =[
//     {
//         image:i1,
//         alt:"Gallary Images",

//     },
//     {
//         image:i2,
//         alt:"Gallary Images",

//     },
//     {
//         image:i3,
//         alt:"Gallary Images",

//     },
//     {
//         image:i4,
//         alt:"Gallary Images",

//     },
//     {
//         image:i5,
//         alt:"Gallary Images",

//     },
//     {
//         image:i6,
//         alt:"Gallary Images",

//     },
// ]



