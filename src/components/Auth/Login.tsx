import { useState } from "react";
import { Form, notification } from "antd";
import { FormLink } from "./style";
import { formatErrMsg } from "@src/utils/errorMessage";
import { AuthLayout } from "@components/Layout/AuthLayout";
import { Input, Button } from "@components/General";
import Link from "next/link";
import { authService } from "@src/services/auth";
import { useRouter } from "next/router";
import { storageController } from "@src/utils/storage";

const access_token = process.env.NEXT_PUBLIC_ACCESS_TOKEN || "";

export const LoginContent = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (values: any) => {
    setIsSubmitting(true);

    try {
      const result = await authService.login(values);
      if (result) {
        notification["success"]({
          message: "Login",
          description: "Login successful!",
        });
        storageController.store(result.data.tokens.accessToken, access_token);
        router.push("/tasks");
      }
    } catch (error) {
      setIsSubmitting(false);
      const err = formatErrMsg(error);

      notification["error"]({
        message: "Login",
        description: err.message,
        duration: 3,
      });
    }
  };

  return (
    <AuthLayout>
      <h3>Login</h3>

      <Form onFinish={handleSubmit} layout="vertical">
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: "Enter your email" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: "Enter your password" }]}
        >
          <Input type="password" />
        </Form.Item>
        <Form.Item>
          <Button
            variant="primary"
            text="Login"
            disabled={isSubmitting}
            isLoading={isSubmitting}
          />
        </Form.Item>

        <Form.Item>
          <FormLink>
            Don't have an account yet?{" "}
            <Link href="/auth/register">
              <a href="/auth/login">Sign up</a>
            </Link>
          </FormLink>
        </Form.Item>
      </Form>
    </AuthLayout>
  );
};
