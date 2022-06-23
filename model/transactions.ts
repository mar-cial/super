export interface Transaction {
  total: number;
  short_id: string;
  date: string;
  id: string;
  meat_bought: Bought[];
  vegetable_bought: Bought[];
}

export interface Bought {
  nombre: string;
  precio_kg: number;
  cantidad_comprada: number;
  total_partida: number;
}
