/**
 * Backup run types — one record per day per service per user.
 */

export type BackupStatus = 'success' | 'partial' | 'failed' | string;

export interface SpanningBackup {
  id: string;
  userId: string;
  service: string;
  startedAt: string;
  completedAt?: string;
  status: BackupStatus;
  itemCount?: number;
  [key: string]: unknown;
}
