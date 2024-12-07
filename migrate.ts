import 'dotenv/config';
import { migrate } from 'drizzle-orm/libsql/migrator'; // SQLite-specific migrator
import { db } from './db/db'; // Import your db instance

// Run migrations for SQLite/Turso
await migrate(db, { migrationsFolder: './drizzle' });

console.log('Migrations applied successfully!');