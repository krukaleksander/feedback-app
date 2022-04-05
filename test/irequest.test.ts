import { validate } from "class-validator";

test("requires id", async () => { 
   const request = new Request();
   request.email = "michaugmail.com";
   ...
   expect(await validate(request)).toEqual([{field: ;email', message: "email is invalid"}]);
 })