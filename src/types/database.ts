/**
 * Tipos de la base de datos de Supabase
 *
 * Para generar automáticamente estos tipos desde tu esquema de Supabase:
 * 1. Instala la CLI de Supabase: npm i supabase --save-dev
 * 2. Login: npx supabase login
 * 3. Genera tipos: npx supabase gen types typescript --project-id YOUR_PROJECT_ID > src/types/database.ts
 *
 * Por ahora usamos un tipo básico. Puedes extenderlo según tu esquema.
 */
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      // Aquí irán tus tablas cuando las generes automáticamente
      [key: string]: {
        Row: Record<string, unknown>;
        Insert: Record<string, unknown>;
        Update: Record<string, unknown>;
      };
    };
    Views: {
      [key: string]: {
        Row: Record<string, unknown>;
      };
    };
    Functions: {
      [key: string]: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
    };
    Enums: {
      [key: string]: string;
    };
  };
}
