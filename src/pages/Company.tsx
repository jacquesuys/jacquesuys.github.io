import { Link } from "@tanstack/react-router";
import Form from "../components/Form";
import Text from "../components/Text";
import Avatar from "../components/Avatar";
import Button from "../components/Button";
import ChevronLeftIcon from "../icons/ChevronLeftIcon";
import AppLayout from "../layout/AppLayout";

function Company() {
  return (
    <AppLayout>
      <div className="flex justify-between items-center pb-4">
        <Button className="bg-primary btn-md rounded-2xl px-3 py-0">
          <ChevronLeftIcon />
        </Button>
        <Text.PageTitle>BIPA Update(1/2)</Text.PageTitle>
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
      <Form.Section>
        <Form.Heading>Information</Form.Heading>
        <Form.Label>Full Name</Form.Label>
        <Form.LockInput>Tuna Brock</Form.LockInput>
        <Form.Label>ID/Passport</Form.Label>
        <Form.LockInput>2131214141</Form.LockInput>
        <Form.Label>Date of Birth</Form.Label>
        <Form.LockInput>1993/02/05</Form.LockInput>
        <Form.Label>Cellphone Number</Form.Label>
        <Form.Input type="text" placeholder="Cellphone Number" />
        <Form.Label>Residential Address</Form.Label>
        <Form.Input type="text" placeholder="15 Werth Single Street" />
      </Form.Section>
      <Form.Section>
        <Form.Heading>Documents</Form.Heading>
        <Form.Label>ID/Passport</Form.Label>
        <Form.FileInput />
      </Form.Section>
      <Link to="/company-last">
        <Button className="w-full bg-primary">Confirm &amp; Proceed</Button>
      </Link>
      <AppLayout.BottomNav />
    </AppLayout>
  );
}

export default Company;
