import React, { useEffect, useState } from "react";

type Items = {
  id: number;
  name: string;
  subcategory: string;
  description: string;
};

function ReadyToPickUp() {
  const [items, setItems] = useState<Items[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("api/admin/ReadyToPickUp")
      .then((response) => {
        if (response.status === 401) {
          //unauthorized
        } else {
          return response.json();
        }
      })
      .then((jsonData) => {
        setItems(jsonData.data.items);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  });

  if (error) {
    return <p>Noe gikk galt</p>;
  }

  if (isLoading) {
    return <p>Laster...</p>;
  }

  return <div>Hei</div>;
}

export default ReadyToPickUp;
