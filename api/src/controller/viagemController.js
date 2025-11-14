import ViagemModel from "../model/viagemModel.js";

class ViagemController {
    static async getAll(req, res) {
        try {
            const viagens = await ViagemModel.getAll();
            res.status(200).send(viagens);
        } catch (error) {
            res.status(500).json({ message: "Erro ao buscar viagens." });
        }
    }

    static async getById(req, res) {
        try {
            const { id } = req.params;
            const viagem = await ViagemModel.getById(id);
            if(!viagem) {
                return res.status(404).json({ message: "Viagem nao encontrada." });
            }
            res.status(200).send(viagem);
        } catch (error) {
            res.status(500).json({ message: "Erro ao buscar viagem." });
        }
    }

    static async create(req, res) {
        try {
            const { destino, duracao, valor } = req.body;
            const viagem = await ViagemModel.create({ destino, duracao, valor });
            res.status(201).send(viagem);
        } catch (error) {
            res.status(500).json({ message: "Erro ao criar item." });
        }
    }

    static async update(req, res) {
        try {
            const { id } = req.params;
            const { destino, duracao, valor } = req.body;
            const viagem = await ViagemModel.update(id, { destino, duracao, valor });
            res.status(200).send(viagem);
        } catch (error) {
            res.status(500).json({ message: "Erro ao atualizar item." });
        }
    }

    static async delete(req, res) {
        try {
            const { id } = req.params;
            await ViagemModel.delete(id);
            res.status(200).json({ message: "Item deletado com sucesso." });
        } catch (error) {
            res.status(500).json({ message: "Erro ao deletar item." });
        }
    }
}

export default ViagemController;