/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";
function UpdateOrder({ order }) {
  const Fetcher = useFetcher();
  return (
    <Fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make Priority</Button>
    </Fetcher.Form>
  );
}

export default UpdateOrder;


export async function action({ request, params }) {
    const data = { priority: true }
    await updateOrder(params.orderId,data);
    return null
}