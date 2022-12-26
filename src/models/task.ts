import mongoose from "mongoose"

const TaskSchema = new mongoose.Schema(
  {
    body: {
      type: String,
      required: true,
    },
    done: {
      type: Boolean,
      default: false,
    },
    idUser: {
      type: mongoose.Schema.Types.ObjectId, ref: 'users',
      require: true,
      select: false
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

const taskModel = mongoose.model("tasks", TaskSchema)
export default taskModel
