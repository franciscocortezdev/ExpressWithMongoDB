import mongoose from "mongoose"

const UserSchema = new mongoose.Schema(
  {
    nombre:{
      type: String,
      required: true
    },
    apellido:{
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

const userModel = mongoose.model("users", UserSchema)
export default userModel
