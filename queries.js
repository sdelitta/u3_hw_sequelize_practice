const {human_society, dog_pound, cat_kennel, sequelize} = require('./models')
const { Op } = require('sequelize')


async function main() {
    try {
        // const humane_societies = await Humane_Society.findAll()
        // const dog_pounds = await Dog_Pound.findAll()
        // const cat_kennels = await Cat_Kennel.findAll()

        // const newHumaneSociety = await Humane_Society.create({
        // address: '789 Bagel Boulevard', availableDogs: 1, availableCats: 1
        // const newDogPound = await DogPound.create({
        // dogName: 'Lassie', breed: 'Collie', age: 2, temperament: 'Obedient', humaneSocietyId: 1
        // const newBusiness = await Business.create({
        // catName: 'Whiskers', breed: 'Calico', age: 3, temperament: 'Hostile', humaneSocietyId: 2

        // const humaneSocietyUpdate = await Humane_Society.update(
        //   {address: "123 Sesame Place"},
        //   {where: {address:"Muppet Treasure Island"}}
        // )
        // const dogPoundUpdate = await dog_pound.update(
        //   {dogName: "Rover"},
        //   {where: {dogName:"Biscuits"}}
        // )
        // const catKennelUpdate = await cat_kennel.update(
        //   {catName: "Garfield"},
        //   {where: {name:"Whiskers"}}
        // )

        // const humaneSocietyDelete = await Humane_Society.destroy(
        //   {where: {address: "345 Poppy Place"}}
        // )
        // const dogPoundDelete = await Dog_Pound.destroy(
        //   {dogName: {dogName: "Rover"}}
        // )
        // const catKennelDelete = await Cat_Kennel.destroy(
        //   {catName: {catName: "Whiskers"}}
        // )
    } catch (error) {
        console.log(error)
      } finally {
        await sequelize.close()
      }
    }
    
    main()