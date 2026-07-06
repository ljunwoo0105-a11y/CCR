/**
 * Presentation helpers shared by staff server pages and client components.
 * Pure functions only — safe to import anywhere.
 */

const BADGE_BASE =
  "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold";

function intakeStatusTone(status: string): string {
  switch (status) {
    case "CHECKED_IN":
      return "bg-sky-100 text-sky-800";
    case "IN_REPAIR":
      return "bg-amber-100 text-amber-800";
    case "READY":
      return "bg-emerald-100 text-emerald-800";
    case "COLLECTED":
      return "bg-slate-200 text-slate-700";
    case "CANCELLED":
      return "bg-rose-100 text-rose-800";
    default:
      return "bg-slate-100 text-slate-700";
  }
}

export function intakeStatusBadge(status: string): string {
  return `${BADGE_BASE} ${intakeStatusTone(status)}`;
}

function leadStatusTone(status: string): string {
  switch (status) {
    case "NEW":
      return "bg-orange-100 text-orange-800";
    case "EMAILED":
      return "bg-sky-100 text-sky-800";
    case "CONTACTED":
      return "bg-violet-100 text-violet-800";
    case "BOOKED":
      return "bg-emerald-100 text-emerald-800";
    default:
      return "bg-slate-200 text-slate-700";
  }
}

export function leadStatusBadge(status: string): string {
  return `${BADGE_BASE} ${leadStatusTone(status)}`;
}

function qualityTone(quality: string): string {
  switch (quality) {
    case "GENUINE":
      return "bg-emerald-100 text-emerald-800";
    case "OEM":
      return "bg-sky-100 text-sky-800";
    case "PREMIUM":
      return "bg-violet-100 text-violet-800";
    default:
      return "bg-slate-200 text-slate-700";
  }
}

export function qualityBadge(quality: string): string {
  return `${BADGE_BASE} ${qualityTone(quality)}`;
}

/** "CHECKED_IN" → "Checked in" */
export function statusLabel(status: string): string {
  const lower = status.replaceAll("_", " ").toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
}

/** 365 → "12 mo", 180 → "6 mo", 90 → "90 days" */
export function warrantyLabel(days: number): string {
  if (days >= 360) return `${Math.round(days / 30.4)} mo`;
  if (days >= 180 && days % 30 === 0) return `${days / 30} mo`;
  return `${days} days`;
}

/** Gross margin % = (sell - cost) / sell. Null when sell is 0. */
export function marginPct(cost: number, sell: number): number | null {
  if (sell <= 0) return null;
  return ((sell - cost) / sell) * 100;
}

export function marginTone(pct: number): string {
  if (pct < 30) return "text-rose-600";
  if (pct < 45) return "text-amber-600";
  return "text-emerald-600";
}

export function stockBadge(qty: number): string {
  if (qty <= 0) return `${BADGE_BASE} bg-rose-100 text-rose-800`;
  if (qty <= 1) return `${BADGE_BASE} bg-amber-100 text-amber-800`;
  return `${BADGE_BASE} bg-slate-100 text-slate-700`;
}
