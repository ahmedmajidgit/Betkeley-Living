import mongoose from 'mongoose';

export async function connect(): Promise<void> {
    try {
        // Ensure the environment variable is not undefined
        const mongoUri = process.env.MONGO_URI;
        if (!mongoUri) {
            throw new Error("MONGO_URI is not defined in the environment variables");
        }

        await mongoose.connect(mongoUri);
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log("MongoDB connected successfully");
        });

        connection.on('error', (err) => {
            console.error('MongoDB connection error: ' + err);
            process.exit(1); // Use 1 to indicate an error exit status
        });
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}
