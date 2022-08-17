import { Bot } from "../../bot/CreateBot"
import { MountMessageHelper } from "../Messages/MountMessageHelpers"
import { CountsUseCase } from "../../useCases/counts/CountsUseCase"
import { ConfigsUseCase } from "../../useCases/configs/ConfigsUseCase"

interface ISequenceFour {
    colorName: string
    number: string
    standard: number
}

let data = {
    messageID: null,
    idMessageSent: null,
    standard: null,
    isEqual: false,
    countGale1: 0,
    countGale2: 0,
    gale: 0,
    counterTipSent: 0,
    countGreen: 0,
    countWhite: 0,
    countRed: 0,
    countColorEqual: 0,
    lastColor: "",
    colors: []
}

class MetricDouble {
    bot: Bot
    mounteMessageHelper: MountMessageHelper
    confirmed: Promise<string>
    abort: Promise<string>
    register: Promise<string>
    alert: Promise<string>
    info: Promise<string>
    cover: Promise<string>
    entryBlack: Promise<string>
    entryRed: Promise<string>
    red: Promise<string>
    greenWithWhite: Promise<string>
    green: Promise<string>
    date: string
    createdAt: string

    countsUseCase: CountsUseCase
    getConfigs: ConfigsUseCase

    doubleInput: number
    doubleGale1: number
    doubleGale2: number
    doubleWhite: number

    bankInput: number
    bankGale1: number
    bankGale2: number

    constructor() {
        this.bot = new Bot()
        this.mounteMessageHelper = new MountMessageHelper()
        this.confirmed = this.mounteMessageHelper.ConfirmedEntry()
        this.abort = this.mounteMessageHelper.AbortEntry()
        this.register = this.mounteMessageHelper.Register()
        this.alert = this.mounteMessageHelper.Alert()
        this.info = this.mounteMessageHelper.Info()
        this.cover = this.mounteMessageHelper.Cover()
        this.entryBlack = this.mounteMessageHelper.Entryblack()
        this.entryRed = this.mounteMessageHelper.EntryRed()
        this.green = this.mounteMessageHelper.Green()
        this.greenWithWhite = this.mounteMessageHelper.GreenWithWhite()
        this.red = this.mounteMessageHelper.Red()
        this.date = Intl.DateTimeFormat("pt-br").format(new Date())
        this.createdAt = this.date

        this.doubleInput = 2.80
        this.doubleGale1 = 7.60
        this.doubleGale2 = 17.00
        this.doubleWhite = 1.80

        this.bankInput = 1.80
        this.bankGale1 = 2.80
        this.bankGale2 = 6.80

        this.countsUseCase = new CountsUseCase()
        this.getConfigs = new ConfigsUseCase()
    }

