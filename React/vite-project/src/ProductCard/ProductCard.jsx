import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export function ProductCard(props) {
  return (
    <Card className="w-64 flex flex-col items-center justify-between">
      <CardContent>
        <img className="w-40 h-40 object-cover rounded-lg" src={props.imageUrl} />
        <div>
          <span className="text-sm font-semibold text-gray-800">
            {props.title}
          </span>
          <p className="text-sm font-bold mt-2">{props.price} $</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}
