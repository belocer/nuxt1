import { boolean, pgEnum, pgTable, serial, varchar } from "drizzle-orm/pg-core";

// const UserRoleEnum = pgEnum("user_role_enum", [
//   "admin",
//   "user",
//   "moderator",
//   "author",
//   "test",
// ]);

export const UserSchema = pgTable("user", {
  id: serial("id").primaryKey(),
  username: varchar("username", { length: 255 }).unique(),
  passwordHash: varchar("password_hash", { length: 255 }),
  isAdmin: boolean("is_admin").default(false),
});

export type UserSchemaSelect = typeof UserSchema.$inferSelect;
export type UserSchemaInsert = typeof UserSchema.$inferInsert;
