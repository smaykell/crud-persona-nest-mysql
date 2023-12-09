import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1702126595316 implements MigrationInterface {
    name = 'Initial1702126595316'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`persona\` (\`id\` int NOT NULL AUTO_INCREMENT, \`apellido_paterno\` varchar(50) NOT NULL, \`apellido_materno\` varchar(50) NOT NULL, \`nombres\` varchar(50) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`persona\``);
    }

}
