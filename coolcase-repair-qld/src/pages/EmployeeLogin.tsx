import { ArrowLeft, ExternalLink, LockKeyhole, ShieldCheck } from "lucide-react";
import { buildEmployeeBackendUrl } from "@/lib/employee-backend";

const EmployeeLogin = () => {
  const backendLoginUrl = buildEmployeeBackendUrl("/staff/login", "/staff");

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 py-6">
        <header className="flex items-center justify-between">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-ccr-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to website
          </a>
          <div className="text-2xl font-bold tracking-tight text-ccr-primary">CCR</div>
        </header>

        <section className="grid flex-1 items-center gap-10 py-12 lg:grid-cols-[1fr_440px]">
          <div className="max-w-2xl space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
              <ShieldCheck className="h-4 w-4 text-ccr-primary" />
              Staff access only
            </div>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                Employee backend
              </h1>
              <p className="max-w-xl text-lg leading-8 text-slate-600">
                Continue to the secure CCR staff backend to manage repairs, leads, inventory, and admin tools.
              </p>
            </div>
            <div className="grid gap-4 text-sm text-slate-600 sm:grid-cols-3">
              <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                Staff login
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                Protected backend
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                Repair workflow tools
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70 sm:p-8">
            <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-ccr-primary/10 text-ccr-primary">
              <LockKeyhole className="h-6 w-6" />
            </div>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold tracking-tight">Staff backend sign in</h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                This opens the real backend login page. Your employee username and password are handled there.
              </p>
            </div>

            <a
              href={backendLoginUrl}
              className="inline-flex h-12 w-full items-center justify-center rounded-md bg-ccr-primary px-5 text-sm font-semibold text-white transition-colors hover:bg-ccr-primary/90"
            >
              Sign in to backend
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>

            <p className="mt-5 break-all rounded-lg bg-slate-50 p-3 text-xs text-slate-500">
              {backendLoginUrl}
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default EmployeeLogin;
