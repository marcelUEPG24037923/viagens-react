import pool from "../config/db.js";

class ViagemModel {
    static async getAll() {
        const result = await pool.query("SELECT * FROM viagens");
        return result.rows;
    }

    static async getById(id) {
        const result = await pool.query("SELECT * FROM viagens WHERE id = $1", [id]);
        return result.rows[0];
    }

    static async create({ destino, duracao, valor }) {
        const result = await pool.query("INSERT INTO viagens(destino, duracao, valor) VALUES ($1, $2, $3) RETURNING *", [destino, duracao, valor]);
        return result.rows[0];
    }

    static async update(id, { destino, duracao, valor }) {
        const result = await pool.query("UPDATE viagens SET destino = $1, duracao = $2, valor = $3 WHERE id = $4 RETURNING *", [destino, duracao, valor, id]);
        return result.rows[0];
    }

    static async delete(id) {
        await pool.query("DELETE FROM viagens WHERE id = $1", [id]);
        return { message: "Item removido com sucesso." };
    }
}

export default ViagemModel;