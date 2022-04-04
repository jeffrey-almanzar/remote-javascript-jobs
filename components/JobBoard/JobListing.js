import Card from "./Card";
import CardBody from "./CardBody";

export default function JobListing({ jobs }) {
  return (
    <div className="accordion" id="accordionExample-2">
      {jobs.map((accordion, index) => {
        const {
          title,
          description,
        } = accordion;

        const accordionKey = "job-title-" + index;

        return (
          <div key={title + "-" + index} className="accordion-item">
            <h2 className="accordion-header" id={accordionKey}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={"#collapseOne2" + accordionKey}
                aria-expanded="false"
                aria-controls={"collapseOne2" + accordionKey}
              >
                <Card {...accordion} />
              </button>
            </h2>
            <div
              id={"collapseOne2" + accordionKey}
              className="accordion-collapse collapse"
              aria-labelledby="headingOne2"
              data-bs-parent="#accordionExample-2"
            >
              <div className="accordion-body">
                <CardBody content={description} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
