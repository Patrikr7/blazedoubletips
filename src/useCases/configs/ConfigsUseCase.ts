import { client } from "../../prisma/client"

interface IConfigsRequest {
    id?: number
    uuid?: string
    name?: string
    standard?: number
    standard_new?: number
    password?: string
    activo?: boolean
    sequence?: boolean
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

    async updateStandard({ standard, uuid, sequence }: IConfigsRequest) {
        let new_standard: number

        if(standard == 2){
            new_standard = 3            
        }

        if(standard == 3){
            new_standard = 4   
            
            if(sequence === true){
                new_standard = 2
            }
        }

        if(standard == 4){
            new_standard = 5   
            
            if(sequence === true){
                new_standard = 3
            }            
        }

        if(standard == 5){
            new_standard = 2   
            
            if(sequence === true){
                new_standard = 4
            }            
        }

        const configs = await client.config.update({
            where: { uuid: uuid },
            data: {
                standard: new_standard
            }
        })

        return configs
    }
}

export { ConfigsUseCase }