import React, { useEffect, useState } from "react";

type Items = {
  id: number;
  name: string;
  subcategory: string;
  desctiption: string;
};

function Transit() {
  const [items, setItems] = useState<Items[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/admin/inTransit")
      .then((response) => {
        if (response.status === 401) {
          //Unauthorized
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

  return <div>Gjenstander på vei!</div>;
}

export default Transit;
