import Form from "../components/Form";
import Text from "../components/Text";
import Avatar from "../components/Avatar";
import AppLayout from "../layout/AppLayout";
import BackButton from "../components/BackButton";
import { useForm } from "react-hook-form";
import { useNavigate } from "@tanstack/react-location";
import Context from "../context";
import { useContext } from "react";

function ProductsServicesSubPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const onSubmit = () => navigate({ to: "/products-services", replace: true });
  const { productService } = useContext(Context);
  console.log(productService.product);

  return (
    <AppLayout>
      <div className="flex justify-between items-center pb-4">
        <BackButton to="/requests" />
        <Text.PageTitle>{productService.product}</Text.PageTitle>
        <Avatar />
      </div>

      <Text.PageHeading>Hello Tuna Brock</Text.PageHeading>
      <Text.Paragraph>
        This is all your existing{" "}
        <span className="underline">personal information</span> and{" "}
        <span className="underline">documents</span> that FNB would like to
        access. Please review to confirm everything is still correct, and make
        changes where needed.
      </Text.Paragraph>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Section>
          <Form.Heading>Information</Form.Heading>
          <Form.Label>Full Name</Form.Label>
          <Form.LockInput>Tuna Brock</Form.LockInput>
          <Form.Label>ID/Passport</Form.Label>
          <Form.LockInput>2131214141</Form.LockInput>
          <Form.Label>Date of Birth</Form.Label>
          <Form.LockInput>1993/02/05</Form.LockInput>
          <Form.Label>Cellphone Number</Form.Label>
          <input
            {...register("cellphone-number", { required: true })}
            placeholder="Cellphone Number"
            className="input-field"
          />
          {errors["cellphone-number"] && (
            <Form.Erorr>Cellphone Number is required</Form.Erorr>
          )}
          <Form.Label>Residential Address</Form.Label>
          <input
            {...register("residential-address", { required: true })}
            placeholder="Residential Address"
            className="input-field"
          />
          {errors["residential-address"] && (
            <Form.Erorr>Residential Address is required</Form.Erorr>
          )}
        </Form.Section>
        <Form.Section>
          <Form.Heading>Documents</Form.Heading>
          <Form.Label>ID/Passport</Form.Label>
          <input
            type="file"
            {...register("id-passport-document", {
              required: true,
            })}
            className="file-input input-ghost text-sm rounded-2xl mb-4"
          />
          {errors["id-passport-document"] && (
            <Form.Erorr>ID/Passport is required</Form.Erorr>
          )}
        </Form.Section>
        <Form.Submit title="Confirm & Proceed" />
      </Form>

      <AppLayout.BottomNav />
    </AppLayout>
  );
}

export default ProductsServicesSubPage;
