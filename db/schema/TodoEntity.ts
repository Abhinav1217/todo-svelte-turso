import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { UserEntity } from "./UserEntity";
import { StatusEntity } from "./StatusEntity";
import { sql } from "drizzle-orm";

export const TodoEntity = sqliteTable("pesto_todos", {
	id: integer("todo_id").notNull().primaryKey(),
	userId: integer("user_id")
		.notNull()
		.references(() => UserEntity.id),
	title: text("title").notNull(),
	description: text("description"),
	status: integer("status_id")
		.notNull()
		.references(() => StatusEntity.id),
	createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
	updatedAt: text("updated_at")
		.default(sql`CURRENT_TIMESTAMP`)
		.$onUpdate(() => sql`CURRENT_TIMESTAMP`),
});
