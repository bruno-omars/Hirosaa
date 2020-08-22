import React, { FC } from "react";
import { useCirclesQuery } from "../../generated/graphql";

const CircleListPage: FC = () => {
  const { data, loading, error } = useCirclesQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! ${error.message}</p>;

  console.log(data);
  const circles = data?.Circle.map((circle) => {
    return <li key={circle.id}>{circle.name}</li>;
  });

  return (
    <div>
      <h1>サークル一覧</h1>
      <div>{circles}</div>
    </div>
  );
};

export default CircleListPage;
