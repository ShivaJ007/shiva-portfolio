export function Footer() {
  return (
    <footer className="w-full py-6">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Shiva Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}