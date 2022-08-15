const dbConnect = require('./mongodb');

const insert = async () => {
    const db = await dbConnect();
    const result = await db.insert(
        [{
            name:'babu-sona',
            age:'18'
        },
        {
            name:'sonu',
            age:19
        }
    ]
    );

    if(result.acknowledged){
        console.log('data inserted')
    }

}

insert();