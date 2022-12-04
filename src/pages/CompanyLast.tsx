import { Link } from "@tanstack/react-location";
import Form from "../components/Form";
import Text from "../components/Text";
import Avatar from "../components/Avatar";
import Button from "../components/Button";
import ChevronLeftIcon from "../icons/ChevronLeftIcon";
import AppLayout from "../layout/AppLayout";

function CompanyLast() {
  return (
    <AppLayout>
      <div className="flex justify-between items-center pb-4">
        <Button className="bg-primary btn-md rounded-2xl px-3 py-0">
          <ChevronLeftIcon />
        </Button>
        <Text.PageTitle>BIPA Update(1/2)</Text.PageTitle>
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
      <Form.Section>
        <Form.Heading>Information</Form.Heading>
        <Form.Label>Company Name*</Form.Label>
        <Form.Input type="text" placeholder="Company Name" />
        <Form.Label>Company Type*</Form.Label>
        <select
          className="select w-1/2 rounded-2xl mb-4 font-light"
          defaultValue="Select Company Type"
        >
          <option>Type 1</option>
          <option>Type 2</option>
          <option>Type 3</option>
        </select>
        <Form.Heading>Documents</Form.Heading>
        <Form.Label>CC1/CC2*</Form.Label>
        <Form.FileInput />
        <Form.Label>Tax Certificate*</Form.Label>
        <Form.FileInput />
      </Form.Section>
      <Link to="/thank-you">
        <Button className="w-full bg-primary">Confirm &amp; Proceed</Button>
      </Link>
      <AppLayout.BottomNav />
    </AppLayout>
  );
}

export default CompanyLast;
