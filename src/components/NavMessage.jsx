import React from 'react';

function NavMessage() {
  return (
    <li className="nav-item dropdown">
        <a href="#" className="nav-link nav-icon" data-bs-toggle="dropdown">
            <i className="bi bi-chat-left-text"></i>
            <span className="badge bg-success badge-number">3</span>
        </a>

        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
            <li className="dropdown-header">
                You have 4 new messages
                <a href="#">
                    <span className="badge rounded-pill bg-primary p-2 ms-2">View all</span>
                </a>
            </li>
            <li>
                <hr className="dropdown-divider" />
            </li>

            <li className="message-item">
                <a href="#">
                <img src="assets/img/images-1.jpg" alt="" className="rounded-circle" />
                <div>
                    <h4>Magnun Carsen</h4>
                    <p>Mujhe nhi pta kya likhna hai edher so isse hi kaam chala le...</p>
                    <p>2 days ago</p>
                </div>
                </a>
            </li>
            <li>
                <hr className="dropdown-divider" />
            </li>

            <li className="message-item">
                <a href="#">
                <img src="assets/img/images-1.jpg" alt="" className="rounded-circle" />
                <div>
                    <h4>Magnun Carsen</h4>
                    <p>Mujhe nhi pta kya likhna hai edher so isse hi kaam chala le...</p>
                    <p>2 days ago</p>
                </div>
                </a>
            </li>
            <li>
                <hr className="dropdown-divider" />
            </li>

            <li className="message-item">
                <a href="#">
                <img src="assets/img/images-1.jpg" alt="" className="rounded-circle" />
                <div>
                    <h4>Magnun Carsen</h4>
                    <p>Mujhe nhi pta kya likhna hai edher so isse hi kaam chala le...</p>
                    <p>2 days ago</p>
                </div>
                </a>
            </li>
            <li>
                <hr className="dropdown-divider" />
            </li>

            <li className="message-item">
                <a href="#">
                <img src="assets/images/images-1.jpg" alt="" className="rounded-circle" />
                <div>
                    <h4>Magnun Carsen</h4>
                    <p>Mujhe nhi pta kya likhna hai edher so isse hi kaam chala le...</p>
                    <p>2 days ago</p>
                </div>
                </a>
            </li>
            <li>
                <hr className="dropdown-divider" />
            </li>

            <li className="dropdown-footer">
                <a href="#">Show all messages</a>
            </li>
        </ul>
    </li>
  );
}

export default NavMessage;
