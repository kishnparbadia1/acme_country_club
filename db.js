const { UUID, UUIDV4, STRING, INTEGER, DATE, BelongsTo } = require('sequelize');
const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme_country_club_db');

const Facility = conn.define('facilities', {
    id: {
        type: UUID,
        primaryKey: true,
        defaultValue: UUIDV4,
    },
    facName: STRING(100)
})

const Member = conn.define('members', {
    id: {
        type: UUID,
        primaryKey: true,
        defaultValue: UUIDV4,
    },
    firstName: STRING(20)
})

const Booking = conn.define('bookings', {
    startTime: {
        type: DATE
    },
    endTime: {
        type: DATE
    }
})


Member.belongsTo(Member,{as: 'sponsor'})


const syncAndSeed = async() => {
    await conn.sync({force: true});
    const [moe, lucy, larry, ethyl ]= await Promise.all([members.map( firstName => Member.create({firstName})));
        moe.sponsorId = lucy.id
        ethyl.sponsorId = moe.id
        larry.sponsorId = lucy.id
        await Promise.all([moe.save(), ethyl.save(), larry.save()])
    ])
    

}
const init = () => {
    syncAndSeed()
}
init()