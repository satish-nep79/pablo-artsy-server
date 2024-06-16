import mongoose from "mongoose";


const AccessTokenSchema = new mongoose.Schema(
    {
        type: {
            type: String,
            required: true,
            trim: true,
        },
        token: {
            type: String,
            required: true,
        },
        expires_at: {
            type: Date,
            required: false,
            trim: true,
        },
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    { timestamps: true }
);