import Navbar from "@/components/Shared/Navber";

const CommonLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Your Company Name. All rights
          reserved.
        </p>
        <p>Privacy Policy | Terms of Service</p>
      </footer>
    </div>
  );
};

export default CommonLayout;
