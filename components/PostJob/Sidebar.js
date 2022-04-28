export default function Sidebar(props) {
    return (
      <div className="mt-5 mb-3 sticky-top sectionShadow p-3 p-md-4" id="side">
        <h6>Process</h6>
        <ul
          className="nav flex-md-column flex-row justify-content-between"
          id="sidenav"
        >
          <li className="nav-item">
            <a href="#create" className="nav-link active pl-0">
              1. Create
            </a>
          </li>
          <li className="nav-item">
            <a href="#preview" className="nav-link pl-0">
              2. Preview
            </a>
          </li>
          <li className="nav-item">
            <a href="#pay" className="nav-link pl-0">
              3. Pay
            </a>
          </li>
        </ul>
      </div>
    );
  }