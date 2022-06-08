import { useState } from "react";
import { Form, notification } from "antd";
import { FormLink } from "./style";
import { AuthLayout } from "@components/Layout/AuthLayout";
import Link from "next/link";
import { authService } from "@src/services/auth";
import { Input, Button } from "@components/General";
import { formatErrMsg } from "@src/utils/errorMessage";
import { useRouter } from "next/router";

export const RegisterContent = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (values: any) => {
    const payload = {
      user_name: values.user_name,
      email: values.email,
      password: values.password,
    };
    setIsSubmitting(true);
    try {
      const result = await authService.register(payload);
      if (result) {
        notification["success"]({
          message: "Registration",
          description: "Signup completed successfully, login to proceed",
        });
        router.push("/auth/login");
      }
    } catch (error) {
      setIsSubmitting(false);
      const err = formatErrMsg(error);

      notification["error"]({
        message: "Registration",
        description: err.message,
        duration: 3,
      });
    }
  };

  return (
    <AuthLayout>
      <h3>Create your account</h3>

      <Form
        onFinish={handleSubmit}
        layout="vertical"
        initialValues={{ phone: "" }}
      >
        <Form.Item
          name="user_name"
          rules={[{ required: true, message: "Enter your first name" }]}
          label="First Name"
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="lastName"
          rules={[{ required: true, message: "Enter your first name" }]}
          label="Last Name"
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="phone"
          rules={[{ required: false, message: "Enter your phone number" }]}
          label="Phone"
        >
          <Input />
        </Form.Item>

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
          rules={[
            { required: true, message: "Enter your password" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || value.length < 4 || Number(value) === value) {
                  return Promise.reject(
                    "Password must be at least 4 characters and should not be a number"
                  );
                } else {
                  return Promise.resolve();
                }
              },
            }),
          ]}
        >
          <Input type="password" />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          label="Confirm Password"
          rules={[
            { required: true, message: "Enter your confirm password" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") !== value) {
                  return Promise.reject("Password do not match");
                } else {
                  return Promise.resolve();
                }
              },
            }),
          ]}
        >
          <Input type="password" />
        </Form.Item>

        <Form.Item>
          <Button
            variant="primary"
            text="Register"
            disabled={isSubmitting}
            isLoading={isSubmitting}
          />
        </Form.Item>

        <Form.Item>
          <FormLink>
            Already have an account?{" "}
            <Link href="/auth/login">
              <a href="/auth/login">Login</a>
            </Link>
          </FormLink>
        </Form.Item>
      </Form>
    </AuthLayout>
  );
};
