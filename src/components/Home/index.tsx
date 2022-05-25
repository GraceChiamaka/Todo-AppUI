import { Header, Button } from "@components/General";
import { Container, ButtonContainer, GetStartedBtn } from "./style";
import Link from "next/link";

const Homepage = () => {
  return (
    <>
      <Header />
      <Container>
        <h3>Tasks, Just Tasks</h3>
        <p>Keep track of daily tasks and gain satisfaction on completion</p>
        <ButtonContainer>
          <Link href="/tasks">
            <Button variant="primary" text="Get Started" />
          </Link>
        </ButtonContainer>
      </Container>
    </>
  );
};

export { Homepage };
