

// FilterToggle.jsx
export default function FilterToggle({ showActiveOnly, setShowActiveOnly }) {
  return (
    <label>
      <input
        type="checkbox"
        checked={showActiveOnly}
        onChange={e => setShowActiveOnly(e.target.checked)} //this pass true or false 
      />
      Show Active Only
    </label>
  );
}

// event -> get the element the event happend->check status.
// when checked run showactive only. == visible members
