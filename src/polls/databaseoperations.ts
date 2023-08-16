//databse operations without using quesry builder

1.
//SELECT * FROM "user"
// WHERE "firstName" = 'Timber' AND "lastName" = 'Saw'

// // ==>userRepository.find({
//     where: {
//         firstName: "Timber",
//         lastName: "Saw",
//     },
// })



//==> OR operator
// SELECT * FROM "user" WHERE ("firstName" = 'Timber' AND "lastName" = 'Saw') OR ("firstName" = 'Stan' AND "lastName" = 'Lee')

// userRepository.find({
//     where: [
//         { firstName: "Timber", lastName: "Saw" },
//         { firstName: "Stan", lastName: "Lee" },
//     ],
// })

// ==> orderBy:(ASC and DESC)

// userRepository.find({
//     order: {
//         name: "ASC",
//         id: "DESC",
//     },
// })

// userRepository.find({
//     order: {
//         name: "ASC",
//         id: "DESC",
//     },
// })



