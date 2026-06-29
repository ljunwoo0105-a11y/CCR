import { useEffect } from "react";
import { buildEmployeeBackendUrl } from "@/lib/employee-backend";

const EmployeeDashboard = () => {
  const backendUrl = buildEmployeeBackendUrl("/staff", "");

  useEffect(() => {
    window.location.replace(backendUrl);
  }, [backendUrl]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-5 text-center text-slate-700">
      <div>
        <p className="text-lg font-semibold text-slate-950">Opening employee backend...</p>
        <p className="mt-2 text-sm">
          If it does not open automatically, use{" "}
          <a className="font-medium text-ccr-primary underline" href={backendUrl}>
            this backend link
          </a>
          .
        </p>
      </div>
    </main>
  );
};

export default EmployeeDashboard;
