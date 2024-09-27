import { useTable, useMany } from "@refinedev/core";

export const ListProducts = () => {
  const {
    tableQuery: { data, isLoading },
    current,
    setCurrent,
    pageCount
  } = useTable({
    resource: "protected-products",
    pagination: { current: 1, pageSize: 10 },
    sorters: { initial: [{ field: "id", order: "asc" }] },
  });

  const {data: categories } =useMany({
    resource:"categories",
    ids: data?.data?.map((product)=>product.category?.id)??[],
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const onPrevious = () =>{
    if(current>1){
        setCurrent(current-1);
    }
  };

  const onNext = () =>{
    if(current<pageCount){
        setCurrent(current+1);
    }
  };

  const onPage = (page: number) => {
    setCurrent(page);
  };


  return (
    <div>
      <h1>Products</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Material</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.category?.id}</td>
              <td>{product.material}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};