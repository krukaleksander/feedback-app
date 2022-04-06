import { validate, IsEmail } from "class-validator";

class ValidateEmail {
  @IsEmail()
  email!: string;
}

test("passed email is not an email", async () => {
  const emailValidation = new ValidateEmail();
  emailValidation.email = "aaaa";
  await validate(emailValidation).then((err) => console.log(err));
});
