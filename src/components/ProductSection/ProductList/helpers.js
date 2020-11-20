export const PRODUCT_CARD_WIDTH = 305 // card 265px + padding 2*20px
export const ARROWS_WIDTH = 130

// function to determine number of products that can fit on screen
// maximum allowed number is 4

export function calculateItemsToShow(parentWidth) {
  const number = Math.floor((parentWidth - ARROWS_WIDTH) / PRODUCT_CARD_WIDTH)
  if (number < 1) {
    return 1
  }
  if (number > 4) {
    return 4
  }
  return number
}
