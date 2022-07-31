import { client } from "../../prisma/client"

interface ICounts {
    id?: number
    uuid?: string
    countGreen?: number
    countWhite?: number
    countRed?: number
    countGale1?: number
    countGale2?: number
    profit_loss?: number
    profit_lossWhite?: number
    profit_bank?: number
    createdAt: string
}

class CountsUseCase {
    async getCounts(consultationDate: string) {
        const d = new Date()
        const date = Intl.DateTimeFormat("pt-br").format(d)

        const counts = await client.count.aggregate({
            _sum: {
                countGreen: true,
                countWhite: true,
                countRed: true,
                countGale1: true,
                countGale2: true,
                profit_loss: true,
                profit_lossWhite: true,
                profit_bank: true
            },
            where: {
                createdAt: {
                    contains: consultationDate ? consultationDate : date
                }
            }
        })

        return counts._sum
    }

    async createCounts({ countGreen, countWhite, countRed, countGale1, countGale2, profit_loss, profit_lossWhite, profit_bank, createdAt }: ICounts) {
        const counts = await client.count.create({
            data: {
                countGreen,
                countWhite,
                countRed,
                countGale1,
                countGale2,
                profit_loss,
                profit_lossWhite,
                profit_bank,
                createdAt
            }
        })

        return counts
    }

    async updateCounts({ uuid, countGreen, countWhite, countRed, countGale1, countGale2, profit_loss, profit_lossWhite, profit_bank }: ICounts) {
        const updateCounts = await client.count.update({
            where: { uuid: uuid },
            data: {
                countGreen,
                countWhite,
                countRed,
                countGale1,
                countGale2,
                profit_loss,
                profit_lossWhite,
                profit_bank
            }
        })

        return updateCounts
    }
}

export { CountsUseCase }