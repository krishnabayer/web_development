// components/Navbar.js
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-xl font-semibold">
          <a href="/">MyApp</a>
        </div>

        {/* Navigation Links */}
        <div className="space-x-4 flex items-center">
          <a href="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Home</a>
          <a href="/about" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">About</a>
          <a href="/contact" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Contact</a>

          {/* Dropdown for user menu */}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button className="text-white">User</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <a href="/profile" className="block text-sm text-gray-900 hover:bg-gray-200 px-4 py-2">Profile</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/settings" className="block text-sm text-gray-900 hover:bg-gray-200 px-4 py-2">Settings</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/logout" className="block text-sm text-gray-900 hover:bg-gray-200 px-4 py-2">Logout</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
