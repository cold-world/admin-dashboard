export type Ticket = {
  category: string;
  title: string;
  owner: string;
  avatar: string | null;
  status: string;
  priority: number;
  progress: number;
  description: string;
  timestamp: string;
  documentId?: string;
};