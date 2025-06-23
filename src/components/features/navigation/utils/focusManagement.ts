/**
 * Focus trap utility for overlay navigation.
 * Usage: call trapFocus(overlayRef) when overlay opens.
 */
export function trapFocus(container: HTMLElement) {
  const focusableSelectors = [
    'a[href]',
    'button:not([disabled])',
    'textarea:not([disabled])',
    'input[type="text"]:not([disabled])',
    'input[type="radio"]:not([disabled])',
    'input[type="checkbox"]:not([disabled])',
    'select:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
  ];
  const focusableEls = container.querySelectorAll(focusableSelectors.join(','));
  const firstEl = focusableEls[0] as HTMLElement;
  const lastEl = focusableEls[focusableEls.length - 1] as HTMLElement;

  function handle(e: KeyboardEvent) {
    if (e.key !== 'Tab') return;
    if (e.shiftKey) {
      if (document.activeElement === firstEl) {
        lastEl.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastEl) {
        firstEl.focus();
        e.preventDefault();
      }
    }
  }
  container.addEventListener('keydown', handle);
  return () => container.removeEventListener('keydown', handle);
}
