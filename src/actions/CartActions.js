export const addToCart = (item) => {
  console.log(`Action: adding ${item} to cart`)
  return {
    type: `ADD_ITEM`
    item
  }
}
