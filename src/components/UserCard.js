
import './UserCard.css'

const UserCard = ({ name, phone, location, pic }) => {
    return (
        <div className="col-md-4 animated fadeIn">
            <div className="card">
            <div className="card-body">
                <div className="avatar">
                <img
                    src={pic}
                    alt=""
                />
                </div>
                <h5 className="card-title">
                {name}
                </h5>
                <p className="card-text">
                {location}
                <br />
                <span className="phone">{phone}</span>
                </p>
            </div>
            </div>
        </div>
    )
}

export default UserCard