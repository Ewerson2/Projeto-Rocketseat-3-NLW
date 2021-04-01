const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async (db) => {
    
    //inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-27.2226333",
        lng: "-49.6455874",
        name: "Lar dos meninos",
        about: "Presta assistencia a crianças de 06 a 15 anos que se encontra em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "912345678",
        images: [
            "https://images.unsplash.com/photo-1592840331052-16e15c2c6f95?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1576043005963-f4b2a8d1195d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha se sentir a vontade e traga muito amor e paciência para dar",
        opening_hours: "Horário de visita das 8h até 18h",
        open_on_weekends: "0"
    })

    //consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //consultar somente 1 orfanato, pelo ID
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    console.log(orphanage)

    //deletar dados da tabela
    //console.log(await db.run("DELETE FROM orphanages"))
    //console.log(await db.run("DELETE FROM orphanages WHERE id = '15'"))
})