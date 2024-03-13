const typeDefs = `
type Peaks {
    _id: ID
    peakName: String
    elevation: String
    location: String
    difficulty: String
    permitRequired: Boolean
    peakImage: String
}
type Hikes {
    _id: ID
    timeTaken: Int
    date: String
    completed: Boolean
    journal: String
}
type User {
    _id: ID
    username: String
    email: String
    password: String
    hikes: [Hike]
    peaks: [Peak]
}

`;
