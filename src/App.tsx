import React from "react";
import { useQuery } from "react-apollo-hooks";
import { GET_ARTICLES } from "./graphql-queries";






const App: React.FC<{}> = () => {
  const { data, error, loading } = useQuery(GET_ARTICLES, {
    variables: { offset: 0, limit: 10 }
  });
  console.log(data, loading);
  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>something goes wrong...!</div>;
  }

  return (
    <div>
      <ul>
        {data.getArticles.map((item: any) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
