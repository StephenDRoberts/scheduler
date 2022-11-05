export const sortByDateAsc = (array, attributeName) => array.sort((first, second) => {
  const firstDate = new Date(first[attributeName])
  const secondDate = new Date(second[attributeName])

  return firstDate - secondDate
})
