import { Button } from "@/components/ui/button";

const TestPage = () => {
  return (
    <div className="h-100 flex justify-center items-center mt-20">
      <Button variant={"secondary"} size={"lg"}>
        <p className="text-4xl">Click Me</p>
      </Button>
    </div>
  );
};

export default TestPage;
