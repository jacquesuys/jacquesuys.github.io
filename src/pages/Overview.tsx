import Card from "../components/Card";
import Categories from "../components/Categories";
import AppLayout from "../layout/AppLayout";

function Overview() {
  return (
    <AppLayout>
      <div className="stack w-full py-3">
        <Card>
          <Card.Body className="p-5">
            <Card.Title>Pending Requests</Card.Title>
            <Card.SubTitle>
              Here you can see your pending requests
            </Card.SubTitle>
            <div className="card-actions">
              <span className="badge">1/4</span>
              <progress
                className="progress w-full"
                value="25"
                max="100"
              ></progress>
            </div>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body className="p-5">
            <Card.Title>Pending Requests</Card.Title>
            <Card.SubTitle>
              Here you can see your pending requests
            </Card.SubTitle>
            <div className="card-actions">
              <span className="badge">1/4</span>
              <progress
                className="progress w-full"
                value="25"
                max="100"
              ></progress>
            </div>
          </Card.Body>
        </Card>
      </div>

      <Categories />
    </AppLayout>
  );
}

export default Overview;
