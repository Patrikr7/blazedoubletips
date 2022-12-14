import { Telegraf } from "telegraf"
import { ConfigsController } from "../useCases/configs/ConfigsController"
import { ConfigsUseCase } from "../useCases/configs/ConfigsUseCase"
import { CountsUseCase } from "../useCases/counts/CountsUseCase"

interface IMessage {
    countGreen?: number
    countRed?: number
    color?: string
    channel?: string
    message: string
    messageID?: number
}

interface IDataCount {
    id?: string
    countGreen?: number
    countWhite?: number
    countRed?: number
    countGale1?: number
    countGale2?: number
    totalWin?: number
    totalSent?: number
    percentageWin?: number
    profit_loss?: string
    profit_lossWhite?: string
    profit_bank?: string
    createdAt: string
}

class Bot {
    start: string    
    bots: Telegraf
    gif: string

    constructor() {
        this.start = process.env.CHANNEL_TYPE + "\nš¤ Bot On! š¢"
        this.bots = new Telegraf(process.env.TOKEN_TELEGRAM)
    }

    public async inital() {

        try {
            console.log(this.start)
            this.bots.launch();

            process.once("SIGINT", () => this.bots.stop("SIGINT"));
            process.once("SIGTERM", () => this.bots.stop("SIGTERM"));     
            
        } catch (error) {
            console.log("Error in connection of API!")
        }
    }

    async sendMessage({ countGreen, countRed, color, message }: IMessage) {
        try {
            const messageId = await this.bots.telegram.sendMessage(process.env.CHANNEL_NAME, message, { parse_mode: 'HTML' })
            return messageId.message_id
        } catch (error) {
            console.log("Error send message!")
        }

    }

    async deleteMessageWithID(messageID: any) {
        try {
            await this.bots.telegram.deleteMessage(process.env.CHANNEL_NAME, messageID)
        } catch (error) {
            console.log("Error in delete message!")
        }
    }

    async replyMessage({ message, messageID }: IMessage) {
        try {
            const messageId = await this.bots.telegram.sendMessage(process.env.CHANNEL_NAME, message, { reply_to_message_id: messageID, parse_mode: "HTML" })
            return messageId.message_id
        } catch (error) {
            console.log("Error reply message!")
            console.log(error.message)
        }
    }    

    async replyGif({ gif }) {
        await this.bots.telegram.sendAnimation(process.env.CHANNEL_NAME, gif, { parse_mode: 'HTML' })
    }

