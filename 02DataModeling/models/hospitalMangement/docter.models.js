import mongoose from "mongoose";

const docterSchema = new mongoose.Schema({}, { timestamps: true });

export const Docter = mongoose.model("Docter", docterSchema);
