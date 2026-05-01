/**
 * Backup service types — the per-user services that Spanning protects
 * (mail, drive, calendar, contacts, sites, etc.).
 */

export type SpanningServiceName =
  | 'mail'
  | 'drive'
  | 'calendar'
  | 'contacts'
  | 'sites'
  | 'teams'
  | string;

export interface SpanningService {
  name: SpanningServiceName;
  enabled?: boolean;
  lastBackupAt?: string;
  itemCount?: number;
  [key: string]: unknown;
}
