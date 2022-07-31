class MountMessageHelper {
    entryRed: string
    entryblack: string
    green: string
    red: string
    confirmedEntry: string
    info: string
    cover: string
    alert: string
    balance: string
    abortEntry: string
    greenWithWhite: string
    register: string

    constructor() {
        this.confirmedEntry = "<b>Entrada Confirmada ⚠️</b>"
        this.abortEntry = "<b>⚠️ ABORTAR ENTRADA ⚠️</b>"
        this.entryRed = "🔴"
        this.entryblack = "⚫"
        this.green = "<b>WINNNN!</b>\n✅ 🤑💰 ✅"
        this.red = "<b>REEED!</b>\n❌❌😯💨"
        this.info = "2️⃣ Máximo <b>02 Martingale</b>"
        this.cover = "⚪"
        this.alert = "<b>⚠️ ATENÇÃO ⚠️</b>"
        this.balance = "📊 Balanço 📊"
        this.greenWithWhite = "<b>WINNNN!!</b>\n✅ 🤑💰 ✅\n\n<i>No Branco</i> ⚪"
        this.register = "💰 Cadastre-se e ganhe um bônus no seu primeiro depósito! ⬇️\n✅ https://bit.ly/3OT8XIG ✅"
    }

    async Register() {
        return this.register
    }

    async ConfirmedEntry() {
        return this.confirmedEntry
    }

    async AbortEntry() {
        return this.abortEntry
    }

    async EntryRed() {
        return this.entryRed
    }

    async Entryblack() {
        return this.entryblack
    }

    async Green() {
        return this.green
    }

    async GreenWithWhite() {
        return this.greenWithWhite
    }

    async Red() {
        return this.red
    }

    async Info() {
        return this.info
    }

    async Cover() {
        return this.cover
    }

    async Alert() {
        return this.alert
    }

    async Balance() {
        return this.balance
    }
}

export { MountMessageHelper }