import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <h1>Home Page</h1>

        <Image
          src={"/assets/images/logo.svg"}
          width={"200"}
          height={"200"}
          alt="logo"
        />
      </main>
    </div>
  );
}
