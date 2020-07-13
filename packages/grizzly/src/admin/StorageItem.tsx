import React, { useEffect, useState } from "react";

type Props = {
  match: {
    params: {
      id: string;
    };
  };
};

type StorageItem = {
  id: number;
  subcategory: string;
  description: string;
  matchCount: number;
  newMatchCount: number;
};

function StorageItem(props: Props) {
  const [storageItem, setStorageItem] = useState<StorageItem | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("api/admin/????")
      .then((response) => {
        if (response.status === 401) {
          // Unauthorized
        } else {
          return response.json();
        }
      })
      .then((jsonData) => {
        setStorageItem(jsonData);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  }, [props.match.params.id]);

  return <p>Ikke implementert</p>;

  /*
  if (error) {
    return <p>Noe gikk galt</p>;
  }

  if (isLoading) {
    return <p>Laster...</p>;
  }

  return <div>{storageItem?.id}</div>;

   */
}

export default StorageItem;
