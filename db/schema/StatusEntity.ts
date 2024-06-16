import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const StatusEntity = sqliteTable("pesto_statuses", {
	id: integer("status_id").notNull().primaryKey(),
	status: text("status_name", { enum: ["to-do", "doing", "done", "stashed"] })
		.notNull()
		.unique(), //TODO FIND A BETTER WAY TO SYNC ENUM WITH DB VALUES.
});
