export default function PageLevelLoader() {
    return (
      <div className="fixed inset-0 bg-white bg-opacity-90 z-50 flex justify-center items-center">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-900"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
  );
}
