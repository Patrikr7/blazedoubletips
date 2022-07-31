import { client } from "../../prisma/client"

interface IConfigsRequest {
    id?: number
    uuid?: string
    name?: string
    standard?: number
    password?: string
    activo?: boolean
}

class ConfigsUseCase {
    async create({ name, standard, password, activo }: IConfigsRequest) {
        const configs = await client.config.create({
            data: {
                name,
                standard,
                password,
                activo
            }
        })

        return configs
    }

    async show() {
        const configs = await client.config.findFirst()

        return configs
    }

    async findByName(name: string) {
        const config = await client.config.findFirst({
            where: { name }
        })

        return config
    }

    async update({ standard, activo, uuid }: IConfigsRequest) {
        const configs = await client.config.update({
            where: { uuid: uuid },
            data: {
                standard,
                activo
            }
        })

        return configs
    }

    async updateStandard({ standard, uuid }: IConfigsRequest) {
        const configs = await client.config.update({
            where: { uuid: uuid },
            data: {
                standard
            }
        })

        return configs
    }
}

export { ConfigsUseCase }