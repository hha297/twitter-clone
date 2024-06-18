import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
        {
                username: {
                        type: String,
                        require: true,
                        unique: true,
                },
                fullName: {
                        type: String,
                        require: true,
                        unique: true,
                },
                password: {
                        type: String,
                        require: true,
                        minLength: 6,
                },
                email: {
                        type: String,
                        require: true,
                        unique: true,
                },
                followers: [
                        {
                                type: mongoose.Schema.Types.ObjectId,
                                ref: 'User',
                                default: [],
                        },
                ],
                following: [
                        {
                                type: mongoose.Schema.Types.ObjectId,
                                ref: 'User',
                                default: [],
                        },
                ],
                profileImg: {
                        type: String,
                        default: '',
                },
                coverImg: {
                        type: String,
                        default: '',
                },
                bio: {
                        type: String,
                        default: '',
                },
                link: {
                        type: String,
                        default: '',
                },
        },
        { timestamps: true },
);

const User = mongoose.model('User', userSchema);

export default User;
