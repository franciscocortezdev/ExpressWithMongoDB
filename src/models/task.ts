import mongoose from "mongoose"
import paginate from "mongoose-paginate-v2"

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
    idUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      require: true,
      select: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

TaskSchema.plugin(paginate)

interface TaskDocument extends mongoose.Document {}

const taskModel = mongoose.model<
  TaskDocument,
  mongoose.PaginateModel<TaskDocument>
>("tasks", TaskSchema)

export default taskModel
