import express from "express";
import router from "./routes/index";
import { PrismaClient } from "@prisma/client";


export const app = express();
const port = 8080;

export const prisma = new PrismaClient();

app.use(express.json());
app.use("/api/v1/post", router);

app.get("/", (_req: any, res: any) => {
    res.send("Welcome to the Blog API");
});

app.listen(port, async () => {
    console.log("Server is running on http://localhost:8080");

    try {
        prisma.$connect();
        console.log("Database connected");
    } catch (e: any) {
        console.error("Database connection failed");
        await prisma.$disconnect();
        process.exit(1);
    }

});
