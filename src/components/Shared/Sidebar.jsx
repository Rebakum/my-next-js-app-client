// components/Sidebar.tsx
import { Home, Menu, User } from "lucide-react"; // or use any icon library you prefer
import Link from "next/link"; // If you're using Next.js

export default function Sidebar() {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white flex flex-col p-4">
      {/* Logo or Title */}
      <div className="text-2xl font-bold mb-10">MyApp</div>

      {/* Sidebar Links */}
      <nav className="flex flex-col gap-4">
        <Link
          href="/"
          className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded"
        >
          <Home size={20} />
          <span>Home</span>
        </Link>

        <Link
          href="/profile"
          className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded"
        >
          <User size={20} />
          <span>Profile</span>
        </Link>

        <Link
          href="/settings"
          className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded"
        >
          <Menu size={20} />
          <span>Settings</span>
        </Link>
      </nav>
    </div>
  );
}
