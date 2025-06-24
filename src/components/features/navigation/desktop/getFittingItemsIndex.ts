// getFittingItemsIndex: Calculate which nav items fit, rest go to 'More'
export function getFittingItemsIndex(totalWidth: number, itemsWidth: number[], moreItemWidth?: number) {
  let widthLeft = Math.floor(totalWidth);
  const moreIndex = itemsWidth.findIndex((itemWidth) => {
    if (itemWidth) {
      widthLeft = widthLeft - itemWidth;
      return widthLeft <= 0;
    }
    return false;
  });
  if (moreIndex === -1) {
    return itemsWidth.length;
  }
  const lastItemWidth = itemsWidth[moreIndex];
  if (moreItemWidth && lastItemWidth && widthLeft + lastItemWidth < moreItemWidth) {
    return moreIndex - 1;
  }
  return moreIndex;
}
