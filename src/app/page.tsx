import Image from "next/image";

export default function Home() {
  return (
    <div className="p-4">
      <Image src="/next.svg" alt="next" height={200} width={200}></Image>
    </div>
  );
}
