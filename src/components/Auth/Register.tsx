import { AuthContainer, Container, FormGroup } from "./style";
import { Header, Input, Button } from "@components/General";

export const RegisterContent = () => {
  return (
    <div>
      <Header />
      <Container>
        <AuthContainer>
          <h3>Create your account</h3>
          <p></p>
          <form>
            <FormGroup>
              <p>First Name*</p>
              <Input required={true} />
            </FormGroup>
            <FormGroup>
              <p>Last Name*</p>
              <Input required={true} />
            </FormGroup>
            <FormGroup>
              <p>Phone</p>
              <Input required={false} />
            </FormGroup>
            <FormGroup>
              <p>Email*</p>
              <Input required={true} />
            </FormGroup>
            <FormGroup>
              <p>Password*</p>
              <Input required={true} />
            </FormGroup>
            <FormGroup>
              <p>Confirm Password*</p>
              <Input required={true} />
            </FormGroup>
            <FormGroup>
              <Button variant="primary" text="Register" />
            </FormGroup>
          </form>
        </AuthContainer>
      </Container>
    </div>
  );
};
