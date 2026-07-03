import Image from "next/image";
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-primary -mt-40">
      <Image src="/404-error.svg" alt="404" width={500} height={500} />
      <h1 className=" font-bold">Page non trouvée.</h1>
      <p>La page que vous cherchez n'existe pas.</p>
    </div>
  );
}
