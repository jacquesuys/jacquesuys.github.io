import Avatar from "../components/Avatar";
import LinkButton from "../components/LinkButton";
import AppLayout from "../layout/AppLayout";
import BackButton from "../components/BackButton";
import Form from "../components/Form";
import Text from "../components/Text";

function Documents() {
  return (
    <AppLayout>
      <div className="flex justify-between items-center pb-4">
        <BackButton to="/my-vault" />
        <div className="font-semibold text-base text-white">My Documents</div>
        <Avatar />
      </div>
      <div
        className="flex flex-col justify-between"
        style={{ height: `calc(100vh - 200px)` }}
      >
        <div>
          <h2 className="font-bold text-2xl my-1">Hello Tuna Brock.</h2>
          <Text.Paragraph>
            This is all your existing documents that is securely stored in your
            vault. Please review to confirm everything is still correct, and
            make changes where needed.
          </Text.Paragraph>
        </div>

        <Form.Section>
          <Form.Heading>Documents</Form.Heading>
          <Form.Label>ID/Passport</Form.Label>
          <Form.LockInput>2131214141</Form.LockInput>
          <Form.Label>Payslip</Form.Label>
          <Form.LockInput>1993/02/05</Form.LockInput>
          <Form.Label>Marriage Certificate</Form.Label>
          <Form.LockInput>1993/02/05</Form.LockInput>
        </Form.Section>

        <LinkButton to="/overview" className="w-full btn-md">
          Confirm & Save
        </LinkButton>
      </div>
      <AppLayout.BottomNav />
    </AppLayout>
  );
}

export default Documents;
