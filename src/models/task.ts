import mongoose from "mongoose"

const TaskSchema = new mongoose.Schema(
  {
    body: {
      type: String,
      required: true,
    },
    done: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

const taskModel = mongoose.model("tasks", TaskSchema)
export default taskModel