    async verifySequenceFour({ colorName, number }: ISequenceFour) {
        const configs = await this.getConfigs.findByName(process.env.BOT_NAME)
        if(!configs) {
            console.log("⛔ O nome do BOT no arquivo .env não é o mesmo nome que você cadastrou!")
            return
        }
        data.standard = configs.standard

        //import mensagens
        const ColorOfEntry = colorName === "red" ? await this.entryBlack : await this.entryRed

        if (data.lastColor === colorName || data.lastColor === "") {
            data.colors = []
            data.colors.push({ colorName, number })
            data.lastColor = colorName
            data.countColorEqual += 1
            data.isEqual = true

            if (colorName === "white") {
                data.countColorEqual = 0
                console.log(data.colors)
                console.log("--------------------------------------------------")
            }

            // POSSIVEL ENTRADA
            if (data.isEqual === true && data.countColorEqual === data.standard - 1 && colorName !== "white") {
                const message = `<b>🥁 Analisando Possível Entrada 🧐</b>`

                const messageID = await this.bot.sendMessage({ message })
                data.messageID = messageID
                console.log(`BOT1: 🥁 Analisando Possível Entrada 🧐`)
                console.log(data.colors)
                console.log("--------------------------------------------------")
                
                return data
            }

            // ENVIAR TIP
            if (data.isEqual === true && data.countColorEqual === data.standard && colorName !== "white") {
                if (data.messageID !== null) await this.bot.deleteMessageWithID(data.messageID)
                data.messageID = null
                const message = `✅ Entrar: ${ColorOfEntry} ${await this.cover}\n${await this.info}`
                const message2 = `🎰 ${await this.confirmed}\n⚠️ Última cor ${data.lastColor === "red" ? await this.entryRed : await this.entryBlack}\n\n📈 <b>BANCA ACIMA DE R$100,00</b>\n🎲 <b>ENTRAR NO ${colorName === "black" ? await this.entryRed : await this.entryBlack} -> R$ ${this.doubleInput.toFixed(2).replace('.', ',')}\n🎯 Opcional: ${await this.cover} -> R$ ${this.doubleWhite.toFixed(2).replace('.', ',')}</b>\n\n*---------------*\n\n📈 <b>BANCA ABAIXO DE R$ 100,00</b>\n🎲 <b>ENTRAR NO ${colorName === "black" ? await this.entryRed : await this.entryBlack} -> R$ ${this.bankInput.toFixed(2).replace('.', ',')}\n</b>\n\n2️⃣ Máximo <b>02 Martingale</b>\n\n${await this.register}`
                data.counterTipSent += 1
                
                const messageID = await this.bot.sendMessage({ message: message2 })
                data.idMessageSent = messageID
                console.log(`BOT1: TIP ENVIADA: ${ColorOfEntry} ${await this.cover}`)
                console.log(data.colors)
                console.log("--------------------------------------------------")

                return data
            }

            // CONFERENCIA RED E GALE
            if (data.isEqual === true && data.lastColor === colorName && colorName !== "white" && data.countColorEqual > data.standard) {
                data.gale += 1

                // GALES
                if (data.gale === 1) {
                    const messageID = await this.bot.replyMessage({ message: `📈 <b>BANCA ACIMA DE R$100,00</b>\n🎲 <b>Vamos Primeira Gale</b> -> R$ ${this.doubleGale1.toFixed(2).replace('.', ',')}\n\n<b>🎯 Opcional: ${await this.cover} -> R$ ${this.doubleWhite.toFixed(2).replace('.', ',')}</b>\n\n*---------------*\n\n📈 <b>BANCA ABAIXO DE R$ 100,00</b>\n🎲 <b>Vamos Primeira Gale</b> -> R$ ${this.bankGale1.toFixed(2).replace('.', ',')}`, messageID: data.idMessageSent })
                    data.messageID = messageID
                    console.log(`BOT1: GALE: Vamos a Primeira Gale`)
                    console.log(data.colors)
                    console.log("--------------------------------------------------")
                    return data
                }

                if (data.gale === 2) {
                    if (data.messageID !== null) await this.bot.deleteMessageWithID(data.messageID)
                    const messageID = await this.bot.replyMessage({ message: `📈 <b>BANCA ACIMA DE R$100,00</b>\n🎲 <b>Vamos Segunda Gale</b> -> R$ ${this.doubleGale2.toFixed(2).replace('.', ',')}\n\n<b>🎯 Opcional: ${await this.cover} -> R$ ${this.doubleWhite.toFixed(2).replace('.', ',')}</b>\n\n*---------------*\n\n📈 <b>BANCA ABAIXO DE R$ 100,00</b>\n🎲 <b>Vamos Segunda Gale</b> -> R$ ${this.bankGale2.toFixed(2).replace('.', ',')}`, messageID: data.idMessageSent })
                    data.messageID = messageID
                    console.log(`BOT1: GALE: Vamos Segunda Gale`)
                    console.log(data.colors)
                    console.log("--------------------------------------------------")
                    return data
                }

                //inicio conferencia red
                if (data.messageID !== null) await this.bot.deleteMessageWithID(data.messageID)
                data.gale = 0
                data.colors = []
                data.colors.push({ colorName, number })
                data.countColorEqual = 0
                data.countColorEqual += 1
                data.countRed += 1
                data.lastColor = colorName

                await this.countsUseCase.createCounts({
                    countWhite: 0,
                    countGreen: 0,
                    countRed: 1,
                    countGale1: data.gale === 1 ? 1 : 0,
                    countGale2: data.gale === 2 ? 1 : 0,
                    profit_loss: (this.doubleInput + this.doubleGale1 + this.doubleGale2) * -1,
                    profit_lossWhite: (this.doubleWhite * 3) * -1,
                    profit_bank: (this.bankInput + this.bankGale1 + this.bankGale2) * -1,
                    createdAt: this.createdAt
                })

                await this.bot.replyMessage({ message: `${await this.red}`, messageID: data.idMessageSent })
                await this.bot.sendMessage({ message: `📝 Siga arrisca a gestão indicada! 📈` })

                // ATUALIZA O PADRAO
                await this.getConfigs.updateStandard({ standard: data.standard, uuid: configs.uuid })

                // envia gif
                await this.bot.replyGif({ gif: 'https://tenor.com/94u8.gif' })
                
                console.log(`BOT1: RED: ${await this.red}`)
                console.log(data.colors)
                console.log("--------------------------------------------------")
                return data
            }
            console.log(data.colors)
            console.log("--------------------------------------------------")
            return data
        }

        if (data.lastColor !== colorName) {
            // POSSIVEL ENTRADA E SEQUENCIA QUEBRADA
            const possibleEntryCancel = data.isEqual === true && data.countColorEqual === data.standard - 1
            if (possibleEntryCancel) {
                if (data.messageID !== null) await this.bot.deleteMessageWithID(data.messageID)
                data.messageID = null
                
                // ATUALIZA O PADRAO
                await this.getConfigs.updateStandard({ standard: data.standard, uuid: configs.uuid, sequence: true })

                console.log("BOT1: ---> Sequência Quebrada, Mensagem apagada.")
                console.log(data.colors)
                console.log("--------------------------------------------------")
                data.colors = []
            }

            // CONFERENCIA DO GREEN NA COR WHITE
            const redWithWhite = colorName === "white" && data.countColorEqual >= data.standard
            if (redWithWhite) {
                if (data.messageID !== null) await this.bot.deleteMessageWithID(data.messageID)
                data.messageID = null
                const thisGale = data.gale === 1 ? "<i>Primeira Gale</i>" : "<i>Segunda Gale</i>"
                data.colors = []
                data.colors.push({ colorName, number })
                data.lastColor = colorName
                data.countColorEqual = 0
                data.countColorEqual += 1
                data.countWhite += 1
                data.isEqual = false
                data.countGale1 += data.gale === 1 ? 1 : 0
                data.countGale2 += data.gale === 2 ? 1 : 0

                await this.countsUseCase.createCounts({
                    countWhite: 1,
                    countGreen: 0,
                    countRed: 0,
                    countGale1: 0,
                    countGale2: 0,
                    profit_loss: data.gale === 0 ? this.doubleInput * -1 : data.gale === 1 ? (this.doubleInput + this.doubleGale1) * -1 : (this.doubleInput + this.doubleGale1 + this.doubleGale2) * -1,
                    profit_lossWhite: data.gale === 0 ? this.doubleWhite * 14 : data.gale === 1 ? (this.doubleWhite * 14) - this.doubleWhite : (this.doubleWhite * 14) - (this.doubleWhite * 2),
                    profit_bank: data.gale === 0 ? this.bankInput * -1 : data.gale === 1 ? (this.bankInput + this.bankGale1) * -1 : (this.bankInput + this.bankGale1 + this.bankGale2) * -1,
                    createdAt: this.createdAt
                })

                await this.bot.replyMessage({ message: `${await this.greenWithWhite}${data.gale ? `\n${thisGale}` : ""}`, messageID: data.idMessageSent })

                // ATUALIZA O PADRAO
                await this.getConfigs.updateStandard({ standard: data.standard, uuid: configs.uuid, sequence: false })

                // envia gif
                await this.bot.replyGif({ gif: 'https://tenor.com/bnPFc.gif' })

                console.log(`BOT1: GREEN WHITE: ${await this.greenWithWhite} ${data.gale ? `\n\n${thisGale}` : ""}`)
                console.log(data.colors)
                console.log("--------------------------------------------------")
                data.gale = 0

                return data
            }

            data.countColorEqual += 1
            data.isEqual = false

            //CONFERENCIA DO GREEN NAS CORES RED/BLACK
            if (data.isEqual === false && data.countColorEqual >= data.standard + 1 && data.lastColor !== "white") {
                if (data.messageID !== null) await this.bot.deleteMessageWithID(data.messageID)
                data.messageID = null

                const thisGale = data.gale === 1 ? "<i>Primeira Gale</i>" : "<i>Segunda Gale</i>"
                const profit_loss = data.gale === 0 ? this.doubleInput : data.gale === 1 ? this.doubleGale1 - this.doubleInput : this.doubleGale2 - (this.doubleInput + this.doubleGale1)
                const profit_white = data.gale === 0 ? this.doubleWhite * -1 : data.gale === 1 ? (this.doubleWhite * 2) * -1 : (this.doubleWhite * 3) * -1
                const profit_bank = data.gale === 0 ? this.bankInput : data.gale === 1 ? this.bankGale1 - this.bankInput : this.bankGale2 - (this.bankInput + this.bankGale1) 

                data.isEqual = false
                data.colors = []
                data.colors.push({ colorName, number })
                data.lastColor = colorName
                data.countGreen += data.gale === 1 || data.gale === 2 ? 0 : 1
                data.countColorEqual = 0
                data.countColorEqual += 1
                data.countGale1 += data.gale === 1 ? 1 : 0
                data.countGale2 += data.gale === 2 ? 1 : 0

                await this.countsUseCase.createCounts({
                    countWhite: 0,
                    countGreen: data.gale === 1 || data.gale === 2 ? 0 : 1,
                    countRed: 0,
                    countGale1: data.gale === 1 ? 1 : 0,
                    countGale2: data.gale === 2 ? 1 : 0,
                    profit_loss: profit_loss,
                    profit_lossWhite: profit_white,
                    profit_bank: profit_bank,
                    createdAt: this.createdAt
                })

                await this.bot.replyMessage({ message: `${await this.green}${data.gale ? `\n${thisGale}` : ""}`, messageID: data.idMessageSent })

                // ATUALIZA O PADRAO
                await this.getConfigs.updateStandard({ standard: data.standard, uuid: configs.uuid, sequence: false })

                // envia gif
                await this.bot.replyGif({ gif: 'https://tenor.com/blMbi.gif' })

                console.log(`BOT1: GREEN: ${await this.green} ${data.gale ? `\n${thisGale}` : ""}`)
                console.log(data.colors)
                console.log("--------------------------------------------------")
                data.gale = 0

                return data
            }

            data.colors = []
            data.colors.push({ colorName, number })
            data.lastColor = colorName

            data.countColorEqual = 0
            data.countColorEqual += 1

            console.log(data.colors)
            console.log("--------------------------------------------------")

            return data
        }

        return data
    }
}

export { MetricDouble }