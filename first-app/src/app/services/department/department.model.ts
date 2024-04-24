export interface Department {
  id?: number;
  name: string;
  location: string;
  description: { id: number; name: string };
}
