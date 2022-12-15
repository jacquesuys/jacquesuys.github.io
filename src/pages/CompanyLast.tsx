import Form from "../components/Form";
import Text from "../components/Text";
import Avatar from "../components/Avatar";
import AppLayout from "../layout/AppLayout";
import BackButton from "../components/BackButton";
import { useNavigate } from "@tanstack/react-location";
import { useForm } from "react-hook-form";

function CompanyLast() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const onSubmit = () => navigate({ to: "/requests", replace: true });

  return (
    <AppLayout>
      <div className="flex justify-between items-center pb-4">
        <BackButton to="/company" />
        <Text.PageTitle>BIPA Update(2/2)</Text.PageTitle>
        <Avatar />
      </div>

      <Text.PageHeading>Additional Information</Text.PageHeading>
      <Text.Paragraph>
        Thank you for updating/confirming your existing information BIPA also
        requires the following additional{" "}
        <span className="underline">information</span> and{" "}
        <span className="underline">documents</span>. Please complete all the
        fields and upload the required documents.
      </Text.Paragraph>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Section>
          <Form.Heading>Information</Form.Heading>
          <Form.Label>Company Name*</Form.Label>
          <input
            {...register("company-name", { required: true })}
            placeholder="Company Name"
            className="input-field"
          />
          {errors["company-name"] && (
            <Form.Erorr>Company Name is required</Form.Erorr>
          )}
          <Form.Label>Company Type*</Form.Label>
          <select
            {...register("company-type", {
              required: true,
              validate: (val) => val !== "Select",
            })}
            className="input-field select font-light"
          >
            <option>Select</option>
            <option>Type 1</option>
            <option>Type 2</option>
            <option>Type 3</option>
          </select>
          {errors["company-type"] && (
            <Form.Erorr>Company Type is required</Form.Erorr>
          )}
          <Form.Heading>Documents</Form.Heading>
          <Form.Label>CC1/CC2*</Form.Label>
          <input
            type="file"
            {...register("cc1-cc2-document", {
              required: true,
            })}
            className="file-input input-ghost text-sm rounded-2xl mb-4"
          />
          {errors["cc1-cc2-document"] && (
            <Form.Erorr>CC1/CC2 is required</Form.Erorr>
          )}
          <Form.Label>Tax Certificate*</Form.Label>
          <input
            type="file"
            {...register("tax-certificate-document", {
              required: true,
            })}
            className="file-input input-ghost text-sm rounded-2xl mb-4"
          />
          {errors["tax-certificate-document"] && (
            <Form.Erorr>Tax Certificate is required</Form.Erorr>
          )}
        </Form.Section>

        <Form.Submit title="Confirm & Proceed" />
      </Form>

      <AppLayout.BottomNav />
    </AppLayout>
  );
}

export default CompanyLast;
