import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const UserEntity = sqliteTable("pesto_user", {
	id: integer("user_id").notNull().primaryKey(),
	username: text("username").notNull().unique(),
	password: text("password_hash").notNull(),
	email: text("email").notNull().unique(),
	createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});
