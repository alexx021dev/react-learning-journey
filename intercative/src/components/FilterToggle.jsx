

// FilterToggle.jsx
export default function FilterToggle({ showActiveOnly, setShowActiveOnly }) {
  return (
    <label>
      <input
        type="checkbox"
        checked={showActiveOnly}
        onChange={e => setShowActiveOnly(e.target.checked)}
      />
      Show Active Only
    </label>
  );
}

