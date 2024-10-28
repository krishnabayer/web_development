import { Button } from "./components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./components/ui/Carousel";

function App() {
  return (
    <div className="px-20">
      <Button>shadcn button</Button>
      <Carousel>
        <CarouselContent>
          <CarouselItem>.1..</CarouselItem>
          <CarouselItem>.2..</CarouselItem>
          <CarouselItem>.3..</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default App;
