import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { UserEntity } from "./UserEntity";
import { StatusEntity } from "./StatusEntity";
import { sql } from "drizzle-orm";

export const UserSessionEntity = sqliteTable("pesto_user_sessions", {
	id: integer("session_id").notNull().primaryKey(),
	userId: integer("user_id")
		.notNull()
		.references(() => UserEntity.id),
	token: text("session_token").notNull(),
	description: text("description"),
	status: integer("status_id").notNull().references(() => StatusEntity.id),
	createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
	expiresAt: text("expires_at").default(sql`DATE('now', 'localtime', '+10 days')`)
});