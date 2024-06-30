import Link from "next/link";

function Header(props: { title: string; link: string; action: string }) {
  return (
    <div className="bg-[url('/background.png')] h-[40vh] bg-black flex flex-col  justify-center">
      <div className="text-white flex justify-between items-center w-[90%] md:w-[70%] mx-auto">
        <p className=" text-2xl md:text-5xl font-bold">{props.title}</p>
        <Link href={props.link}>{props.action}</Link>
      </div>
    </div>
  );
}

export default Header;
