import {Schema, model} from "mongoose"
const movieSchema = new Schema({
  
    "title": String,
    "year": Number,
    "released": Date,
    "runtime": String,
    "genre": [String],
    "director": String,
    "writer": String,
    "actors": [String],
    "plot": String,
    "language": String,
    "country": [String],
    "awards": String,
    "poster": String,
    "ratings": [
      {
        "source": String,
        "value": String
      }
    ]
  // description: {
  //   type: String,
  //   required: true
  // },
  // releaseDate: {
  //   type: Date,
  //   required: true
  // },
  // genre: {
  //   type: String,
  //   required: true
  // },
  // actors: [{
  //   type: String,
  //   required: true
  // }],
  // director: {
  //   type: String,
  //   required: true
  // },
  // rating: {
  //   type: Number,
  //   min: 1,
  //   max: 5,
  //   default: 1
  // },
  // imageUrl: {
  //   type: String,
  //   required: true
  // },
  // createdBy: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'User',
  //   required: true
  // }
}, { timestamps: true });

const Movie = model('Movie', movieSchema);
export default Movie


