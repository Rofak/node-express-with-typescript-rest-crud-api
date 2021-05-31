import express from "express";
import { Server} from "typescript-rest";

let app: express.Application = express();
Server.loadServices(express.Router(),"controller/*",__dirname)
Server.buildServices(app);
app.listen(8080, function () {
    console.log('Rest Server listening on port 8080!');
});
