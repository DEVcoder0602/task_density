import Image from "next/image";
import headerimg from "../../public/header.jpg";

export default function Home() {
  return (
    <div className="container">
      <div className="header m-4 p-4">
        <Image src={headerimg} alt="" className="w-full rounded-3xl" />
      </div>
      <div className="info m-7 p-5 flex">
        <h2 className="text-3xl text-center font-semibold flex-1">EQ beats IQ</h2>
        <p className="flex-1 px-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod
          mollitia ipsum molestiae quos rerum delectus nemo consequatur
          voluptatem repellat ad labore, reiciendis vero fuga aspernatur eum
          quaerat vel ipsa.
        </p>
        <p className="flex-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod
          mollitia ipsum molestiae quos rerum delectus nemo consequatur
          voluptatem repellat ad labore, reiciendis vero fuga aspernatur eum
          quaerat vel ipsa.
        </p>
      </div>
    </div>
  );
}
