import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-3xl font-bold">This Page is Not Found</div>
      <Link href="/">
        <button className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600">
          Go back to Home
        </button>
      </Link>
    </div>
  );
}