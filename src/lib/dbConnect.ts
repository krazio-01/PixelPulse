import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGO_URI;

if (!MONGODB_URI)
    throw new Error(
        'Please define the MONGO_URI environment variable inside .env'
    );

declare global {
    var mongooseCache: {
        conn: typeof mongoose | null;
        promise: Promise<typeof mongoose> | null;
    };
}

let cached = global.mongooseCache;

if (!cached) cached = global.mongooseCache = { conn: null, promise: null };

async function dbConnect() {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI as string, {
            bufferCommands: false,
        });
    }

    try {
        cached.conn = await cached.promise;
    } catch (error) {
        cached.promise = null;
        throw error;
    }

    return cached.conn;
}

export default dbConnect;
