import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function normalize(value, min, max) {
  if (min === max) {
    return 0; // Avoid division by zero
  }

  return (value - min) / (max - min);
}

export function getVisibleElementsCount(container) {
  // const container = document.querySelector('.container');
  const containerWidth = container?.offsetWidth;
  const childElements = container?.children;
  let visibleCount = 0;
  let currentWidth = 0;

  for (let i = 0; i < childElements?.length; i++) {
    const elementWidth = childElements[i]?.offsetWidth;
    currentWidth += elementWidth;

    // Check if the current element fits within the container width
    if (currentWidth <= containerWidth) {
      visibleCount++;
    } else {
      break;
    }
  }

  return visibleCount;
}

export const navItems = [
  {
    label: 'Start',
    slug: '#start'
  },
  {
    label: 'Faq',
    slug: '#faq'
  },
  {
    label: 'Support',
    slug: '#support'
  }
]