    async commandBot() {
        this.bots.start(async (ctx) => {
            await ctx.reply(`š¤ Bem vindo ao ${ctx.botInfo.first_name} š£\n\n/padrao Ver as configuraĆ§Ćµes do Bot.\n\n/config Cadastrar e alterar as configs do Bot.\n\n/resultado Envia relatĆ³rio no canal.\n<i>VocĆŖ pode passar uma data\nExemplo: '24/01/2022', se nĆ£o vai\nser enviado com a data do dia.</i>\n\n/help Ajuda.`, { parse_mode: 'HTML' })
        })

        this.bots.help(async (ctx) => {
            await ctx.reply(`š¤ Bot Comandos š£\n\n/padrao Ver as configuraĆ§Ćµes do Bot.\n\n/config Cadastrar e alterar as configs do Bot.\n\n/resultado Envia relatĆ³rio no canal.\n<i>VocĆŖ pode passar uma data\nExemplo: '24/01/2022', se nĆ£o vai\nser enviado com a data do dia.</i>`, { parse_mode: 'HTML' })
        })

        this.bots.command("padrao", async (ctx) => {
            const configUseCase = new ConfigsUseCase()
            const configs = await configUseCase.show()

            if (configs !== null) {
                const { activo, standard } = await configUseCase.show()
                await ctx.reply(`š¤ Bot Configs āļø\n\n<b>Bot:</b> ${activo ? "Ativado" : "Desativado"}\n<b>PadrĆ£o:</b> ${Number(standard)}`, { parse_mode: 'HTML' })
                return
            }
            await ctx.reply(`VocĆŖ precisa configurar seu bot\n\n/config`, { parse_mode: 'HTML' })
        })

        this.bots.command("ativar", async (ctx) => {
            const message = `š¤ Vamos ativar o Bot, fique atento! š¢\n\n<b>Blaze Double 7</b>`
            await this.sendMessage({ message })
            await ctx.replyWithHTML(`šØ <b>Ativando Bot!</b>`)
            
            return
        })

        this.bots.command("desativar", async (ctx) => {
            const message = `š¤ Desativando o Bot, voltaremos mais tarde! š¢\nA qualquer momento o BOT pode ser ativado.\n\n<b>Blaze Double 7</b>`
            await this.sendMessage({ message })
            await ctx.replyWithHTML(`šØ <b>Desativando Bot!</b>`)
            return
        })

        this.bots.command("register", async (ctx) => {
            const message = "š° <b>APROVEITE!</b> š°\nA Blaze estĆ” dobrando o depĆ³sito para aqueles que estĆ£o se cadastrando pelo link!\n\nCadastre-se e garanta esse bĆ“nus ā¬ļøā¬ļø\nāhttps://blaze.com/r/4oD5L7ā"
            await this.sendMessage({ message })
            await ctx.replyWithHTML(`šØ <b>Link enviado!</b>`)
            return
        })

        this.bots.command("resultado", async (ctx) => {
            const [command, date] = ctx.message.text.split(" ")
            const countUseCase = new CountsUseCase()
            const data = await countUseCase.getCounts(date)
            
            let green = data.countGreen
            let gale1 = data.countGale1
            let gale2 = data.countGale2
            let white = data.countWhite
            let red = data.countRed
            let profit = data.profit_loss
            let profitWhite = data.profit_lossWhite
            let totalWin = green + white + gale1 + gale2
            let cont_total = (profit + profitWhite).toFixed(2).replace('.', ',')
            let cont_profit = ((profit + profitWhite + 100) - 100).toFixed(2).replace('.', ',')
            let totalSent = totalWin + red
            let percentageWin = Math.round((red * 100) / totalSent)
            let bank = (data.countGreen === null ? 0 : (data.profit_bank).toFixed(2).replace('.', ','))

            if (data.countGreen === null) {
                console.log("Sem registro")
                await ctx.reply(`š Resultados atĆ© agora! š\n\nā <b>Sem registro</b>\n\nā Acertos: <b>0</b>\nā NĆ£o Bateu: <b>0</b>\n\nš„ Primeira Entrada: <b>0</b>\n1ļøā£ Primeira Gale: <b>0</b>\n2ļøā£ Segunda Gale: <b>0</b>\nāŖ Winn Branco: <b>0</b>\n\n <b>0% de aproveitamento!</b>`, { parse_mode: 'HTML' })
                return
            }

            const message = `š Resultados atĆ© agora! š\n\nā Acertos: <b>${totalWin}</b>\nā NĆ£o Bateu: <b>${red}</b>\n\nš„ Primeira Entrada: <b>${green}</b>\n1ļøā£ Primeira Gale: <b>${gale1}</b>\n2ļøā£ Segunda Gale: <b>${gale2}</b>\nāŖ Winn Branco: <b>${white}</b>\n\n<b>${Math.round(100 - percentageWin)}% de aproveitamento!</b>\n\n*---------------------------------*\n\nāļø <b>Contabilidade:</b>\n\n<b>BANCA ACIMA DE R$ 100,00</b>\nšµ Banca Inicial: <b>R$ 100,00</b>\nšµ Red/Black: <b>R$ ${profit.toFixed(2).replace('.', ',')}</b>\nšµ White: <b>R$ ${profitWhite.toFixed(2).replace('.', ',')}</b>\nš Lucro: <b>R$ ${cont_profit}</b>\n\n#########################\n\n<b>BANCA ABAIXO DE R$ 100,00</b>\nšµ Banca Inicial: <b>R$ 100,00</b>\nšµ Red/Black: <b>R$ ${bank}</b>\nš Lucro: <b>R$ ${bank}</b>\n\n*---------------------------------*\n\nš° Cadastre-se e ganhe um bĆ“nus no seu primeiro depĆ³sito! ā¬ļø\nā https://bit.ly/3OT8XIG ā`

            await this.sendMessage({ message })
            await ctx.replyWithHTML(`šØ <b>RelatĆ³rio enviado!</b>`)
            return
        })

        this.bots.command("config", async (ctx) => {
            const configUseCase = new ConfigsUseCase()
            const configs = await configUseCase.show()

            const configsController = new ConfigsController()

            const respone = ctx.message.text.split(" ")
            const [_, botName, password, newDefault, activo] = ctx.message.text.split(" ")
            const newActivo = activo === "ativado" ? true : false

            if (respone.length !== 5) {
                await ctx.reply("ā ļø <b>Parametros Errados!</b>\n\nEnviar da seguinte maneira:\n\n<b>Comando:</b> /config\n<b>Bot:</b> nome do seu bot\n<b>Senha:</b> senha de acesso\n<b>PadrĆ£o:</b> nĆŗmero do seu padrĆ£o, ex. 3\n<b>Ativo:</b> ativado ou desativado\n\n<b>Exemplo:</b> /config blaze-bot abc123 4 ativado", { parse_mode: 'HTML' })
                return
            }

            switch (activo) {
                case "ativado":
                case "desativado":
                    if (configs === null) {
                        await configsController.create({ name: botName, standard: Number(newDefault), activo: newActivo, password: password.toString() })
                        await ctx.reply(`ā ļø AtenĆ§Ć£o ā ļø\n\nCadastro realizado!`, { parse_mode: 'HTML' })
                        return
                    }

                    if (configs.password === password && configs.name === botName) {
                        await configsController.create({ name: botName, standard: Number(newDefault), activo: newActivo, password: password.toString() })
                        await ctx.reply(`ā ļø AtenĆ§Ć£o ā ļø\n\nParĆ¢metros Alterados\n\n<b>Bot:</b> ${newActivo ? "Ativado" : "Desativado"}\n<b>PadrĆ£o:</b> ${Number(newDefault)}`, { parse_mode: 'HTML' })
                        return
                    }
                    await ctx.reply(`ā ļø AtenĆ§Ć£o ā ļø\n\nNome do Bot ou Senha errada!`, { parse_mode: 'HTML' })
                    break;
                default:
                    await ctx.reply("ā ļø AtenĆ§Ć£o ā ļø\n\nInforme se o BOT estĆ” \n<b>ativado</b> ou <b>desativado</b>", { parse_mode: 'HTML' })
                    break;
            }
        })
    }
}

export { Bot }