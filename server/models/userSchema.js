import {Schema, model} from "mongoose"

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  favoriteMovies:[{type:Schema.Types.ObjectId,
  ref:"Movie"
  }],
  role:{
    type:String,
    default:"user",
    enum:["user","admin"]   
},
}, { timestamps: true });

const User = model('User', userSchema);

export default User
