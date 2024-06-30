import Image from "next/image";
import icon from "../../public/Icon.png";

function Message() {
  return (
    <div className="mt-24 flex flex-col items-center justify-center gap-4">
      <Image src={icon} alt="explore" />
      <p className="text-muted-foreground">Start Exploring</p>
    </div>
  );
}

export default Message;
