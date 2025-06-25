import { useState } from "react";

export default function User() {
  const [activeTab, setActiveTab] = useState("profile");

  const initialData = {
    name: "John Doe",
    phone: "7875 149753",
    email: "johndoe@hotmail.com",
    password: "*********",
    address: `61 Church St\nBerwick-upon-Tweed\nNorthumberland\nTD15 1EE\nUnited Kingdom`,
  };

  const [userData, setUserData] = useState(initialData);
  const [editField, setEditField] = useState(null);
  const [tempValue, setTempValue] = useState("");

  const fields = [
    { key: "name", label: "Name", icon: "user.png" },
    { key: "phone", label: "Phone number", icon: "phone.png" },
    { key: "email", label: "Mail", icon: "mail.png"},
    { key: "password", label: "Password", icon: "password.png" },
    { key: "address", label: "Address", icon: "location.png" }
  ];

  const handleEdit = (key) => {
    setEditField(key);
    setTempValue(userData[key]);
  };

  const handleSave = () => {
    setUserData({ ...userData, [editField]: tempValue });
    setEditField(null);
  };

  return (
    <section className="user">
      <div className="user__tabs">
        <button
          className={`user__tab ${activeTab === "profile" ? "active" : ""}`}
          onClick={() => setActiveTab("profile")}
        >
          Profile
        </button>
        <button
          className={`user__tab ${activeTab === "orders" ? "active" : ""}`}
          onClick={() => setActiveTab("orders")}
        >
          Orders
        </button>
      </div>

      {activeTab === "profile" ? (
        <div className="user__profile">
        <h2>Your profile information</h2>
          {fields.map((field) => (
            <div key={field.key} className="user__card">
              <div className="user__info">
                <img src={`/img/user/${field.icon}`} alt={field.label} />
                <div className="user__info-right">
                  <p className="user__title">{field.label}</p>
                  {editField === field.key ? (
                    <>
                      {field.key === "address" ? (
                        <textarea
                          value={tempValue}
                          onChange={(e) => setTempValue(e.target.value)}
                        />
                      ) : (
                        <input
                          type={field.key === "password" ? "password" : "text"}
                          value={tempValue}
                          onChange={(e) => setTempValue(e.target.value)}
                        />
                      )}
                    </>
                  ) : field.key === "address" ? (
                    userData[field.key].split("\n").map((line, i) => (
                      <p className="user__info-details" key={i}>
                        {line}
                      </p>
                    ))
                  ) : (
                    <p className="user__info-details">{userData[field.key]}</p>
                  )}
                </div>
              </div>

              <div className="user__actions-edit">
                {editField === field.key ? (
                  <button onClick={handleSave}>Save</button>
                ) : (
                  <button onClick={() => handleEdit(field.key)}>
                    <img src="/img/user/edit.png" alt="Edit" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="user__orders">
         <h2>Your Orders</h2>
          <p>You have no orders yet.</p>
        </div>
      )}
    </section>
  );
}
