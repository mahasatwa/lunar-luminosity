/**
 * Utility to determine which nav items fit inline and which go into the 'More' dropdown.
 * Returns an object with visible and overflow arrays of NavItem ids.
 */
import type { NavItem } from '@/types/navigation';

export function getOverflowItems(
  items: NavItem[],
  containerWidth: number,
  itemWidths: number[],
  moreButtonWidth: number
) {
  let total = 0;
  let visible: number[] = [];
  let overflow: number[] = [];
  for (let i = 0; i < items.length; i++) {
    total += itemWidths[i];
    if (total + moreButtonWidth > containerWidth) {
      overflow = items.slice(i).map((item, idx) => i + idx);
      break;
    } else {
      visible.push(i);
    }
  }
  return { visible, overflow };
}
