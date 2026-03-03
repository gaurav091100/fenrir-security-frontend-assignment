import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="p-4 lg:p-6">
        <h2 className="text-xl font-semibold text-foreground mb-2 text-center">
          Page Not Found
        </h2>
      </div>
  );
};

export default NotFound;
