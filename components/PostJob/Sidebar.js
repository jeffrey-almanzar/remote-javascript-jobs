export default function Sidebar(props) {
    return (
      <div className="mt-5 mb-3 sticky-top" id="side">
        <ul
          className="nav flex-md-column flex-row justify-content-between"
          id="sidenav"
        >
          <li className="nav-item">
            <a href="#sec1" className="nav-link active pl-0">
              Create
            </a>
          </li>
          <li className="nav-item">
            <a href="#sec2" className="nav-link pl-0">
              Preview
            </a>
          </li>
          <li className="nav-item">
            <a href="#sec3" className="nav-link pl-0">
              Pay
            </a>
          </li>
        </ul>
      </div>
    );
  }