
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Welcome to My App</h1>
        <p className="text-lg text-gray-600">This is a simple layout example.</p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4">Content Area</h2>
        <p>This is where your main content will go.</p>
      </div>
      <footer className="text-sm text-gray-500">
        © 2023 My App. All rights reserved.
      </footer>
    </div>
  );
}
