// Tiny React 18 hook shims for a React 17 app used only by Storybook.
const React = require('react');
Object.assign(exports, React);

// React 18-only: useId
if (!('useId' in React)) {
  let _id = 0;
  exports.useId = function useId() {
    const [id] = React.useState(() => `r17-${++_id}`);
    return id;
  };
}

// React 18-only: useInsertionEffect
if (!('useInsertionEffect' in React)) {
  exports.useInsertionEffect =
    typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;
}
