import CardTrips from "../components/CardTrips";
export default function HomePage() {
  return (
    <>
      <div className="container">
        <div className="row row-cols-3">
          <CardTrips />
        </div>
      </div>
    </>
  );
}
