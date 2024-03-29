import { Router } from "express";
import { CreateCostumerController } from "../modules/create-client/create-client.controller";

const router = Router();

router.post('/customers', (request, response) => {
    new CreateCostumerController().handle(request, response);
})

export { router }