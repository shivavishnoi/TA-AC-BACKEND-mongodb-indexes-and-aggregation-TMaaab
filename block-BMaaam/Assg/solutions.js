db.data.aggregate([{ $match: { active: true } }]).pretty();
// db.users.findOne({ username: { $regex: 'son' } });
db.data.aggregate([{ $match: { name: { $regex: 'Owen' } } }]);
db.data.aggregate([
  { $match: { gender: 'Male' } },
  { $match: { active: true } },
]);
db.data.aggregate([
  { $match: { gender: 'Female' } },
  { $match: { active: true } },
  { $match: { age: { $gt: 25 } } },
]);
db.data.aggregate([
  { $match: { gender: 'Male' } },
  { $match: { age: { $gt: 40 } } },
  { $match: { eyeColor: 'green' } },
]);
db.data.aggregate([
  { $match: { gender: 'Male' } },
  { $match: { age: { $gt: 40 } } },
  { $match: { eyeColor: 'green' } },
]);
db.data.aggregate([
  { $match: { gender: 'Male' } },
  { $match: { eyeColor: 'blue' } },
  { $project: { country: '$address.country' } },
  { $match: { country: 'USA' } },
]);
db.data.aggregate([
  {
    $group: { _id: '$gender', count: { $sum: 1 } },
  },
]);
db.data.aggregate([
  { $match: { eyeColor: 'white' } },
  { $group: { _id: '$eyeColor', count: { $sum: 1 } } },
]);
db.data.aggregate([
  { $match: { age: { $gt: 20 } } },
  { $match: { gender: 'Female' } },
  { $match: { eyeColor: 'brown' } },
  { $group: { _id: '$eyeColor', count: { $sum: 1 } } },
]);
db.data.aggregate([{ $group: { _id: '$eyeColor', count: { $sum: 1 } } }]);
db.data.aggregate([{ $group: { _id: null, avg_age: { $avg: '$age' } } }]);
db.data.aggregate([{ $group: { _id: '$gender', avg_age: { $avg: '$age' } } }]);
db.data.aggregate([{ $group: { _id: null, max_age: { $max: '$age' } } }]);
db.data.aggregate([{ $group: { _id: null, min_age: { $min: '$age' } } }]);
db.data.aggregate([{ $group: { _id: '$gender', sum_age: { $sum: '$age' } } }]);
db.data.aggregate([
  { $match: { gender: 'Male' } },
  { $group: { _id: '$eyeColor', count: { $sum: 1 } } },
]);
db.data.aggregate([
  { $match: { gender: 'Female' } },
  { $match: { age: { $gt: 30 } } },
]);
db.data.aggregate([
  { $match: { age: { $gt: 23 }, gender: 'Male', eyeColor: 'blue' } },
  { $project: { country: '$address.country' } },
  { $match: { country: 'Germany' } },
]);
db.data.distinct('eyeColor');
db.data.aggregate([
  {
    $project: {
      name: 1,
      email: 1,
      identity: {
        eye: '$eyeColor',
        location: '$address.country',
      },
    },
  },
]);
// db.data.insert(
//   {
//     name: 'Owen Upton',
//     address: {
//       country: 'Germany',
//       city: 'Fizuli',
//       pin: 'AZ 4201',
//     },
//     email: 'Owen_Upton@hotmail.com',
//     age: 17,
//     eyeColor: 'blue',
//     gender: 'Male',
//     active: true,
//     regDate: '2022-04-15',
//   },
// );
//   {
//     name: 'Roderick Jacobs',
//     address: {
//       country: 'USA',
//       city: 'Houndé',
//       pin: '99612',
//     },
//     email: 'Roderick.Jacobs94@hotmail.com',
//     age: 74,
//     eyeColor: 'blue',
//     gender: 'Male',
//     active: true,
//     regDate: '2022-01-25',
//   },
