import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateDb1725280533250 implements MigrationInterface {
    name = 'CreateDb1725280533250'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "pokemon" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "attack" integer NOT NULL, "defense" integer NOT NULL, "hp" integer NOT NULL, "speed" integer NOT NULL, "type" varchar NOT NULL, "imageUrl" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "battle" ("id" varchar PRIMARY KEY NOT NULL, "date" datetime NOT NULL DEFAULT (datetime('now')), "winnerId" varchar, "loserId" varchar)`);
        await queryRunner.query(`CREATE TABLE "temporary_battle" ("id" varchar PRIMARY KEY NOT NULL, "date" datetime NOT NULL DEFAULT (datetime('now')), "winnerId" varchar, "loserId" varchar, CONSTRAINT "FK_0f28157daad5bdcf01ba0c6430d" FOREIGN KEY ("winnerId") REFERENCES "pokemon" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_eca4550a510e58e8ff8bad572b1" FOREIGN KEY ("loserId") REFERENCES "pokemon" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_battle"("id", "date", "winnerId", "loserId") SELECT "id", "date", "winnerId", "loserId" FROM "battle"`);
        await queryRunner.query(`DROP TABLE "battle"`);
        await queryRunner.query(`ALTER TABLE "temporary_battle" RENAME TO "battle"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "battle" RENAME TO "temporary_battle"`);
        await queryRunner.query(`CREATE TABLE "battle" ("id" varchar PRIMARY KEY NOT NULL, "date" datetime NOT NULL DEFAULT (datetime('now')), "winnerId" varchar, "loserId" varchar)`);
        await queryRunner.query(`INSERT INTO "battle"("id", "date", "winnerId", "loserId") SELECT "id", "date", "winnerId", "loserId" FROM "temporary_battle"`);
        await queryRunner.query(`DROP TABLE "temporary_battle"`);
        await queryRunner.query(`DROP TABLE "battle"`);
        await queryRunner.query(`DROP TABLE "pokemon"`);
    }

}
