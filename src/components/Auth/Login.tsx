import { AuthContainer, Container, FormGroup } from "./style";
import { Header, Input, Button } from "@components/General";
import Link from "next/link";

export const LoginContent = () => {
  return (
    <div>
      <Header />
      <Container>
        <AuthContainer>
          <h3>Login with your login details</h3>
          <p></p>
          <form action="">
            <FormGroup>
              <p>Email*</p>
              <Input />
            </FormGroup>
            <FormGroup>
              <p>Password*</p>
              <Input />
            </FormGroup>
            <FormGroup>
              <Button variant="primary" text="Login" />
            </FormGroup>
            <FormGroup>
              <p>
                Don't have an account yet?{" "}
                <Link href="/auth/register">
                  <a href="">Sign up</a>
                </Link>
              </p>
            </FormGroup>
          </form>
        </AuthContainer>
      </Container>
    </div>
  );
};
