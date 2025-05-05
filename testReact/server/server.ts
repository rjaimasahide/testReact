import express from "express";

const app: express.Express = express();
const port = 3001;

app.get("/", (req: express.Request, res: express.Response) => {
    res.send("Hello");
});

app.get("/api", (req: express.Request, res: express.Response) => {
    res.json([
        {
            id: 1,
            name: "aaa"
        },
        {
            id: 2,
            name: "bbb"
        }
    ])
});

app.listen(port, () => {
    console.log(`port ${port}でサーバ起動中`);
});