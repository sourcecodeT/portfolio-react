export default function debounce(cb, wait, call) {
  let timeout;
  let immediate;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      cb();
    }, wait);
    if (!immediate) {
      immediate = setTimeout(() => {
        immediate = null;
        cb();
      }, call)
    }
  }
}