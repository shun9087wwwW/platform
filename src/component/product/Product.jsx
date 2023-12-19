import React from "react";
import { formatDistance, format } from "date-fns";
import { ja } from "date-fns/locale";

export default function Product({ title, text, path, image, createdAt }) {
  // time関数
  const time = (date) => {
    let timestamp = formatDistance(new Date(), date.toDate(), { locale: ja });
    // 条件分岐
    if (timestamp.indexOf("未満") !== -1) {
      return (timestamp = "たった今");
    } else if (
      timestamp.indexOf("か月") !== -1 ||
      timestamp.indexOf("年") !== -1
    ) {
      return (timestamp = format(date.toDate(), "yyyy年M月d日", {
        locale: ja,
      }));
    } else {
      return (timestamp = timestamp + "前");
    }
  };

  return (
    <div className="col">
      <div className="card">
        <a
          href={path}
          className="text-decoration-none text-dark"
          target="_blank"
        >
          <img
            src={image}
            className="card-img-top"
            alt=""
            style={{ opacity: "0.9" }}
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
            <p className="card-text">
              <small className="text-muted">{time(createdAt)}</small>
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
