export function ClearAuth() {
  const handleClear = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <button 
      onClick={handleClear}
      className="fixed top-4 right-4 z-50 px-4 py-2 bg-red-500 text-white rounded"
    >
      Clear Auth
    </button>
  );
}